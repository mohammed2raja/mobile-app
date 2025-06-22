import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  sendPasswordResetEmail,
  updateProfile,
  User,
  UserCredential
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';

export interface UserData {
  uid: string;
  email: string;
  displayName?: string;
  phoneNumber?: string;
  createdAt: Date;
  lastLoginAt: Date;
}

class AuthService {
  // Register new user
  async register(email: string, password: string, displayName?: string, phoneNumber?: string): Promise<UserCredential> {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Update profile with display name
      if (displayName && userCredential.user) {
        await updateProfile(userCredential.user, { displayName });
      }

      // Save user data to Firestore
      const userData: UserData = {
        uid: userCredential.user.uid,
        email: userCredential.user.email!,
        displayName: displayName || userCredential.user.displayName || undefined,
        phoneNumber: phoneNumber || userCredential.user.phoneNumber || undefined,
        createdAt: new Date(),
        lastLoginAt: new Date()
      };

      await setDoc(doc(db, 'users', userCredential.user.uid), userData);

      return userCredential;
    } catch (error: any) {
      throw new Error(this.getErrorMessage(error.code));
    }
  }

  // Login user
  async login(email: string, password: string): Promise<UserCredential> {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      // Update last login time
      const userData = {
        lastLoginAt: new Date()
      };
      
      await setDoc(doc(db, 'users', userCredential.user.uid), userData, { merge: true });

      return userCredential;
    } catch (error: any) {
      throw new Error(this.getErrorMessage(error.code));
    }
  }

  // Logout user
  async logout(): Promise<void> {
    try {
      await signOut(auth);
    } catch (error: any) {
      throw new Error(this.getErrorMessage(error.code));
    }
  }

  // Reset password
  async resetPassword(email: string): Promise<void> {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error: any) {
      throw new Error(this.getErrorMessage(error.code));
    }
  }

  // Get current user
  getCurrentUser(): User | null {
    return auth.currentUser;
  }

  // Get user data from Firestore
  async getUserData(uid: string): Promise<UserData | null> {
    try {
      const userDoc = await getDoc(doc(db, 'users', uid));
      if (userDoc.exists()) {
        return userDoc.data() as UserData;
      }
      return null;
    } catch (error: any) {
      throw new Error(this.getErrorMessage(error.code));
    }
  }

  // Update user profile
  async updateProfile(displayName?: string, phoneNumber?: string): Promise<void> {
    try {
      const user = auth.currentUser;
      if (!user) throw new Error('No user logged in');

      if (displayName) {
        await updateProfile(user, { displayName });
      }

      // Update in Firestore
      const userData: Partial<UserData> = {};
      if (displayName) userData.displayName = displayName;
      if (phoneNumber) userData.phoneNumber = phoneNumber;

      await setDoc(doc(db, 'users', user.uid), userData, { merge: true });
    } catch (error: any) {
      throw new Error(this.getErrorMessage(error.code));
    }
  }

  // Error message mapping
  private getErrorMessage(errorCode: string): string {
    switch (errorCode) {
      case 'auth/email-already-in-use':
        return 'An account with this email already exists.';
      case 'auth/invalid-email':
        return 'Please enter a valid email address.';
      case 'auth/operation-not-allowed':
        return 'Email/password accounts are not enabled. Please contact support.';
      case 'auth/weak-password':
        return 'Password should be at least 6 characters long.';
      case 'auth/user-disabled':
        return 'This account has been disabled. Please contact support.';
      case 'auth/user-not-found':
        return 'No account found with this email address.';
      case 'auth/wrong-password':
        return 'Incorrect password. Please try again.';
      case 'auth/too-many-requests':
        return 'Too many failed attempts. Please try again later.';
      case 'auth/network-request-failed':
        return 'Network error. Please check your internet connection.';
      default:
        return 'An error occurred. Please try again.';
    }
  }
}

export default new AuthService(); 