import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Clock, ChartBar as BarChart } from 'lucide-react-native';

interface WorkoutCardProps {
  title: string;
  duration: string;
  difficulty: string;
  image: string;
}

export default function WorkoutCard({ title, duration, difficulty, image }: WorkoutCardProps) {
  return (
    <Pressable style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.detailsContainer}>
          <View style={styles.detail}>
            <Clock size={16} color="#64748b" />
            <Text style={styles.detailText}>{duration}</Text>
          </View>
          <View style={styles.detail}>
            <BarChart size={16} color="#64748b" />
            <Text style={styles.detailText}>{difficulty}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 160,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 8,
  },
  detailsContainer: {
    flexDirection: 'row',
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  detailText: {
    fontSize: 14,
    color: '#64748b',
    marginLeft: 4,
  },
});