import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMnE-pi8jrE0o_OsrduYrrw0kl8kFpUsk",
  authDomain: "general-study-forum.firebaseapp.com",
  projectId: "general-study-forum",
  storageBucket: "general-study-forum.firebasestorage.app",
  messagingSenderId: "610185294530",
  appId: "1:610185294530:web:32c8b3e9802e9bca2ac15b",
  measurementId: "G-MSF089BDHY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Analytics (optional - only works on web)
let analytics = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { app, auth, db, analytics };
export default app; 