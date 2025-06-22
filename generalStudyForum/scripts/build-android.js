#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

console.log('🚀 Building optimized Android APK locally...');

try {
  // Clean previous builds
  console.log('🧹 Cleaning previous builds...');
  execSync('npx expo run:android --no-install --no-bundler --variant release', {
    stdio: 'inherit',
    cwd: process.cwd()
  });

  console.log('✅ Build completed successfully!');
  console.log('📱 APK should be located in: android/app/build/outputs/apk/release/');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
} 