import { router } from 'expo-router';

// Navigation handlers
export const handleEmailSignUp = () => {
  router.push('/(auth)/register');
};

export const handleGmailSignUp = () => {
  // TODO: Implement Google OAuth
  alert('Google OAuth sign-up will be available soon!');
};

export const handleOtpSignUp = () => {
  // TODO: Navigate to OTP registration page
  alert('OTP-based registration will be available soon!');
};

export const handleSignIn = () => {
  router.push('/(auth)/login');
}; 