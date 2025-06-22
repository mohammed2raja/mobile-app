import { useEffect } from 'react';
import { router } from 'expo-router';
import { useAuth } from '@/hooks/useAuth';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export default function IndexScreen() {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      // Show welcome page for new users (not authenticated)
      // Show main app for authenticated users
      if (user) {
        router.replace('/(tabs)');
      } else {
        // Default route for new users - show welcome page
        router.replace('/(auth)/welcome');
      }
    }
  }, [user, loading]);

  // Loading screen while checking authentication
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#667eea" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
  },
});