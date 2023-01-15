import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { NavigationProp } from '@react-navigation/native'

import Activity from '../types/Activty.interface'

interface IProps {
  activity: Activity
  navigation: NavigationProp<any, any>
}

export default function ActivityManagerCard({ activity, navigation }: IProps) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('ActivityDetail', { activity })}
    >
      <Text style={styles.cardTitle}>{activity.name}</Text>
      <Text>{activity.type}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('NewPost', { activity })}
      >
        <Text>Make post</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'flex-start',
    alignSelf: 'center',
    backgroundColor: '#DDDDDD',
    width: '80%',
    margin: 10,
    padding: 10
  },
  cardTitle: {
    fontSize: 20
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    width: 100
  }
})
