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
import AddMediaPopUp from '../../components/AddMediaPopUp'

export default function NewPost(props: any) {
  const [modalVisible, setModalVisible] = useState(false)
  const [addMediaPopUpVisible, setAddMediaPopUpVisible] = useState(false)

  return (
    <>
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
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={styles.button}>
          <Text>+ Add file</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addMediaButton} onPress={() => setAddMediaPopUpVisible(true)}>
          <Text style={{color: 'white'}}>+ Add Media</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton}>
          <Text>Post Activity</Text>
        </TouchableOpacity>
      </View>
    </View>
    {
      addMediaPopUpVisible ?
        <AddMediaPopUp setVisible={setAddMediaPopUpVisible}/>
      : null
    }
    </>
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
  addMediaButton: {
    marginTop: 30,
    backgroundColor: 'black',
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButton: {
    backgroundColor: '#FFF',
    marginTop: 30,
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
