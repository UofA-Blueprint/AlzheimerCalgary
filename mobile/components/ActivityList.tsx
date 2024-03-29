import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

const mockActivities = [
  { timestamp: '2023-01-08T10:17:29+0000', name: 'Painting' },
  { timestamp: '2023-01-08T10:17:29+0000', name: 'Painting' },
  { timestamp: '2023-01-08T10:17:29+0000', name: 'Painting' },
  { timestamp: '2023-01-08T10:17:29+0000', name: 'Painting' }
]

export default function ActivityList(props: any) {
  return (
    <View>
      <FlatList
        data={mockActivities}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>{item.timestamp}</Text>
            <Text>{item.name}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                props.navigation.navigate('EditPost', { id: '0x3825979' })
              }
            >
              <Text>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text>Delete</Text>
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
    backgroundColor: '#FFF',
    alignSelf: 'center',
    borderWidth: 1,
    padding: 10,
    marginTop: 5
  }
})
