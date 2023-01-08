import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

import Page from '../../types/Page.enum'

export default function Client(prop: any) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => prop.setPage(Page.DASHBOARD)}
      >
        <Text>Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Clients</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 20
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 100
  }
})
