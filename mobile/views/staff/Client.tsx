import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Modal
} from 'react-native'
import { useState } from 'react'

import ClientCard from '../../components/ClientCard'
import ClientForm from '../../components/ClientForm'

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
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Clients</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(true)}
        >
          <Text>Add client</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}
      >
        <ClientForm
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </Modal>
      <TextInput style={styles.input} />
      <FlatList
        data={mockClients}
        renderItem={({ item }) => (
          <ClientCard client={item} navigation={prop.navigation} />
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  header: {
    flexDirection: 'row',
    margin: 20
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
  button: {
    backgroundColor: '#FFF',
    alignSelf: 'center',
    marginLeft: 25,
    borderWidth: 1,
    padding: 10,
    marginTop: 5
  }
})
