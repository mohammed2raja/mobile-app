import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, Play, Clock, Eye } from 'lucide-react-native';

export default function VideosScreen() {
  const categories = ['All', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'English'];
  
  const videos = [
    {
      id: '1',
      title: 'Introduction to Calculus - Derivatives',
      category: 'Mathematics',
      duration: '45:30',
      views: '2.3k',
      thumbnail: 'https://images.pexels.com/photos/3683053/pexels-photo-3683053.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2',
      instructor: 'Dr. Sarah Johnson'
    },
    {
      id: '2',
      title: 'Quantum Physics Fundamentals',
      category: 'Physics',
      duration: '38:45',
      views: '1.8k',
      thumbnail: 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2',
      instructor: 'Prof. Michael Chen'
    },
    {
      id: '3',
      title: 'Organic Chemistry Basics',
      category: 'Chemistry',
      duration: '52:15',
      views: '3.1k',
      thumbnail: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2',
      instructor: 'Dr. Lisa Wang'
    },
    {
      id: '4',
      title: 'Cell Biology and Genetics',
      category: 'Biology',
      duration: '41:20',
      views: '2.7k',
      thumbnail: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2',
      instructor: 'Dr. James Miller'
    },
    {
      id: '5',
      title: 'Shakespeare Analysis - Hamlet',
      category: 'English',
      duration: '35:12',
      views: '1.5k',
      thumbnail: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2',
      instructor: 'Ms. Emily Roberts'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Video Library</Text>
        <Text style={styles.headerSubtitle}>Learn at your own pace</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Search color="#6B7280" size={20} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search videos..."
            placeholderTextColor="#9CA3AF"
          />
        </View>

        {/* Categories */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesContainer}
        >
          {categories.map((category, index) => (
            <TouchableOpacity 
              key={category}
              style={[
                styles.categoryChip, 
                index === 0 && styles.activeCategoryChip
              ]}
            >
              <Text style={[
                styles.categoryText,
                index === 0 && styles.activeCategoryText
              ]}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Featured Video */}
        <View style={styles.featuredSection}>
          <Text style={styles.sectionTitle}>Featured Today</Text>
          <TouchableOpacity style={styles.featuredCard}>
            <Image 
              source={{ uri: videos[0].thumbnail }}
              style={styles.featuredImage}
            />
            <View style={styles.playOverlay}>
              <View style={styles.playButton}>
                <Play color="#FFFFFF" size={24} fill="#FFFFFF" />
              </View>
            </View>
            <View style={styles.featuredContent}>
              <Text style={styles.featuredTitle}>{videos[0].title}</Text>
              <Text style={styles.featuredInstructor}>{videos[0].instructor}</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* All Videos */}
        <View style={styles.videosSection}>
          <Text style={styles.sectionTitle}>All Videos</Text>
          
          {videos.map((video) => (
            <TouchableOpacity key={video.id} style={styles.videoCard}>
              <Image 
                source={{ uri: video.thumbnail }}
                style={styles.videoThumbnail}
              />
              <View style={styles.videoPlayOverlay}>
                <Play color="#FFFFFF" size={16} fill="#FFFFFF" />
              </View>
              
              <View style={styles.videoContent}>
                <Text style={styles.videoTitle}>{video.title}</Text>
                <Text style={styles.videoInstructor}>{video.instructor}</Text>
                
                <View style={styles.videoMeta}>
                  <View style={styles.metaItem}>
                    <Clock color="#6B7280" size={14} />
                    <Text style={styles.metaText}>{video.duration}</Text>
                  </View>
                  
                  <View style={styles.metaItem}>
                    <Eye color="#6B7280" size={14} />
                    <Text style={styles.metaText}>{video.views} views</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#111827',
  },
  categoriesContainer: {
    marginTop: 20,
    marginBottom: 24,
  },
  categoryChip: {
    backgroundColor: '#E5E7EB',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 12,
  },
  activeCategoryChip: {
    backgroundColor: '#3B82F6',
  },
  categoryText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#6B7280',
  },
  activeCategoryText: {
    color: '#FFFFFF',
  },
  featuredSection: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: '#111827',
    marginBottom: 16,
  },
  featuredCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
  },
  featuredImage: {
    width: '100%',
    height: 200,
  },
  playOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  featuredContent: {
    padding: 16,
  },
  featuredTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#111827',
    marginBottom: 4,
  },
  featuredInstructor: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
  },
  videosSection: {
    marginBottom: 32,
  },
  videoCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
  },
  videoThumbnail: {
    width: 120,
    height: 90,
  },
  videoPlayOverlay: {
    position: 'absolute',
    top: 37,
    left: 52,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoContent: {
    flex: 1,
    padding: 12,
  },
  videoTitle: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#111827',
    marginBottom: 4,
  },
  videoInstructor: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    marginBottom: 8,
  },
  videoMeta: {
    flexDirection: 'row',
    gap: 12,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: 11,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
  },
});