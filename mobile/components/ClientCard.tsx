import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Client from '../types/Client.interface'

interface IProps {
  client: Client
}

export default function ClientCard({ client }: IProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{client.name}</Text>
      <Text>status: {client.status}</Text>
      <TouchableOpacity style={styles.button}>
        <Text>Check in</Text>
      </TouchableOpacity>
    </View>
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
