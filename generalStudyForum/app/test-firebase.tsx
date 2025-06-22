import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useAuth } from '@/hooks/useAuth';

export default function TestFirebase() {
  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('password123');
  const { register, login, user, loading, error } = useAuth();

  const handleTestRegister = async () => {
    try {
      console.log('Testing registration...');
      await register(email, password, 'Test User');
      Alert.alert('Success', 'Registration successful!');
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  const handleTestLogin = async () => {
    try {
      console.log('Testing login...');
      await login(email, password);
      Alert.alert('Success', 'Login successful!');
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Firebase Test</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <TouchableOpacity 
        style={styles.button}
        onPress={handleTestRegister}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? 'Testing...' : 'Test Register'}
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={handleTestLogin}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? 'Testing...' : 'Test Login'}
        </Text>
      </TouchableOpacity>
      
      {user && (
        <View style={styles.userInfo}>
          <Text style={styles.userText}>Logged in as: {user.email}</Text>
          <Text style={styles.userText}>UID: {user.uid}</Text>
        </View>
      )}
      
      {error && (
        <Text style={styles.errorText}>Error: {error}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  userInfo: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#e8f5e8',
    borderRadius: 5,
  },
  userText: {
    fontSize: 14,
    marginBottom: 5,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
}); 