import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TextInput
} from 'react-native'

import Page from '../../types/Page.enum'
import ClientCard from '../../components/ClientCard'

const mockClients = [
  { name: 'John Appledore', status: 'At home' },
  { name: 'Mark Bridge', status: 'Left home' },
  { name: 'John Bridge', status: 'Left home' },
  { name: 'Gates Bridge', status: 'Left home' },
  { name: 'Pear Bridge', status: 'Left home' },
  { name: 'Sam Bridge', status: 'Left home' },
  { name: 'Dork Bridge', status: 'Left home' }
]

export default function Client(prop: any) {
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => prop.setPage(Page.DASHBOARD)}
        >
          <Text>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Clients</Text>
      </View>
      <TextInput style={styles.input} />
      <FlatList
        data={mockClients}
        renderItem={({ item }) => <ClientCard client={item} />}
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
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 100
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
})
