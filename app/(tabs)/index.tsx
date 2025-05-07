import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Image } from 'react-native';
import { Calendar, Dumbbell, TrendingUp, Trophy } from 'lucide-react-native';
import WorkoutCard from '@/components/WorkoutCard';
import ProgressSummary from '@/components/ProgressSummary';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter';
import { SplashScreen } from 'expo-router';

// Prevent splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function HomeScreen() {
  const [greeting, setGreeting] = useState('Good morning');
  const [loaded, error] = useFonts({
    'Inter-Regular': Inter_400Regular,
    'Inter-Medium': Inter_500Medium,
    'Inter-Bold': Inter_700Bold,
  });

  // Set greeting based on time of day
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 18) setGreeting('Good afternoon');
    else setGreeting('Good evening');
  }, []);

  // Hide splash screen when fonts are loaded
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  // Return null to keep splash screen visible while fonts load
  if (!loaded && !error) {
    return null;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>{greeting}, Alex</Text>
        <Text style={styles.date}>
          {new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
          })}
        </Text>
      </View>

      <ProgressSummary />

      <View style={styles.quickActions}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actionButtons}>
          <Pressable style={styles.actionButton}>
            <View style={[styles.actionIcon, { backgroundColor: '#0d9488' }]}>
              <Dumbbell size={24} color="#ffffff" />
            </View>
            <Text style={styles.actionText}>New Workout</Text>
          </Pressable>

          <Pressable style={styles.actionButton}>
            <View style={[styles.actionIcon, { backgroundColor: '#1e40af' }]}>
              <TrendingUp size={24} color="#ffffff" />
            </View>
            <Text style={styles.actionText}>Log Progress</Text>
          </Pressable>

          <Pressable style={styles.actionButton}>
            <View style={[styles.actionIcon, { backgroundColor: '#f97316' }]}>
              <Trophy size={24} color="#ffffff" />
            </View>
            <Text style={styles.actionText}>Set Goal</Text>
          </Pressable>

          <Pressable style={styles.actionButton}>
            <View style={[styles.actionIcon, { backgroundColor: '#64748b' }]}>
              <Calendar size={24} color="#ffffff" />
            </View>
            <Text style={styles.actionText}>Schedule</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.workoutsSection}>
        <Text style={styles.sectionTitle}>Recommended Workouts</Text>
        <WorkoutCard
          title="Upper Body Strength"
          duration="45 min"
          difficulty="Intermediate"
          image="https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=800"
        />
        <WorkoutCard
          title="HIIT Cardio Blast"
          duration="30 min"
          difficulty="Advanced"
          image="https://images.pexels.com/photos/4498151/pexels-photo-4498151.jpeg?auto=compress&cs=tinysrgb&w=800"
        />
        <WorkoutCard
          title="Core Strengthening"
          duration="25 min"
          difficulty="Beginner"
          image="https://images.pexels.com/photos/6551133/pexels-photo-6551133.jpeg?auto=compress&cs=tinysrgb&w=800"
        />
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
    backgroundColor: '#0d9488',
    paddingBottom: 20,
  },
  greeting: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: '#ffffff',
    marginBottom: 4,
  },
  date: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#e2e8f0',
  },
  quickActions: {
    padding: 20,
  },
  sectionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: '#1e293b',
    marginBottom: 16,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  actionButton: {
    width: '48%',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  actionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  actionText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#334155',
  },
  workoutsSection: {
    padding: 20,
    paddingBottom: 30,
  },
});