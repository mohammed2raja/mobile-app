import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useAuthStore } from '@/store/authStore';
import { Bell, Calendar, BookOpen, Play, Trophy, TrendingUp } from 'lucide-react-native';

export default function HomeScreen() {
  const { user } = useAuthStore();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <View>
              <Text style={styles.greeting}>Good morning,</Text>
              <Text style={styles.userName}>{user?.name}</Text>
            </View>
            <TouchableOpacity style={styles.notificationButton}>
              <Bell color="#6B7280" size={24} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Daily Progress Card */}
        <View style={styles.section}>
          <LinearGradient
            colors={['#3B82F6', '#1E40AF']}
            style={styles.progressCard}
          >
            <View style={styles.progressContent}>
              <View>
                <Text style={styles.progressTitle}>Today's Progress</Text>
                <Text style={styles.progressSubtitle}>Keep up the great work!</Text>
              </View>
              <View style={styles.progressStats}>
                <Text style={styles.progressNumber}>85%</Text>
                <Text style={styles.progressLabel}>Complete</Text>
              </View>
            </View>
          </LinearGradient>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionsGrid}>
            <TouchableOpacity style={styles.actionCard}>
              <View style={[styles.actionIcon, { backgroundColor: '#EF4444' }]}>
                <Calendar color="#FFFFFF" size={24} />
              </View>
              <Text style={styles.actionTitle}>Live Class</Text>
              <Text style={styles.actionSubtitle}>Join now</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionCard}>
              <View style={[styles.actionIcon, { backgroundColor: '#10B981' }]}>
                <Play color="#FFFFFF" size={24} />
              </View>
              <Text style={styles.actionTitle}>Watch Video</Text>
              <Text style={styles.actionSubtitle}>Continue learning</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionCard}>
              <View style={[styles.actionIcon, { backgroundColor: '#F59E0B' }]}>
                <Trophy color="#FFFFFF" size={24} />
              </View>
              <Text style={styles.actionTitle}>Daily Quiz</Text>
              <Text style={styles.actionSubtitle}>Test knowledge</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionCard}>
              <View style={[styles.actionIcon, { backgroundColor: '#8B5CF6' }]}>
                <BookOpen color="#FFFFFF" size={24} />
              </View>
              <Text style={styles.actionTitle}>Study Notes</Text>
              <Text style={styles.actionSubtitle}>Review topics</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent Activities */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Activities</Text>
          <View style={styles.activityList}>
            <View style={styles.activityItem}>
              <Image 
                source={{ uri: 'https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2' }}
                style={styles.activityImage}
              />
              <View style={styles.activityContent}>
                <Text style={styles.activityTitle}>Mathematics - Algebra Basics</Text>
                <Text style={styles.activitySubtitle}>Completed 2 hours ago</Text>
              </View>
              <TrendingUp color="#10B981" size={20} />
            </View>
            
            <View style={styles.activityItem}>
              <Image 
                source={{ uri: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2' }}
                style={styles.activityImage}
              />
              <View style={styles.activityContent}>
                <Text style={styles.activityTitle}>Physics - Newton's Laws</Text>
                <Text style={styles.activitySubtitle}>Quiz score: 92%</Text>
              </View>
              <Trophy color="#F59E0B" size={20} />
            </View>
            
            <View style={styles.activityItem}>
              <Image 
                source={{ uri: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2' }}
                style={styles.activityImage}
              />
              <View style={styles.activityContent}>
                <Text style={styles.activityTitle}>English Literature</Text>
                <Text style={styles.activitySubtitle}>Live class attended</Text>
              </View>
              <Calendar color="#3B82F6" size={20} />
            </View>
          </View>
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
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
  },
  userName: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#111827',
    marginTop: 2,
  },
  notificationButton: {
    padding: 8,
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 24,
  },
  progressCard: {
    borderRadius: 16,
    padding: 20,
  },
  progressContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#FFFFFF',
  },
  progressSubtitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#E5E7EB',
    marginTop: 4,
  },
  progressStats: {
    alignItems: 'center',
  },
  progressNumber: {
    fontSize: 28,
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
  },
  progressLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#E5E7EB',
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: '#111827',
    marginBottom: 16,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  actionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    width: '48%',
    alignItems: 'center',
  },
  actionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  actionTitle: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#111827',
    marginBottom: 4,
  },
  actionSubtitle: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    textAlign: 'center',
  },
  activityList: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  activityImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginRight: 12,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#111827',
  },
  activitySubtitle: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    marginTop: 2,
  },
});