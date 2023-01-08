import { Text, View, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import { useState } from 'react'
import CaregiverForm from '../../components/CaregiverForm'

export default function CaregiverList(props: any) {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View>
      <Text style={styles.title}>
        {props.route.params.client.name}'s Caregivers
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <Text>Add Caregivers</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}
      >
        <CaregiverForm
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    margin: 5,
    width: 150,
    borderWidth: 1
  },
  title: {
    fontSize: 40
  }
})
