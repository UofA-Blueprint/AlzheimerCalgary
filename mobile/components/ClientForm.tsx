import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native'

export default function ClientForm(props: any) {
  return (
    <View style={styles.centeredView}>
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.input}
          placeholder="Birthday"
          placeholderTextColor="#000"
        />
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
