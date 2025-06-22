import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Trophy, Clock, CircleCheck as CheckCircle, Target, Zap } from 'lucide-react-native';

export default function QuizzesScreen() {
  const dailyQuiz = {
    subject: 'Mathematics',
    questions: 10,
    timeLimit: '15 min',
    difficulty: 'Medium',
    points: 100,
  };

  const completedQuizzes = [
    {
      id: '1',
      subject: 'Physics',
      score: 92,
      totalQuestions: 15,
      completedAt: '2 hours ago',
      points: 138,
    },
    {
      id: '2',
      subject: 'Chemistry',
      score: 85,
      totalQuestions: 12,
      completedAt: 'Yesterday',
      points: 102,
    },
    {
      id: '3',
      subject: 'Biology',
      score: 96,
      totalQuestions: 20,
      completedAt: '2 days ago',
      points: 192,
    },
  ];

  const subjects = [
    { name: 'Mathematics', quizzes: 12, color: '#3B82F6' },
    { name: 'Physics', quizzes: 8, color: '#10B981' },
    { name: 'Chemistry', quizzes: 10, color: '#F59E0B' },
    { name: 'Biology', quizzes: 15, color: '#EF4444' },
    { name: 'English', quizzes: 6, color: '#8B5CF6' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Quizzes</Text>
        <Text style={styles.headerSubtitle}>Test your knowledge and track progress</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        {/* Daily Quiz Card */}
        <View style={styles.dailyQuizCard}>
          <View style={styles.dailyQuizHeader}>
            <View style={styles.dailyQuizIcon}>
              <Zap color="#F59E0B" size={24} />
            </View>
            <View>
              <Text style={styles.dailyQuizTitle}>Daily Challenge</Text>
              <Text style={styles.dailyQuizSubject}>{dailyQuiz.subject}</Text>
            </View>
          </View>

          <View style={styles.dailyQuizDetails}>
            <View style={styles.quizDetail}>
              <Target color="#6B7280" size={16} />
              <Text style={styles.quizDetailText}>{dailyQuiz.questions} Questions</Text>
            </View>
            
            <View style={styles.quizDetail}>
              <Clock color="#6B7280" size={16} />
              <Text style={styles.quizDetailText}>{dailyQuiz.timeLimit}</Text>
            </View>
            
            <View style={styles.quizDetail}>
              <Trophy color="#6B7280" size={16} />
              <Text style={styles.quizDetailText}>{dailyQuiz.points} Points</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.startQuizButton}>
            <Text style={styles.startQuizButtonText}>Start Daily Quiz</Text>
          </TouchableOpacity>
        </View>

        {/* Stats Overview */}
        <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>Your Stats</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <Trophy color="#F59E0B" size={24} />
              <Text style={styles.statNumber}>432</Text>
              <Text style={styles.statLabel}>Total Points</Text>
            </View>
            
            <View style={styles.statCard}>
              <CheckCircle color="#10B981" size={24} />
              <Text style={styles.statNumber}>15</Text>
              <Text style={styles.statLabel}>Completed</Text>
            </View>
            
            <View style={styles.statCard}>
              <Target color="#3B82F6" size={24} />
              <Text style={styles.statNumber}>89%</Text>
              <Text style={styles.statLabel}>Avg Score</Text>
            </View>
          </View>
        </View>

        {/* Subject Categories */}
        <View style={styles.subjectsSection}>
          <Text style={styles.sectionTitle}>Quiz by Subject</Text>
          
          {subjects.map((subject) => (
            <TouchableOpacity key={subject.name} style={styles.subjectCard}>
              <View style={styles.subjectHeader}>
                <View style={[styles.subjectColor, { backgroundColor: subject.color }]} />
                <View style={styles.subjectInfo}>
                  <Text style={styles.subjectName}>{subject.name}</Text>
                  <Text style={styles.subjectQuizzes}>{subject.quizzes} quizzes available</Text>
                </View>
              </View>
              <View style={styles.subjectArrow}>
                <Text style={styles.arrowText}>›</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Recent Results */}
        <View style={styles.resultsSection}>
          <Text style={styles.sectionTitle}>Recent Results</Text>
          
          {completedQuizzes.map((quiz) => (
            <View key={quiz.id} style={styles.resultCard}>
              <View style={styles.resultHeader}>
                <Text style={styles.resultSubject}>{quiz.subject}</Text>
                <Text style={styles.resultTime}>{quiz.completedAt}</Text>
              </View>
              
              <View style={styles.resultStats}>
                <View style={styles.scoreContainer}>
                  <Text style={styles.scoreNumber}>{quiz.score}%</Text>
                  <Text style={styles.scoreDetails}>
                    {Math.round((quiz.score / 100) * quiz.totalQuestions)}/{quiz.totalQuestions} correct
                  </Text>
                </View>
                
                <View style={styles.pointsContainer}>
                  <Trophy color="#F59E0B" size={16} />
                  <Text style={styles.pointsText}>+{quiz.points}</Text>
                </View>
              </View>
            </View>
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
  dailyQuizCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginTop: 20,
    marginBottom: 24,
  },
  dailyQuizHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  dailyQuizIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FEF3C7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  dailyQuizTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#111827',
  },
  dailyQuizSubject: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
  },
  dailyQuizDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  quizDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  quizDetailText: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
  },
  startQuizButton: {
    backgroundColor: '#3B82F6',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  startQuizButtonText: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#FFFFFF',
  },
  statsSection: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: '#111827',
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#111827',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    marginTop: 4,
  },
  subjectsSection: {
    marginBottom: 32,
  },
  subjectCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
  },
  subjectHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subjectColor: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 12,
  },
  subjectInfo: {
    flex: 1,
  },
  subjectName: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#111827',
  },
  subjectQuizzes: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    marginTop: 2,
  },
  subjectArrow: {
    padding: 4,
  },
  arrowText: {
    fontSize: 18,
    color: '#9CA3AF',
  },
  resultsSection: {
    marginBottom: 32,
  },
  resultCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
  },
  resultHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  resultSubject: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#111827',
  },
  resultTime: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
  },
  resultStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scoreContainer: {
    flex: 1,
  },
  scoreNumber: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#10B981',
  },
  scoreDetails: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    marginTop: 2,
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  pointsText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#F59E0B',
  },
});