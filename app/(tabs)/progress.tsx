import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { ArrowUpRight, Calendar, ArrowDown, ArrowUp } from 'lucide-react-native';
import ProgressChart from '@/components/ProgressChart';

export default function ProgressScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Progress</Text>
        <Pressable style={styles.calendarButton}>
          <Calendar size={20} color="#0d9488" />
          <Text style={styles.calendarText}>Last 30 Days</Text>
        </Pressable>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <View style={styles.statHeader}>
            <Text style={styles.statTitle}>Workouts</Text>
            <View style={[styles.trendBadge, styles.trendUp]}>
              <ArrowUp size={12} color="#ffffff" />
              <Text style={styles.trendText}>15%</Text>
            </View>
          </View>
          <Text style={styles.statValue}>12</Text>
          <Text style={styles.statDescription}>4 more than last month</Text>
        </View>

        <View style={styles.statCard}>
          <View style={styles.statHeader}>
            <Text style={styles.statTitle}>Total Time</Text>
            <View style={[styles.trendBadge, styles.trendUp]}>
              <ArrowUp size={12} color="#ffffff" />
              <Text style={styles.trendText}>23%</Text>
            </View>
          </View>
          <Text style={styles.statValue}>8.5h</Text>
          <Text style={styles.statDescription}>1.6h more than last month</Text>
        </View>

        <View style={styles.statCard}>
          <View style={styles.statHeader}>
            <Text style={styles.statTitle}>Calories</Text>
            <View style={[styles.trendBadge, styles.trendDown]}>
              <ArrowDown size={12} color="#ffffff" />
              <Text style={styles.trendText}>8%</Text>
            </View>
          </View>
          <Text style={styles.statValue}>4,286</Text>
          <Text style={styles.statDescription}>Lower than your target</Text>
        </View>
      </View>

      <View style={styles.chartSection}>
        <View style={styles.chartHeader}>
          <Text style={styles.chartTitle}>Workout Frequency</Text>
          <Pressable style={styles.viewAllButton}>
            <Text style={styles.viewAllText}>Details</Text>
            <ArrowUpRight size={16} color="#0d9488" />
          </Pressable>
        </View>
        <ProgressChart />
      </View>

      <View style={styles.goalsSection}>
        <Text style={styles.sectionTitle}>Your Goals</Text>
        
        <View style={styles.goalCard}>
          <View style={styles.goalInfo}>
            <Text style={styles.goalTitle}>Weekly Workouts</Text>
            <Text style={styles.goalProgress}>3 of 4 completed</Text>
          </View>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '75%' }]} />
          </View>
        </View>
        
        <View style={styles.goalCard}>
          <View style={styles.goalInfo}>
            <Text style={styles.goalTitle}>Monthly Active Minutes</Text>
            <Text style={styles.goalProgress}>310 of 500 minutes</Text>
          </View>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '62%' }]} />
          </View>
        </View>
        
        <View style={styles.goalCard}>
          <View style={styles.goalInfo}>
            <Text style={styles.goalTitle}>Strength Improvement</Text>
            <Text style={styles.goalProgress}>15% increase</Text>
          </View>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '45%' }]} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
    paddingBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0f172a',
  },
  calendarButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f5f9',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  calendarText: {
    color: '#0d9488',
    fontWeight: '500',
    marginLeft: 6,
    fontSize: 14,
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 20,
  },
  statCard: {
    width: '30%',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  statHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  statTitle: {
    fontSize: 12,
    fontWeight: '500',
    color: '#64748b',
  },
  trendBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  trendUp: {
    backgroundColor: '#10b981',
  },
  trendDown: {
    backgroundColor: '#ef4444',
  },
  trendText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: '500',
    marginLeft: 2,
  },
  statValue: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 4,
  },
  statDescription: {
    fontSize: 10,
    color: '#94a3b8',
  },
  chartSection: {
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 20,
  },
  chartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAllText: {
    color: '#0d9488',
    fontWeight: '500',
    marginRight: 4,
    fontSize: 14,
  },
  goalsSection: {
    padding: 20,
    paddingBottom: 100,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 16,
  },
  goalCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  goalInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  goalTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
  },
  goalProgress: {
    fontSize: 14,
    color: '#64748b',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#e2e8f0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#0d9488',
    borderRadius: 4,
  },
});