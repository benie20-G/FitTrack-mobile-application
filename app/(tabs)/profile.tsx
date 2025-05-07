import { View, Text, StyleSheet, Image, ScrollView, Pressable } from 'react-native';
import { Award, ChartBar as BarChart3, Bell, ChevronRight, ClipboardList, Cog, Star, Zap } from 'lucide-react-native';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=800' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Alex Johnson</Text>
        <Text style={styles.bio}>Fitness enthusiast | Runner | Weightlifter</Text>
        
        <View style={styles.statsRow}>
          <View style={styles.stat}>
            <Text style={styles.statValue}>48</Text>
            <Text style={styles.statLabel}>Workouts</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.stat}>
            <Text style={styles.statValue}>5</Text>
            <Text style={styles.statLabel}>Achievements</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.stat}>
            <Text style={styles.statValue}>83%</Text>
            <Text style={styles.statLabel}>Completion</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.achievements}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Achievements</Text>
          <Pressable>
            <Text style={styles.seeAll}>See All</Text>
          </Pressable>
        </View>
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.achievementsContainer}>
          <View style={styles.achievementCard}>
            <View style={[styles.achievementIcon, { backgroundColor: '#0d9488' }]}>
              <Zap size={24} color="#ffffff" />
            </View>
            <Text style={styles.achievementTitle}>Consistency King</Text>
            <Text style={styles.achievementDescription}>Completed 7 workouts in a row</Text>
          </View>
          
          <View style={styles.achievementCard}>
            <View style={[styles.achievementIcon, { backgroundColor: '#f97316' }]}>
              <Award size={24} color="#ffffff" />
            </View>
            <Text style={styles.achievementTitle}>Personal Best</Text>
            <Text style={styles.achievementDescription}>Beat your previous record</Text>
          </View>
          
          <View style={styles.achievementCard}>
            <View style={[styles.achievementIcon, { backgroundColor: '#1e40af' }]}>
              <Star size={24} color="#ffffff" />
            </View>
            <Text style={styles.achievementTitle}>Goal Crusher</Text>
            <Text style={styles.achievementDescription}>Reached monthly workout goal</Text>
          </View>
        </ScrollView>
      </View>
      
      <View style={styles.menuSection}>
        <Text style={styles.menuTitle}>Account</Text>
        
        <Pressable style={styles.menuItem}>
          <View style={styles.menuIcon}>
            <ClipboardList size={20} color="#0d9488" />
          </View>
          <Text style={styles.menuText}>My Plan</Text>
          <ChevronRight size={20} color="#94a3b8" />
        </Pressable>
        
        <Pressable style={styles.menuItem}>
          <View style={styles.menuIcon}>
            <BarChart3 size={20} color="#0d9488" />
          </View>
          <Text style={styles.menuText}>Statistics</Text>
          <ChevronRight size={20} color="#94a3b8" />
        </Pressable>
        
        <Pressable style={styles.menuItem}>
          <View style={styles.menuIcon}>
            <Bell size={20} color="#0d9488" />
          </View>
          <Text style={styles.menuText}>Notifications</Text>
          <ChevronRight size={20} color="#94a3b8" />
        </Pressable>
        
        <Pressable style={styles.menuItem}>
          <View style={styles.menuIcon}>
            <Cog size={20} color="#0d9488" />
          </View>
          <Text style={styles.menuText}>Settings</Text>
          <ChevronRight size={20} color="#94a3b8" />
        </Pressable>
      </View>
      
      <View style={styles.footerButtons}>
        <Pressable style={styles.upgradeButton}>
          <Text style={styles.upgradeText}>Upgrade to Premium</Text>
        </Pressable>
        
        <Pressable style={styles.logoutButton}>
          <Text style={styles.logoutText}>Log Out</Text>
        </Pressable>
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
    backgroundColor: '#ffffff',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 4,
  },
  bio: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 20,
  },
  statsRow: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 20,
  },
  stat: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#64748b',
  },
  statDivider: {
    width: 1,
    height: '100%',
    backgroundColor: '#e2e8f0',
  },
  achievements: {
    padding: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0f172a',
  },
  seeAll: {
    fontSize: 14,
    color: '#0d9488',
    fontWeight: '500',
  },
  achievementsContainer: {
    paddingRight: 20,
  },
  achievementCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginRight: 12,
    width: 150,
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    alignItems: 'center',
  },
  achievementIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  achievementTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0f172a',
    marginBottom: 4,
    textAlign: 'center',
  },
  achievementDescription: {
    fontSize: 12,
    color: '#64748b',
    textAlign: 'center',
  },
  menuSection: {
    padding: 20,
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    marginVertical: 16,
    borderRadius: 12,
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#f1f5f9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: '#334155',
    fontWeight: '500',
  },
  footerButtons: {
    padding: 20,
    paddingBottom: 40,
  },
  upgradeButton: {
    backgroundColor: '#0d9488',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  upgradeText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  logoutButton: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  logoutText: {
    color: '#64748b',
    fontSize: 16,
    fontWeight: '500',
  },
});