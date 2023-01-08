import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import ActivityList from '../../components/ActivityList'

export default function ActivityDetail(props: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.route.params.activity.name}</Text>
      <Text>{props.route.params.activity.type}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate('NewPost')}
      >
        <Text>Make Post</Text>
      </TouchableOpacity>

      <Text style={styles.subtitle}>Recent Posts</Text>
      <ActivityList />
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
