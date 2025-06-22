# 📚 General Study Forum

A modern, secure React Native application built with Expo for students to access educational content, take quizzes, watch videos, and manage their learning journey.

![General Study Forum](assets/images/icon.png)

## 🎯 **Overview**

General Study Forum is a comprehensive educational platform that provides students with:
- **📖 Interactive Classes**: Access to structured learning materials
- **🎯 Quizzes & Assessments**: Test knowledge with interactive quizzes
- **🎥 Educational Videos**: Watch curated educational content
- **👤 User Profiles**: Personalized learning experience
- **🔐 Secure Authentication**: Firebase-powered user management

## ✨ **Features**

### 🔐 **Authentication & Security**
- **Firebase Authentication**: Secure email/password registration and login
- **Environment Variables**: Secure configuration management
- **User Profiles**: Personalized user experience
- **Session Management**: Automatic login state handling

### 📱 **Core Features**
- **Classes Module**: Browse and access educational content
- **Quizzes Module**: Interactive assessments with real-time feedback
- **Videos Module**: Educational video content library
- **Profile Management**: User settings and preferences
- **Responsive Design**: Works on mobile and tablet devices

### 🛠 **Technical Features**
- **Cross-Platform**: iOS, Android, and Web support
- **TypeScript**: Full type safety and better development experience
- **Expo Router**: File-based routing with deep linking
- **Optimized Builds**: APK size optimization and performance tuning
- **Modern UI**: Beautiful, intuitive user interface

## 🚀 **Quick Start**

### **Prerequisites**
- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

### **Installation**

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd project-3
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   npm run setup
   ```

4. **Configure Firebase**
   - Copy `.env.example` to `.env`
   - Add your Firebase configuration values
   - See [Firebase Setup Guide](FIREBASE_SETUP.md) for details

5. **Start development**
   ```bash
   npm start
   ```

## 📱 **Platform Support**

| Platform | Status | Notes |
|----------|--------|-------|
| **Android** | ✅ Supported | APK builds available |
| **iOS** | ✅ Supported | Requires macOS for development |
| **Web** | ✅ Supported | Responsive design |

## 🏗 **Project Structure**

```
project-3/
├── app/                          # Expo Router app directory
│   ├── (auth)/                   # Authentication screens
│   │   ├── login.tsx            # Login screen
│   │   ├── register.tsx         # Registration screen
│   │   └── welcome.tsx          # Welcome screen
│   ├── (tabs)/                   # Main app tabs
│   │   ├── index.tsx            # Home screen
│   │   ├── classes.tsx          # Classes module
│   │   ├── quizzes.tsx          # Quizzes module
│   │   ├── videos.tsx           # Videos module
│   │   └── profile.tsx          # User profile
│   └── _layout.tsx              # Root layout
├── components/                    # Reusable components
│   └── welcome/                  # Welcome page components
├── config/                       # Configuration files
│   └── firebase.ts              # Firebase configuration
├── hooks/                        # Custom React hooks
│   ├── useAuth.ts               # Authentication hook
│   └── useFrameworkReady.ts     # Framework ready hook
├── services/                     # API services
│   └── authService.ts           # Authentication service
├── store/                        # State management
│   └── authStore.ts             # Authentication store
├── types/                        # TypeScript types
│   └── env.d.ts                 # Environment variable types
├── scripts/                      # Build and setup scripts
│   ├── setup-env.sh             # Environment setup script
│   └── build-android.js         # Android build script
└── assets/                       # Static assets
    └── images/                   # App images and icons
```

## 🔧 **Available Scripts**

### **Development**
```bash
npm start              # Start development server
npm run dev            # Alternative start command
npm run android        # Run on Android device/emulator
npm run ios            # Run on iOS device/simulator
npm run web            # Run on web browser
```

### **Setup & Configuration**
```bash
npm run setup          # Set up environment variables
npm run setup:env      # Alternative setup command
```

### **Building**
```bash
npm run build:apk              # Build Android APK
npm run build:apk:universal    # Build universal APK
npm run build:web              # Build for web
```

### **Code Quality**
```bash
npm run lint           # Run ESLint
```

## 🔐 **Security**

This application implements several security measures:

- **Environment Variables**: All sensitive data stored in `.env` files
- **Firebase Security**: Secure authentication and data access
- **API Key Protection**: Firebase API keys properly configured
- **Code Obfuscation**: ProGuard enabled for Android builds
- **Resource Optimization**: Optimized APK sizes for better performance

For detailed security information, see [SECURITY.md](SECURITY.md).

## 📦 **Build & Deployment**

### **Android APK**
```bash
# Build optimized APK
npm run build:apk:universal

# APK will be available at:
# - General-Study-Forum-Universal.apk (Universal APK)
# - android/app/build/outputs/apk/release/ (Architecture-specific APKs)
```

### **Build Optimization**
- **APK Size**: ~95MB (Universal) / ~26-33MB (Architecture-specific)
- **ProGuard**: Code obfuscation and optimization
- **Resource Shrinking**: Removes unused resources
- **Code Splitting**: Architecture-specific builds

For detailed build information, see [APK_BUILD_SUMMARY.md](APK_BUILD_SUMMARY.md).

## 🛠 **Technology Stack**

### **Frontend**
- **React Native**: Cross-platform mobile development
- **Expo**: Development platform and tools
- **TypeScript**: Type-safe JavaScript
- **Expo Router**: File-based routing

### **Backend & Services**
- **Firebase**: Authentication, database, and hosting
- **Firestore**: NoSQL database
- **Firebase Auth**: User authentication

### **State Management**
- **Zustand**: Lightweight state management
- **React Hooks**: Custom hooks for business logic

### **UI & Styling**
- **Expo Vector Icons**: Icon library
- **React Native SVG**: SVG support
- **Expo Linear Gradient**: Gradient components
- **Custom Components**: Modular, reusable UI components

## 🔧 **Configuration**

### **Environment Variables**
The application uses environment variables for secure configuration:

```env
# Firebase Configuration
FIREBASE_API_KEY=your_api_key
FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
FIREBASE_MESSAGING_SENDER_ID=your_sender_id
FIREBASE_APP_ID=your_app_id
FIREBASE_MEASUREMENT_ID=your_measurement_id

# App Configuration
APP_NAME=General Study Forum
APP_VERSION=1.0.0
APP_ENVIRONMENT=production

# Security Settings
ENABLE_ANALYTICS=true
ENABLE_CRASH_REPORTING=true
```

For setup instructions, see [ENVIRONMENT_SETUP.md](ENVIRONMENT_SETUP.md).

## 📱 **App Screenshots**

### **Authentication**
- Welcome screen with multiple sign-in options
- Email/password registration with validation
- Secure login with Firebase authentication

### **Main Features**
- **Home**: Dashboard with quick access to features
- **Classes**: Educational content and materials
- **Quizzes**: Interactive assessments and tests
- **Videos**: Educational video library
- **Profile**: User settings and preferences

## 🐛 **Troubleshooting**

### **Common Issues**

#### **"Module '@env' not found"**
```bash
# Clear cache and restart
npx expo start --clear
```

#### **Firebase Authentication Issues**
- Verify Firebase configuration in `.env`
- Check Firebase Console for project settings
- Ensure proper API key restrictions

#### **Build Errors**
```bash
# Clear all caches
rm -rf node_modules
npm install
npx expo start --clear
```

#### **APK Build Issues**
- Ensure Android SDK is properly configured
- Check `ANDROID_HOME` environment variable
- Verify Gradle configuration

### **Getting Help**
- Check the [Firebase Setup Guide](FIREBASE_SETUP.md)
- Review [Security Documentation](SECURITY.md)
- See [Environment Setup Guide](ENVIRONMENT_SETUP.md)
- Check [APK Build Summary](APK_BUILD_SUMMARY.md)

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### **Development Guidelines**
- Follow TypeScript best practices
- Use meaningful commit messages
- Test on multiple platforms
- Update documentation as needed

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 **Acknowledgments**

- **Expo Team**: For the amazing development platform
- **Firebase Team**: For robust backend services
- **React Native Community**: For excellent documentation and tools
- **Open Source Contributors**: For the libraries and tools used

## 📞 **Support**

For support and questions:
- Create an issue in the repository
- Check the documentation files
- Review troubleshooting guides

---

**Built with ❤️ using React Native and Expo** 