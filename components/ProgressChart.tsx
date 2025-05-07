import { View, Text, StyleSheet } from 'react-native';

export default function ProgressChart() {
  // Mock data for the chart
  const data = [
    { day: 'Mon', value: 2 },
    { day: 'Tue', value: 1 },
    { day: 'Wed', value: 3 },
    { day: 'Thu', value: 0 },
    { day: 'Fri', value: 2 },
    { day: 'Sat', value: 4 },
    { day: 'Sun', value: 1 },
  ];

  // Max value for scaling
  const maxValue = Math.max(...data.map(item => item.value));
  
  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        {data.map((item, index) => (
          <View key={index} style={styles.barContainer}>
            <View style={styles.barLabels}>
              <Text style={styles.barValue}>{item.value}</Text>
            </View>
            <View style={styles.barWrapper}>
              <View 
                style={[
                  styles.bar, 
                  { 
                    height: `${(item.value / maxValue) * 100}%`,
                    backgroundColor: item.value === 0 ? '#e2e8f0' : '#0d9488'
                  }
                ]} 
              />
            </View>
            <Text style={styles.dayLabel}>{item.day}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
  },
  chartContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  barContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  barLabels: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 4,
  },
  barValue: {
    fontSize: 10,
    color: '#64748b',
    fontWeight: '500',
  },
  barWrapper: {
    width: '100%',
    height: '70%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bar: {
    width: 8,
    borderRadius: 4,
    marginBottom: 8,
  },
  dayLabel: {
    fontSize: 12,
    color: '#64748b',
  },
});