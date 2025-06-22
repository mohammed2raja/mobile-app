import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { 
  HeroSection, 
  FeaturesSection, 
  SignUpSection, 
  SignInSection, 
  Footer,
  handleEmailSignUp,
  handleGmailSignUp,
  handleOtpSignUp,
  handleSignIn
} from '@/components/welcome';
import { Video, BookOpen, Trophy, Users, Mail, Smartphone } from 'lucide-react-native';

export default function WelcomeScreen() {
  // Hero section data
  const heroData = {
    title: 'General Study Forum',
    subtitle: 'Your Ultimate Learning Community',
    description: 'Join thousands of students worldwide in a collaborative learning environment. Access live classes, study materials, and connect with expert educators.',
  };

  // Features data
  const featuresData = [
    {
      icon: <Video color="#667eea" size={28} />,
      title: 'Live Classes',
      description: 'Interactive sessions with real-time Q&A',
    },
    {
      icon: <BookOpen color="#667eea" size={28} />,
      title: 'Study Materials',
      description: 'Comprehensive resources and notes',
    },
    {
      icon: <Trophy color="#667eea" size={28} />,
      title: 'Daily Quizzes',
      description: 'Test your knowledge regularly',
    },
    {
      icon: <Users color="#667eea" size={28} />,
      title: 'Expert Teachers',
      description: 'Learn from qualified professionals',
    },
  ];

  // Sign up options data
  const signUpOptionsData = [
    {
      id: 'email',
      icon: <Mail color="#667eea" size={24} />,
      title: 'Email & Password',
      description: 'Traditional sign-up with email verification',
      onPress: handleEmailSignUp,
    },
    {
      id: 'gmail',
      icon: <Mail color="#DB4437" size={24} />,
      title: 'Continue with Gmail',
      description: 'Quick and secure Google account sign-up',
      onPress: handleGmailSignUp,
      iconStyle: { backgroundColor: '#FEF2F2' },
    },
    {
      id: 'otp',
      icon: <Smartphone color="#10B981" size={24} />,
      title: 'OTP Verification',
      description: 'Secure sign-up with email verification code',
      onPress: handleOtpSignUp,
      iconStyle: { backgroundColor: '#F0FDF4' },
    },
  ];

  // Sign up section data
  const signUpSectionData = {
    title: 'Get Started Today',
    subtitle: 'Choose your preferred way to join our community',
    options: signUpOptionsData,
  };

  // Sign in section data
  const signInSectionData = {
    dividerText: 'Already a member?',
    buttonText: 'Sign In to Your Account',
    onPress: handleSignIn,
  };

  // Footer data
  const footerData = {
    text: 'By joining, you agree to our Terms of Service and Privacy Policy',
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#667eea', '#764ba2']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <HeroSection {...heroData} />
            <FeaturesSection 
              title="Why Choose Us?" 
              features={featuresData} 
            />
            <SignUpSection {...signUpSectionData} />
            <SignInSection {...signInSectionData} />
            <Footer {...footerData} />
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
});