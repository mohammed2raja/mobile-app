import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '@/hooks/useAuth';
import { router } from 'expo-router';
import { User, Settings, BookOpen, Trophy, Bell, CircleHelp as HelpCircle, LogOut, ChevronRight, Star, Calendar } from 'lucide-react-native';

export default function ProfileScreen() {
  const { user, userData, logout } = useAuth();

  const handleLogout = async () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: async () => {
            try {
              await logout();
              router.replace('/(auth)/welcome');
            } catch (error: any) {
              Alert.alert('Error', error.message);
            }
          },
        },
      ]
    );
  };

  const profileStats = [
    { label: 'Courses Completed', value: '12', icon: BookOpen, color: '#3B82F6' },
    { label: 'Total Points', value: '1,247', icon: Trophy, color: '#F59E0B' },
    { label: 'Study Streak', value: '15 days', icon: Calendar, color: '#10B981' },
    { label: 'Average Score', value: '89%', icon: Star, color: '#EF4444' },
  ];

  const menuItems = [
    { title: 'Account Settings', icon: Settings, onPress: () => {} },
    { title: 'Notifications', icon: Bell, onPress: () => {} },
    { title: 'Help & Support', icon: HelpCircle, onPress: () => {} },
    { title: 'Logout', icon: LogOut, onPress: handleLogout, isDestructive: true },
  ];

  // Default avatar if user doesn't have one
  const avatarUri = user?.photoURL || 'https://via.placeholder.com/80x80/3B82F6/FFFFFF?text=' + (user?.displayName?.[0] || user?.email?.[0] || 'U').toUpperCase();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <Image 
            source={{ uri: avatarUri }}
            style={styles.avatar}
          />
          <Text style={styles.userName}>
            {user?.displayName || userData?.displayName || 'User'}
          </Text>
          <Text style={styles.userEmail}>{user?.email}</Text>
          
          {userData?.phoneNumber && (
            <Text style={styles.userPhone}>{userData.phoneNumber}</Text>
          )}
          
          <TouchableOpacity style={styles.editProfileButton}>
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Stats Grid */}
        <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>Your Progress</Text>
          <View style={styles.statsGrid}>
            {profileStats.map((stat) => (
              <View key={stat.label} style={styles.statCard}>
                <View style={[styles.statIcon, { backgroundColor: `${stat.color}15` }]}>
                  <stat.icon color={stat.color} size={20} />
                </View>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Achievement Badges */}
        <View style={styles.achievementsSection}>
          <Text style={styles.sectionTitle}>Recent Achievements</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.achievementsList}>
              <View style={styles.achievementBadge}>
                <Trophy color="#F59E0B" size={24} />
                <Text style={styles.achievementText}>Quiz Master</Text>
              </View>
              
              <View style={styles.achievementBadge}>
                <Star color="#EF4444" size={24} />
                <Text style={styles.achievementText}>Top Performer</Text>
              </View>
              
              <View style={styles.achievementBadge}>
                <BookOpen color="#3B82F6" size={24} />
                <Text style={styles.achievementText}>Dedicated Learner</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* Menu Items */}
        <View style={styles.menuSection}>
          <Text style={styles.sectionTitle}>Account</Text>
          <View style={styles.menuList}>
            {menuItems.map((item) => (
              <TouchableOpacity 
                key={item.title}
                style={styles.menuItem}
                onPress={item.onPress}
              >
                <View style={styles.menuItemLeft}>
                  <View style={[
                    styles.menuIcon, 
                    item.isDestructive && styles.destructiveIcon
                  ]}>
                    <item.icon 
                      color={item.isDestructive ? '#EF4444' : '#6B7280'} 
                      size={20} 
                    />
                  </View>
                  <Text style={[
                    styles.menuText,
                    item.isDestructive && styles.destructiveText
                  ]}>
                    {item.title}
                  </Text>
                </View>
                <ChevronRight color="#9CA3AF" size={16} />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* App Info */}
        <View style={styles.appInfo}>
          <Text style={styles.appInfoText}>General Study Forum v1.0.0</Text>
          <Text style={styles.appInfoText}>Made with ❤️ for learners worldwide</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  profileHeader: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 16,
  },
  userName: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#111827',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    marginBottom: 4,
  },
  userPhone: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    marginBottom: 20,
  },
  editProfileButton: {
    backgroundColor: '#3B82F6',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 20,
  },
  editProfileText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#FFFFFF',
  },
  statsSection: {
    paddingHorizontal: 20,
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: '#111827',
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  statCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    width: '48%',
    alignItems: 'center',
  },
  statIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  statValue: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#111827',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    textAlign: 'center',
  },
  achievementsSection: {
    paddingHorizontal: 20,
    marginTop: 32,
  },
  achievementsList: {
    flexDirection: 'row',
    gap: 12,
    paddingRight: 20,
  },
  achievementBadge: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    width: 100,
  },
  achievementText: {
    fontSize: 11,
    fontFamily: 'Inter-Medium',
    color: '#6B7280',
    marginTop: 8,
    textAlign: 'center',
  },
  menuSection: {
    paddingHorizontal: 20,
    marginTop: 32,
  },
  menuList: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  destructiveIcon: {
    backgroundColor: '#FEE2E2',
  },
  menuText: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: '#111827',
  },
  destructiveText: {
    color: '#EF4444',
  },
  appInfo: {
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 20,
  },
  appInfoText: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#9CA3AF',
    marginBottom: 4,
  },
});