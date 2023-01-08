import { Text, View, FlatList, StyleSheet } from 'react-native'

const mockActivities = [
  { timestamp: '2023-01-08T10:17:29+0000', name: 'Painting' },
  { timestamp: '2023-01-08T10:17:29+0000', name: 'Painting' },
  { timestamp: '2023-01-08T10:17:29+0000', name: 'Painting' },
  { timestamp: '2023-01-08T10:17:29+0000', name: 'Painting' }
]

export default function ActivityList() {
  return (
    <View>
      <FlatList
        data={mockActivities}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>{item.timestamp}</Text>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'flex-start',
    alignSelf: 'center',
    backgroundColor: '#DDDDDD',
    width: '80%',
    padding: 10,
    borderRadius: 1,
    margin: 5
  }
})
