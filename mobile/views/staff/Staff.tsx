import { Text, View, StyleSheet } from 'react-native'

export default function Staff(prop: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Staffs</Text>
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
