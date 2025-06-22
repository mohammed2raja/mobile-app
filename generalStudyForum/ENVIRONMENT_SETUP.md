# Environment Variables Setup Guide

## 🔒 **Secure Configuration Implementation**

This guide explains how to set up environment variables for the General Study Forum app to ensure secure handling of sensitive configuration data.

---

## 🎯 **What We've Implemented**

### ✅ **Security Improvements**
- ✅ Moved all Firebase secrets to `.env` file
- ✅ Added environment variable support with `react-native-dotenv`
- ✅ Created TypeScript types for environment variables
- ✅ Added `.env.example` template for new developers
- ✅ Updated `.gitignore` to exclude `.env` files
- ✅ Created setup scripts for easy configuration

### ✅ **Files Created/Modified**
- `.env` - Production environment variables
- `.env.example` - Template for new developers
- `babel.config.js` - Babel configuration for environment variables
- `types/env.d.ts` - TypeScript types for environment variables
- `config/firebase.ts` - Updated to use environment variables
- `scripts/setup-env.sh` - Setup script for new developers
- `SECURITY.md` - Security documentation
- `package.json` - Added setup and build scripts

---

## 🚀 **Quick Setup**

### **For New Developers**
```bash
# 1. Clone the repository
git clone <repository-url>
cd project-3

# 2. Install dependencies
npm install

# 3. Set up environment variables
npm run setup

# 4. Update .env file with your Firebase configuration
# 5. Start development
npm start
```

### **For Existing Developers**
```bash
# 1. Update dependencies
npm install

# 2. Copy .env.example to .env (if not exists)
cp .env.example .env

# 3. Update .env with your Firebase configuration
# 4. Start development
npm start
```

---

## 📁 **Environment Files Structure**

```
project-3/
├── .env                    # Production environment variables (NOT in git)
├── .env.example           # Template for new developers (in git)
├── config/
│   └── firebase.ts        # Uses environment variables
├── types/
│   └── env.d.ts           # TypeScript types
├── scripts/
│   └── setup-env.sh       # Setup script
└── SECURITY.md            # Security documentation
```

---

## 🔧 **Configuration Details**

### **Environment Variables Used**
```typescript
// Firebase Configuration
FIREBASE_API_KEY=your_api_key
FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
FIREBASE_MESSAGING_SENDER_ID=your_sender_id
FIREBASE_APP_ID=your_app_id
FIREBASE_MEASUREMENT_ID=your_measurement_id

// App Configuration
APP_NAME=General Study Forum
APP_VERSION=1.0.0
APP_ENVIRONMENT=production

// Security Settings
ENABLE_ANALYTICS=true
ENABLE_CRASH_REPORTING=true
```

### **Usage in Code**
```typescript
import { FIREBASE_API_KEY, APP_NAME } from '@env';

// TypeScript will provide autocomplete and type checking
console.log('App Name:', APP_NAME);
```

---

## 🛡️ **Security Benefits**

### **Before (Insecure)**
```typescript
// Hardcoded secrets in source code
const firebaseConfig = {
  apiKey: "AIzaSyAMnE-pi8jrE0o_OsrduYrrw0kl8kFpUsk", // ❌ Exposed in git
  authDomain: "general-study-forum.firebaseapp.com",
  // ... more hardcoded values
};
```

### **After (Secure)**
```typescript
// Environment variables from .env file
import { FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN } from '@env';

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY, // ✅ Secure, not in git
  authDomain: FIREBASE_AUTH_DOMAIN,
  // ... more secure values
};
```

---

## 📋 **Available Scripts**

### **Development Scripts**
```bash
npm start          # Start development server
npm run dev        # Alternative start command
npm run setup      # Set up environment variables
npm run setup:env  # Alternative setup command
```

### **Build Scripts**
```bash
npm run build:apk           # Build APK
npm run build:apk:universal # Build universal APK
npm run build:web          # Build for web
```

### **Platform Scripts**
```bash
npm run android   # Run on Android
npm run ios       # Run on iOS
npm run lint      # Run linting
```

---

## 🔍 **Troubleshooting**

### **Common Issues**

#### **"Module '@env' not found"**
```bash
# Solution: Clear cache and restart
npx expo start --clear
```

#### **"Environment variable undefined"**
```bash
# Check if .env file exists
ls -la .env

# Verify variable names in types/env.d.ts
cat types/env.d.ts
```

#### **Build errors**
```bash
# Clear all caches
rm -rf node_modules
npm install
npx expo start --clear
```

---

## 🎯 **Best Practices**

### ✅ **Do's**
- ✅ Use environment variables for all sensitive data
- ✅ Keep `.env` file in `.gitignore`
- ✅ Use `.env.example` as a template
- ✅ Rotate API keys regularly
- ✅ Use Firebase security rules
- ✅ Enable Firebase App Check

### ❌ **Don'ts**
- ❌ Never commit `.env` files
- ❌ Don't hardcode secrets in source code
- ❌ Don't share API keys publicly
- ❌ Don't use the same keys for dev/prod

---

## 🔐 **Firebase Security**

### **API Key Restrictions**
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Go to Project Settings > General
4. Scroll to "Your apps" section
5. Configure API key restrictions

### **Recommended Restrictions**
- **HTTP referrers**: Restrict to your domains
- **Android apps**: Restrict to your package name
- **iOS apps**: Restrict to your bundle ID

---

## 📚 **Additional Resources**

- [Firebase Security Documentation](https://firebase.google.com/docs/projects/api-keys)
- [React Native Environment Variables](https://github.com/goatandsheep/react-native-dotenv)
- [Firebase Security Rules](https://firebase.google.com/docs/firestore/security/get-started)
- [Environment Variables Best Practices](https://12factor.net/config)

---

## 🎉 **Success!**

Your app is now configured with secure environment variables! 

### **Next Steps:**
1. ✅ Set up Firebase Console with proper security rules
2. ✅ Test the app with environment variables
3. ✅ Build a new APK with secure configuration
4. ✅ Share the setup process with your team

The application is now more secure and follows industry best practices for handling sensitive configuration data. 