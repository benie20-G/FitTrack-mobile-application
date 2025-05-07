import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Clock, ChartBar as BarChart } from 'lucide-react-native';

interface WorkoutListItemProps {
  title: string;
  category: string;
  duration: string;
  difficulty: string;
  image: string;
}

export default function WorkoutListItem({ 
  title, 
  category, 
  duration, 
  difficulty, 
  image 
}: WorkoutListItemProps) {
  return (
    <Pressable style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.detailsContainer}>
          <View style={styles.detail}>
            <Clock size={14} color="#64748b" />
            <Text style={styles.detailText}>{duration}</Text>
          </View>
          <View style={styles.detail}>
            <BarChart size={14} color="#64748b" />
            <Text style={styles.detailText}>{difficulty}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 16,
    flexDirection: 'row',
    overflow: 'hidden',
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
  },
  content: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },
  category: {
    fontSize: 12,
    color: '#0d9488',
    fontWeight: '500',
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 16,
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
    fontSize: 12,
    color: '#64748b',
    marginLeft: 4,
  },
});