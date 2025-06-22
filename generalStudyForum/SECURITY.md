# Security Configuration

## 🔒 **Environment Variables Setup**

This project uses environment variables to securely manage sensitive configuration data, including Firebase credentials.

---

## 📁 **Environment Files**

### `.env` (Production)
- Contains actual Firebase configuration values
- **NEVER commit this file to version control**
- Used for development and production builds

### `.env.example` (Template)
- Contains placeholder values
- Safe to commit to version control
- Used as a template for new developers

---

## 🔧 **Configuration**

### **Firebase Configuration**
```env
FIREBASE_API_KEY=your_api_key_here
FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
FIREBASE_MESSAGING_SENDER_ID=your_sender_id
FIREBASE_APP_ID=your_app_id
FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### **App Configuration**
```env
APP_NAME=Your App Name
APP_VERSION=1.0.0
APP_ENVIRONMENT=production
```

### **Security Settings**
```env
ENABLE_ANALYTICS=true
ENABLE_CRASH_REPORTING=true
```

---

## 🛡️ **Security Best Practices**

### ✅ **Do's**
- ✅ Use environment variables for all sensitive data
- ✅ Keep `.env` file in `.gitignore`
- ✅ Use `.env.example` as a template
- ✅ Rotate API keys regularly
- ✅ Use Firebase security rules
- ✅ Enable Firebase App Check (recommended)

### ❌ **Don'ts**
- ❌ Never commit `.env` files
- ❌ Don't hardcode secrets in source code
- ❌ Don't share API keys publicly
- ❌ Don't use the same keys for development and production

---

## 🔐 **Firebase Security**

### **API Key Security**
- Firebase API keys are safe to expose in client apps
- They are restricted by Firebase Console settings
- Configure domain restrictions in Firebase Console

### **Firestore Security Rules**
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only access their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Add more restrictive rules as needed
    match /{document=**} {
      allow read, write: if false; // Deny by default
    }
  }
}
```

---

## 🚀 **Setup Instructions**

### **For New Developers**
1. Clone the repository
2. Copy `.env.example` to `.env`
3. Fill in your Firebase configuration values
4. Install dependencies: `npm install`
5. Start development: `npm start`

### **For Production**
1. Set up environment variables on your build server
2. Ensure `.env` file is present with production values
3. Build the app: `cd android && ./gradlew assembleRelease`

---

## 🔍 **Environment Variable Usage**

### **In TypeScript/JavaScript**
```typescript
import { FIREBASE_API_KEY, APP_NAME } from '@env';

console.log('App Name:', APP_NAME);
```

### **Type Safety**
- Environment variables are typed in `types/env.d.ts`
- TypeScript will provide autocomplete and type checking
- Undefined variables will cause build errors

---

## 📋 **Required Environment Variables**

| Variable | Description | Required |
|----------|-------------|----------|
| `FIREBASE_API_KEY` | Firebase API key | ✅ |
| `FIREBASE_AUTH_DOMAIN` | Firebase auth domain | ✅ |
| `FIREBASE_PROJECT_ID` | Firebase project ID | ✅ |
| `FIREBASE_STORAGE_BUCKET` | Firebase storage bucket | ✅ |
| `FIREBASE_MESSAGING_SENDER_ID` | Firebase messaging sender ID | ✅ |
| `FIREBASE_APP_ID` | Firebase app ID | ✅ |
| `FIREBASE_MEASUREMENT_ID` | Firebase analytics ID | ❌ |
| `APP_NAME` | Application name | ❌ |
| `APP_VERSION` | Application version | ❌ |
| `APP_ENVIRONMENT` | Environment (dev/prod) | ❌ |
| `ENABLE_ANALYTICS` | Enable Firebase analytics | ❌ |
| `ENABLE_CRASH_REPORTING` | Enable crash reporting | ❌ |

---

## 🔧 **Troubleshooting**

### **"Module '@env' not found"**
- Ensure `react-native-dotenv` is installed
- Check `babel.config.js` configuration
- Restart Metro bundler

### **"Environment variable undefined"**
- Check `.env` file exists
- Verify variable name spelling
- Ensure variable is exported in `types/env.d.ts`

### **Build Errors**
- Clear Metro cache: `npx expo start --clear`
- Reinstall dependencies: `npm install`
- Check TypeScript types

---

## 📚 **Additional Resources**

- [Firebase Security Documentation](https://firebase.google.com/docs/projects/api-keys)
- [React Native Environment Variables](https://github.com/goatandsheep/react-native-dotenv)
- [Firebase Security Rules](https://firebase.google.com/docs/firestore/security/get-started)

---

## 🎯 **Next Steps**

1. **Set up Firebase Console** with proper security rules
2. **Enable Firebase App Check** for additional security
3. **Configure API key restrictions** in Firebase Console
4. **Set up monitoring** for suspicious activity
5. **Regular security audits** of your configuration 