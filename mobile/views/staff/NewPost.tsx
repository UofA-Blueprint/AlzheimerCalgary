import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

export default function NewPost() {
  return (
    <View>
      <Text style={styles.title}>New Post</Text>
      <TextInput style={styles.input} placeholder="Type" />
      <TextInput style={styles.input} placeholder="Activity Name" />
      <TextInput style={styles.input} placeholder="Type" />
      <Text style={styles.subtitle}>Participants</Text>
      <TouchableOpacity style={styles.button}>
        <Text>+ Add Client</Text>
      </TouchableOpacity>
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
