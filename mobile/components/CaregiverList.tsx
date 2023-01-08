import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

const mockActivities = [
  { name: 'John Doe' },
  { name: 'John Doe' },
  { name: 'John Doe' },
  { name: 'John Doe' }
]

export default function CaregiverList() {
  return (
    <View>
      <FlatList
        data={mockActivities}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>{item.name}</Text>
            <TouchableOpacity style={styles.button}>
              <Text>Share</Text>
            </TouchableOpacity>
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
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    margin: 5,
    width: 150,
    borderWidth: 1
  }
})
