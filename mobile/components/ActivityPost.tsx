import { StyleSheet, Text, View } from 'react-native'
import PostInterface from '../types/Post.interface'

interface IProps {
  post: PostInterface
}

export default function ActivityPost({ post }: IProps) {
  return (
    <View style={styles.card}>
      {/* ADD MEDIAS */}
      <Text style={styles.cardTitle}>{post.activity_name}</Text>
      <Text>{post.description}</Text>
      <Text>{post.timestamp}</Text>
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
  }
})
