import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { NavigationProp } from '@react-navigation/native'

import Client from '../types/Client.interface'

interface IProps {
  client: Client
  navigation: NavigationProp<any, any>
}

export default function ClientCard({ client, navigation }: IProps) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('ClientProfile', { client })}
    >
      <Text style={styles.cardTitle}>{client.name}</Text>
      <Text>status: {client.status}</Text>
      <TouchableOpacity style={styles.button}>
        <Text>Check in</Text>
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
