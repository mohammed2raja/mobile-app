import { useState, useEffect } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';
import authService, { UserData } from '../services/authService';

interface AuthState {
  user: User | null;
  userData: UserData | null;
  loading: boolean;
  error: string | null;
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    userData: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          // Get additional user data from Firestore
          const userData = await authService.getUserData(user.uid);
          setAuthState({
            user,
            userData,
            loading: false,
            error: null
          });
        } else {
          setAuthState({
            user: null,
            userData: null,
            loading: false,
            error: null
          });
        }
      } catch (error: any) {
        setAuthState({
          user: null,
          userData: null,
          loading: false,
          error: error.message
        });
      }
    });

    return () => unsubscribe();
  }, []);

  const register = async (email: string, password: string, displayName?: string, phoneNumber?: string) => {
    setAuthState(prev => ({ ...prev, loading: true, error: null }));
    try {
      await authService.register(email, password, displayName, phoneNumber);
    } catch (error: any) {
      setAuthState(prev => ({ ...prev, loading: false, error: error.message }));
      throw error;
    }
  };

  const login = async (email: string, password: string) => {
    setAuthState(prev => ({ ...prev, loading: true, error: null }));
    try {
      await authService.login(email, password);
    } catch (error: any) {
      setAuthState(prev => ({ ...prev, loading: false, error: error.message }));
      throw error;
    }
  };

  const logout = async () => {
    setAuthState(prev => ({ ...prev, loading: true, error: null }));
    try {
      await authService.logout();
    } catch (error: any) {
      setAuthState(prev => ({ ...prev, loading: false, error: error.message }));
      throw error;
    }
  };

  const resetPassword = async (email: string) => {
    setAuthState(prev => ({ ...prev, loading: true, error: null }));
    try {
      await authService.resetPassword(email);
      setAuthState(prev => ({ ...prev, loading: false }));
    } catch (error: any) {
      setAuthState(prev => ({ ...prev, loading: false, error: error.message }));
      throw error;
    }
  };

  const updateProfile = async (displayName?: string, phoneNumber?: string) => {
    setAuthState(prev => ({ ...prev, loading: true, error: null }));
    try {
      await authService.updateProfile(displayName, phoneNumber);
      // Refresh user data
      if (authState.user) {
        const userData = await authService.getUserData(authState.user.uid);
        setAuthState(prev => ({ ...prev, userData, loading: false }));
      }
    } catch (error: any) {
      setAuthState(prev => ({ ...prev, loading: false, error: error.message }));
      throw error;
    }
  };

  const clearError = () => {
    setAuthState(prev => ({ ...prev, error: null }));
  };

  return {
    ...authState,
    register,
    login,
    logout,
    resetPassword,
    updateProfile,
    clearError
  };
}; 