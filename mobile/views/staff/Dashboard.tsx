import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function Dashboard(props: any) {
  return (
    <View>
      <Text style={styles.title}>Dashboard</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate('NewPost')}
      >
        <Text>Make Post</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.container}
        onPress={() => props.navigation.navigate('Activity')}
      >
        <Text>Activities</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.container}
        onPress={() => props.navigation.navigate('Client')}
      >
        <Text>Clients</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.container}
        onPress={() => props.navigation.navigate('Staff')}
      >
        <Text>Staff</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  container: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    padding: 50,
    margin: 50
  },
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    padding: 50,
    margin: 50,
    width: '30%'
  }
})
