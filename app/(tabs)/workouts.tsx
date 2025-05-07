import { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable, TextInput } from 'react-native';
import { Filter, Plus, Search } from 'lucide-react-native';
import WorkoutListItem from '@/components/WorkoutListItem';
import { workouts } from '@/data/workouts';

export default function WorkoutsScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter workouts based on search query
  const filteredWorkouts = workouts.filter(workout => 
    workout.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    workout.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Workouts</Text>
        
        <View style={styles.searchContainer}>
          <Search size={20} color="#64748b" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search workouts..."
            placeholderTextColor="#94a3b8"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        
        <View style={styles.actionsRow}>
          <Pressable style={styles.filterButton}>
            <Filter size={20} color="#0d9488" />
            <Text style={styles.filterText}>Filter</Text>
          </Pressable>
          
          <Pressable style={styles.createButton}>
            <Plus size={20} color="#ffffff" />
            <Text style={styles.createText}>Create Workout</Text>
          </Pressable>
        </View>
      </View>
      
      <View style={styles.categoriesContainer}>
        <Pressable style={[styles.categoryButton, styles.categoryActive]}>
          <Text style={[styles.categoryText, styles.categoryTextActive]}>All</Text>
        </Pressable>
        <Pressable style={styles.categoryButton}>
          <Text style={styles.categoryText}>Strength</Text>
        </Pressable>
        <Pressable style={styles.categoryButton}>
          <Text style={styles.categoryText}>Cardio</Text>
        </Pressable>
        <Pressable style={styles.categoryButton}>
          <Text style={styles.categoryText}>Flexibility</Text>
        </Pressable>
      </View>
      
      <FlatList
        data={filteredWorkouts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <WorkoutListItem
            title={item.title}
            category={item.category}
            duration={item.duration}
            difficulty={item.difficulty}
            image={item.image}
          />
        )}
        contentContainerStyle={styles.workoutList}
        showsVerticalScrollIndicator={false}
      />
    </View>
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
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f5f9',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 44,
    color: '#1e293b',
    fontSize: 16,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#0d9488',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  filterText: {
    color: '#0d9488',
    fontWeight: '500',
    marginLeft: 6,
  },
  createButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0d9488',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  createText: {
    color: '#ffffff',
    fontWeight: '500',
    marginLeft: 6,
  },
  categoriesContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
  },
  categoryButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 8,
    backgroundColor: '#f1f5f9',
  },
  categoryActive: {
    backgroundColor: '#0d9488',
  },
  categoryText: {
    color: '#64748b',
    fontWeight: '500',
    fontSize: 14,
  },
  categoryTextActive: {
    color: '#ffffff',
  },
  workoutList: {
    padding: 20,
    paddingBottom: 100,
  },
});