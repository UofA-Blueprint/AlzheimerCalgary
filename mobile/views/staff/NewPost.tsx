import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal
} from 'react-native'
import { useState } from 'react'

import AddClientModal from '../../components/AddClientModal'

export default function NewPost(props: any) {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View>
      <Text style={styles.title}>New Post</Text>
      {!props.route.params && (
        <TextInput style={styles.input} placeholder="Type" />
      )}
      {props.route.params ? (
        <Text style={styles.subtitle}>{props.route.params.activity.name}</Text>
      ) : (
        <TextInput style={styles.input} placeholder="Activity Name" />
      )}
      <TextInput style={styles.input} placeholder="Description" />
      <Text style={styles.subtitle}>Participants</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <Text>+ Add Client</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}
      >
        <AddClientModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </Modal>
      <Text style={styles.subtitle}>Add Media</Text>
      <TouchableOpacity style={styles.button}>
        <Text>+ Add file</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.submitButton}>
        <Text>Post Activity</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFF',
    alignSelf: 'center',
    borderWidth: 1,
    padding: 10,
    marginTop: 5
  },
  submitButton: {
    backgroundColor: '#FFF',
    alignSelf: 'flex-end',
    borderWidth: 1,
    padding: 10,
    margin: 15
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 30,
    margin: 15
  }
})
