import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

import Page from '../../types/Page.enum'

export default function Activity(prop: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Activities</Text>
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
  }
})
