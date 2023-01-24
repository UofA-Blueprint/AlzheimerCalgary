import { StyleSheet, Text, View, ScrollView, TouchableOpacity, StatusBar } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"

export default function Dashboard(props: any) {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" translucent={true} />
      <ScrollView>
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
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  container: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    padding: 50,
    margin: 30
  },
  button: {
    width: 100,
    height: 40,
    alignSelf: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
    width: '30%'
  }
})
