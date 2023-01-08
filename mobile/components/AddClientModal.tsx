import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native'

export default function AddClientModal(props: any) {
  return (
    <View style={styles.centeredView}>
      <View style={styles.card}>
        <Text>Clients</Text>
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="#000"
        />

        {/* REPLACE WITH CHECKBOX OF CLIENTS  */}
        <Text>Select All</Text>
        <Text>John Doe</Text>
        <Text>Jack Murray</Text>
        <Text>Bill Singer</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => props.setModalVisible(!props.modalVisible)}
        >
          <Text>Close</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.setModalVisible(!props.modalVisible)}
        >
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
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
  button: {
    backgroundColor: '#FFF',
    alignSelf: 'center',
    borderWidth: 1,
    padding: 10,
    marginTop: 5
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
  card: {
    backgroundColor: '#FFF',
    padding: 25
  }
})
