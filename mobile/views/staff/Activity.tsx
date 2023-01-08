import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList
} from 'react-native'

import ActivityManagerCard from '../../components/ActivityManagerCard'

const mockActivity = [
  { name: 'Painting', type: 'Creative' },
  { name: 'Poetry', type: 'Creative' },
  { name: 'Singing', type: 'Creative' },
  { name: 'Chess', type: 'Puzzle' },
  { name: 'Swimming', type: 'Sport' }
]

export default function Activity(prop: any) {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Activity Manager</Text>
        <TouchableOpacity style={styles.button}>
          <Text>New Activity</Text>
        </TouchableOpacity>
      </View>
      <TextInput style={styles.input} />
      <FlatList
        data={mockActivity}
        renderItem={({ item }) => (
          <ActivityManagerCard activity={item} navigation={prop.navigation} />
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 20
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#FFF',
    alignSelf: 'center',
    borderWidth: 1,
    padding: 10,
    margin: 10
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
})
