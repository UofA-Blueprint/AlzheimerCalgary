import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default function ClientProfile(props: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.route.params.client.name}</Text>
      <Text>Age 48</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          props.navigation.navigate('CaregiverList', {
            client: props.route.params.client
          })
        }
      >
        <Text>View Caregivers</Text>
      </TouchableOpacity>

      <Text style={styles.subtitle}>Notes</Text>
      <View style={styles.card}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt amet
          impedit placeat rem animi error. Perspiciatis facere fugit cupiditate
          maiores corporis, alias quisquam non doloribus? Fugiat beatae officia
          necessitatibus quo?
        </Text>
      </View>

      <Text style={styles.subtitle}>Status</Text>
      <Text>Current: {props.route.params.client.status}</Text>
      <TouchableOpacity style={styles.button}>
        <Text>Check in</Text>
      </TouchableOpacity>

      <Text style={styles.subtitle}>Activities</Text>
      {/* Component: ActivityList */}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'flex-start',
    alignSelf: 'center',
    backgroundColor: '#DDDDDD',
    width: '80%',
    padding: 10
  },
  container: {
    padding: 15
  },
  title: {
    fontSize: 40
  },
  subtitle: {
    fontSize: 30,
    marginTop: 20
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    margin: 5,
    width: 150,
    borderWidth: 1
  }
})
