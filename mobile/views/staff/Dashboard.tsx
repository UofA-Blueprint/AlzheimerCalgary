import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import Page from '../../types/Page.enum'

export default function Dashboard(prop: any) {
  return (
    <View>
      <Text style={styles.title}>Dashboard</Text>
      <TouchableOpacity
        style={styles.container}
        onPress={() => prop.setPage(Page.ACTIVITY)}
      >
        <Text>Activities</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.container}
        onPress={() => prop.setPage(Page.CLIENT)}
      >
        <Text>Clients</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.container}
        onPress={() => prop.setPage(Page.STAFF)}
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
  }
})
