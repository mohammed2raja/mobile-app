#!/bin/bash

# Environment Setup Script for General Study Forum
echo "🔧 Setting up environment variables for General Study Forum..."

# Check if .env file exists
if [ -f ".env" ]; then
    echo "⚠️  .env file already exists. Do you want to overwrite it? (y/n)"
    read -r response
    if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
        echo "📝 Overwriting .env file..."
    else
        echo "❌ Setup cancelled."
        exit 1
    fi
fi

# Copy .env.example to .env
if [ -f ".env.example" ]; then
    cp .env.example .env
    echo "✅ Created .env file from template"
else
    echo "❌ .env.example file not found!"
    exit 1
fi

echo ""
echo "📋 Please update the following values in your .env file:"
echo ""
echo "🔥 Firebase Configuration:"
echo "   - FIREBASE_API_KEY: Your Firebase API key"
echo "   - FIREBASE_AUTH_DOMAIN: Your Firebase auth domain"
echo "   - FIREBASE_PROJECT_ID: Your Firebase project ID"
echo "   - FIREBASE_STORAGE_BUCKET: Your Firebase storage bucket"
echo "   - FIREBASE_MESSAGING_SENDER_ID: Your Firebase messaging sender ID"
echo "   - FIREBASE_APP_ID: Your Firebase app ID"
echo "   - FIREBASE_MEASUREMENT_ID: Your Firebase analytics ID (optional)"
echo ""
echo "📱 App Configuration:"
echo "   - APP_NAME: Your app name"
echo "   - APP_VERSION: Your app version"
echo "   - APP_ENVIRONMENT: development or production"
echo ""
echo "🔒 Security Settings:"
echo "   - ENABLE_ANALYTICS: true or false"
echo "   - ENABLE_CRASH_REPORTING: true or false"
echo ""
echo "💡 You can get Firebase configuration from:"
echo "   https://console.firebase.google.com/project/YOUR_PROJECT/settings/general"
echo ""
echo "✅ Environment setup complete!"
echo "🚀 Run 'npm start' to start development" 