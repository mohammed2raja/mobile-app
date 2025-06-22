# Firebase Setup Guide

This guide will help you set up Firebase authentication for the General Study Forum app.

## Prerequisites

1. A Firebase project (already created: `general-study-forum`)
2. Firebase CLI installed (optional, for advanced features)

## Configuration Steps

### 1. Firebase Project Setup

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `general-study-forum`
3. Enable Authentication:
   - Go to Authentication > Sign-in method
   - Enable Email/Password authentication
   - Optionally enable Google Sign-in for OAuth

### 2. Firestore Database Setup

1. Go to Firestore Database in your Firebase console
2. Create a database in test mode (for development)
3. Set up security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read and write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Add more rules as needed for other collections
  }
}
```

### 3. Download Configuration Files

#### For Android:
1. Go to Project Settings > General
2. Scroll down to "Your apps" section
3. Click on the Android app (package: `com.mohammed2raja.generalstudyforum`)
4. Download the `google-services.json` file
5. Replace the placeholder file in `android/app/google-services.json`

#### For iOS (if needed):
1. Go to Project Settings > General
2. Scroll down to "Your apps" section
3. Click on the iOS app
4. Download the `GoogleService-Info.plist` file
5. Add it to your iOS project

### 4. Environment Variables (Optional)

For additional security, you can move Firebase config to environment variables:

1. Create a `.env` file in your project root
2. Add your Firebase config:

```env
FIREBASE_API_KEY=AIzaSyAMnE-pi8jrE0o_OsrduYrrw0kl8kFpUsk
FIREBASE_AUTH_DOMAIN=general-study-forum.firebaseapp.com
FIREBASE_PROJECT_ID=general-study-forum
FIREBASE_STORAGE_BUCKET=general-study-forum.firebasestorage.app
FIREBASE_MESSAGING_SENDER_ID=610185294530
FIREBASE_APP_ID=1:610185294530:web:32c8b3e9802e9bca2ac15b
FIREBASE_MEASUREMENT_ID=G-MSF089BDHY
```

3. Update `config/firebase.ts` to use environment variables:

```typescript
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};
```

## Features Implemented

### Authentication
- ✅ Email/Password registration and login
- ✅ User profile management
- ✅ Password reset functionality
- ✅ Automatic session management
- ✅ Secure logout

### User Data Storage
- ✅ User profiles stored in Firestore
- ✅ Real-time user data synchronization
- ✅ Profile updates (name, phone number)

### Error Handling
- ✅ Comprehensive error messages
- ✅ User-friendly error display
- ✅ Network error handling

## Testing the Setup

1. Run the app: `npm start`
2. Try registering a new user
3. Try logging in with the registered user
4. Check the Firebase console to see the user in Authentication
5. Check Firestore to see the user data

## Security Considerations

1. **Firestore Rules**: Make sure to set up proper security rules
2. **API Keys**: The API key in the config is safe to expose in client apps
3. **Authentication**: Firebase handles password hashing and security
4. **Data Validation**: Implement server-side validation for critical operations

## Troubleshooting

### Common Issues:

1. **"Google Services plugin not found"**
   - Make sure `google-services.json` is in `android/app/`
   - Clean and rebuild: `cd android && ./gradlew clean`

2. **"Firebase not initialized"**
   - Check that Firebase config is correct
   - Ensure all dependencies are installed

3. **"Permission denied"**
   - Check Firestore security rules
   - Verify user authentication state

4. **Build errors**
   - Run `npm install` to ensure all dependencies are installed
   - Clear Metro cache: `npx expo start --clear`

## Next Steps

1. **Google OAuth**: Implement Google Sign-in
2. **Phone Authentication**: Add phone number verification
3. **Email Verification**: Require email verification for new accounts
4. **Password Policies**: Implement stronger password requirements
5. **User Roles**: Add role-based access control
6. **Analytics**: Set up Firebase Analytics for user behavior tracking

## Support

If you encounter issues:
1. Check the Firebase console for error logs
2. Review the Firebase documentation
3. Check the app's error messages for specific issues 