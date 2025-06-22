import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Mail, Lock, User, ArrowLeft, Phone } from 'lucide-react-native';
import { useAuthStore } from '@/store/authStore';

interface FieldErrors {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

interface TouchedFields {
  name: boolean;
  email: boolean;
  phoneNumber: boolean;
  password: boolean;
  confirmPassword: boolean;
}

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<FieldErrors>({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });
  const [touched, setTouched] = useState<TouchedFields>({
    name: false,
    email: false,
    phoneNumber: false,
    password: false,
    confirmPassword: false,
  });
  const { register, isLoading } = useAuthStore();

  // Validation functions
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phone: string) => {
    if (!phone) return true; // Optional field
    const cleanPhone = phone.replace(/\D/g, '');
    return cleanPhone.length >= 10 && cleanPhone.length <= 15;
  };

  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  const validateName = (name: string) => {
    return name.trim().length >= 2;
  };

  const validateConfirmPassword = (confirmPassword: string, password: string) => {
    return confirmPassword === password;
  };

  // Real-time validation
  const validateField = (field: keyof FieldErrors, value: string) => {
    let error = '';

    switch (field) {
      case 'name':
        if (!value.trim()) {
          error = 'Name is required';
        } else if (!validateName(value)) {
          error = 'Name must be at least 2 characters long';
        }
        break;
      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!validateEmail(value)) {
          error = 'Please enter a valid email address';
        }
        break;
      case 'phoneNumber':
        if (value && !validatePhoneNumber(value)) {
          error = 'Please enter a valid phone number (10-15 digits)';
        }
        break;
      case 'password':
        if (!value) {
          error = 'Password is required';
        } else if (value.length < 8) {
          error = 'Password must be at least 8 characters long';
        } else if (!validatePassword(value)) {
          error = 'Password must contain at least one letter and one number';
        }
        break;
      case 'confirmPassword':
        if (!value) {
          error = 'Please confirm your password';
        } else if (!validateConfirmPassword(value, password)) {
          error = 'Passwords do not match';
        }
        break;
    }

    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const handleFieldChange = (field: keyof FieldErrors, value: string) => {
    // Update the field value
    switch (field) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'phoneNumber':
        setPhoneNumber(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
    }

    // Mark field as touched and validate
    setTouched(prev => ({ ...prev, [field]: true }));
    validateField(field, value);

    // Special case for confirm password - validate when password changes
    if (field === 'password' && touched.confirmPassword) {
      validateField('confirmPassword', confirmPassword);
    }
  };

  const handleFieldBlur = (field: keyof FieldErrors) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    validateField(field, getFieldValue(field));
  };

  const getFieldValue = (field: keyof FieldErrors): string => {
    switch (field) {
      case 'name': return name;
      case 'email': return email;
      case 'phoneNumber': return phoneNumber;
      case 'password': return password;
      case 'confirmPassword': return confirmPassword;
      default: return '';
    }
  };

  const handleRegister = async () => {
    // Mark all fields as touched
    setTouched(prev => ({
      ...prev,
      name: true,
      email: true,
      phoneNumber: true,
      password: true,
      confirmPassword: true,
    }));

    // Validate all fields and collect errors
    const validationErrors: FieldErrors = {
      name: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
    };

    // Validate name
    if (!name.trim()) {
      validationErrors.name = 'Name is required';
    } else if (!validateName(name)) {
      validationErrors.name = 'Name must be at least 2 characters long';
    }

    // Validate email
    if (!email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      validationErrors.email = 'Please enter a valid email address';
    }

    // Validate phone number (only if provided)
    if (phoneNumber && !validatePhoneNumber(phoneNumber)) {
      validationErrors.phoneNumber = 'Please enter a valid phone number (10-15 digits)';
    }

    // Validate password
    if (!password) {
      validationErrors.password = 'Password is required';
    } else if (password.length < 8) {
      validationErrors.password = 'Password must be at least 8 characters long';
    } else if (!validatePassword(password)) {
      validationErrors.password = 'Password must contain at least one letter and one number';
    }

    // Validate confirm password
    if (!confirmPassword) {
      validationErrors.confirmPassword = 'Please confirm your password';
    } else if (!validateConfirmPassword(confirmPassword, password)) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }

    // Update errors state
    setErrors(validationErrors);

    // Check if there are any errors
    const hasErrors = Object.values(validationErrors).some(error => error !== '');
    if (hasErrors) {
      Alert.alert('Validation Error', 'Please fix the errors in the form');
      return;
    }

    try {
      await register(email, password, name);
      router.replace('/(tabs)');
    } catch (error) {
      Alert.alert('Error', 'Registration failed');
    }
  };

  const getInputStyle = (field: keyof FieldErrors) => {
    const hasError = touched[field] && errors[field];
    return [
      styles.inputContainer,
      hasError && styles.inputContainerError
    ];
  };

  const getInputTextStyle = (field: keyof FieldErrors) => {
    const hasError = touched[field] && errors[field];
    return [
      styles.input,
      hasError && styles.inputError
    ];
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#3B82F6', '#1E40AF']}
        style={styles.gradient}
      >
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <ArrowLeft color="#FFFFFF" size={24} />
          </TouchableOpacity>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>Join thousands of learners worldwide</Text>
        </View>

        <View style={styles.form}>
          <View style={getInputStyle('name')}>
            <User color={touched.name && errors.name ? "#EF4444" : "#9CA3AF"} size={20} />
            <TextInput
              style={getInputTextStyle('name')}
              placeholder="Full name"
              placeholderTextColor="#9CA3AF"
              value={name}
              onChangeText={(value) => handleFieldChange('name', value)}
              onBlur={() => handleFieldBlur('name')}
            />
          </View>
          {touched.name && errors.name && (
            <Text style={styles.errorText}>{errors.name}</Text>
          )}

          <View style={getInputStyle('email')}>
            <Mail color={touched.email && errors.email ? "#EF4444" : "#9CA3AF"} size={20} />
            <TextInput
              style={getInputTextStyle('email')}
              placeholder="Email address"
              placeholderTextColor="#9CA3AF"
              value={email}
              onChangeText={(value) => handleFieldChange('email', value)}
              onBlur={() => handleFieldBlur('email')}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          {touched.email && errors.email && (
            <Text style={styles.errorText}>{errors.email}</Text>
          )}

          <View style={getInputStyle('phoneNumber')}>
            <Phone color={touched.phoneNumber && errors.phoneNumber ? "#EF4444" : "#9CA3AF"} size={20} />
            <TextInput
              style={getInputTextStyle('phoneNumber')}
              placeholder="Phone number (optional)"
              placeholderTextColor="#9CA3AF"
              value={phoneNumber}
              onChangeText={(value) => handleFieldChange('phoneNumber', value)}
              onBlur={() => handleFieldBlur('phoneNumber')}
              keyboardType="phone-pad"
            />
          </View>
          {touched.phoneNumber && errors.phoneNumber && (
            <Text style={styles.errorText}>{errors.phoneNumber}</Text>
          )}

          <View style={getInputStyle('password')}>
            <Lock color={touched.password && errors.password ? "#EF4444" : "#9CA3AF"} size={20} />
            <TextInput
              style={getInputTextStyle('password')}
              placeholder="Password (min. 8 characters)"
              placeholderTextColor="#9CA3AF"
              value={password}
              onChangeText={(value) => handleFieldChange('password', value)}
              onBlur={() => handleFieldBlur('password')}
              secureTextEntry
            />
          </View>
          {touched.password && errors.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}

          <View style={getInputStyle('confirmPassword')}>
            <Lock color={touched.confirmPassword && errors.confirmPassword ? "#EF4444" : "#9CA3AF"} size={20} />
            <TextInput
              style={getInputTextStyle('confirmPassword')}
              placeholder="Confirm password"
              placeholderTextColor="#9CA3AF"
              value={confirmPassword}
              onChangeText={(value) => handleFieldChange('confirmPassword', value)}
              onBlur={() => handleFieldBlur('confirmPassword')}
              secureTextEntry
            />
          </View>
          {touched.confirmPassword && errors.confirmPassword && (
            <Text style={styles.errorText}>{errors.confirmPassword}</Text>
          )}

          <TouchableOpacity 
            style={[styles.registerButton, isLoading && styles.disabledButton]}
            onPress={handleRegister}
            disabled={isLoading}
          >
            <Text style={styles.registerButtonText}>
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => router.push('/(auth)/login')}>
              <Text style={styles.linkText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    paddingHorizontal: 24,
  },
  header: {
    marginTop: 20,
    marginBottom: 40,
  },
  backButton: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#E5E7EB',
  },
  form: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 16,
  },
  inputContainerError: {
    borderColor: '#EF4444',
    borderWidth: 1,
  },
  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#111827',
  },
  inputError: {
    color: '#EF4444',
  },
  registerButton: {
    backgroundColor: '#10B981',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  disabledButton: {
    opacity: 0.6,
  },
  registerButtonText: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#FFFFFF',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  footerText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#E5E7EB',
  },
  linkText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#FFFFFF',
  },
  errorText: {
    color: '#EF4444',
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    marginTop: -12,
    marginBottom: 8,
    marginLeft: 4,
  },
});