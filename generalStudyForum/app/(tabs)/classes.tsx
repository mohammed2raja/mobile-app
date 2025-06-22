import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar, Clock, Users, Video } from 'lucide-react-native';

export default function ClassesScreen() {
  const liveClasses = [
    {
      id: '1',
      title: 'Advanced Mathematics - Calculus',
      instructor: 'Dr. Sarah Johnson',
      time: '10:00 AM - 11:30 AM',
      participants: 24,
      isLive: true,
      thumbnail: 'https://images.pexels.com/photos/3683053/pexels-photo-3683053.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2'
    },
    {
      id: '2',
      title: 'Physics - Quantum Mechanics',
      instructor: 'Prof. Michael Chen',
      time: '2:00 PM - 3:30 PM',
      participants: 18,
      isLive: false,
      thumbnail: 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2'
    },
    {
      id: '3',
      title: 'English Literature Discussion',
      instructor: 'Ms. Emily Roberts',
      time: '4:00 PM - 5:30 PM',
      participants: 32,
      isLive: false,
      thumbnail: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Live Classes</Text>
        <Text style={styles.headerSubtitle}>Join interactive learning sessions</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        <View style={styles.todaySection}>
          <Text style={styles.sectionTitle}>Today's Schedule</Text>
          
          {liveClasses.map((classItem) => (
            <TouchableOpacity key={classItem.id} style={styles.classCard}>
              <Image 
                source={{ uri: classItem.thumbnail }}
                style={styles.classImage}
              />
              
              {classItem.isLive && (
                <View style={styles.liveBadge}>
                  <Text style={styles.liveText}>LIVE</Text>
                </View>
              )}
              
              <View style={styles.classContent}>
                <Text style={styles.classTitle}>{classItem.title}</Text>
                <Text style={styles.instructor}>{classItem.instructor}</Text>
                
                <View style={styles.classDetails}>
                  <View style={styles.detailItem}>
                    <Clock color="#6B7280" size={16} />
                    <Text style={styles.detailText}>{classItem.time}</Text>
                  </View>
                  
                  <View style={styles.detailItem}>
                    <Users color="#6B7280" size={16} />
                    <Text style={styles.detailText}>{classItem.participants} students</Text>
                  </View>
                </View>
                
                <TouchableOpacity 
                  style={[
                    styles.joinButton, 
                    classItem.isLive ? styles.liveButton : styles.scheduledButton
                  ]}
                >
                  <Video color="#FFFFFF" size={16} />
                  <Text style={styles.joinButtonText}>
                    {classItem.isLive ? 'Join Now' : 'Set Reminder'}
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.upcomingSection}>
          <Text style={styles.sectionTitle}>This Week</Text>
          
          <View style={styles.weeklySchedule}>
            <View style={styles.dayCard}>
              <Text style={styles.dayTitle}>Monday</Text>
              <Text style={styles.dayClasses}>3 Classes</Text>
            </View>
            
            <View style={styles.dayCard}>
              <Text style={styles.dayTitle}>Tuesday</Text>
              <Text style={styles.dayClasses}>2 Classes</Text>
            </View>
            
            <View style={styles.dayCard}>
              <Text style={styles.dayTitle}>Wednesday</Text>
              <Text style={styles.dayClasses}>4 Classes</Text>
            </View>
            
            <View style={styles.dayCard}>
              <Text style={styles.dayTitle}>Thursday</Text>
              <Text style={styles.dayClasses}>2 Classes</Text>
            </View>
            
            <View style={styles.dayCard}>
              <Text style={styles.dayTitle}>Friday</Text>
              <Text style={styles.dayClasses}>3 Classes</Text>
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
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 28,
    fontFamily: 'Inter-Bold',
    color: '#111827',
  },
  headerSubtitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    marginTop: 4,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  todaySection: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: '#111827',
    marginBottom: 16,
  },
  classCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
  },
  classImage: {
    width: '100%',
    height: 120,
  },
  liveBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#EF4444',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  liveText: {
    fontSize: 10,
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
  },
  classContent: {
    padding: 16,
  },
  classTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#111827',
    marginBottom: 4,
  },
  instructor: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    marginBottom: 12,
  },
  classDetails: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  detailText: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
  },
  joinButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    gap: 6,
  },
  liveButton: {
    backgroundColor: '#EF4444',
  },
  scheduledButton: {
    backgroundColor: '#3B82F6',
  },
  joinButtonText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#FFFFFF',
  },
  upcomingSection: {
    marginTop: 32,
    marginBottom: 32,
  },
  weeklySchedule: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  dayCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    width: '30%',
    alignItems: 'center',
  },
  dayTitle: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#111827',
    marginBottom: 4,
  },
  dayClasses: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
  },
});