import { View, FlatList, StyleSheet } from 'react-native'
import { useState } from 'react'

import PostInterface from '../../types/Post.interface'
import ActivityPost from '../../components/ActivityPost'

const mock_posts = [
  {
    post_type: 'ACTIVITY',
    activity_name: 'storytelling',
    description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    timestamp: '2023-01-08T04:09:04Z',
    medias: [
      'https://www.allrecipes.com/thmb/P59TgUCXtQbv69dHRlZduE38xs8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/453291-five-ingredient-ice-cream-Alberta-Rose-4x3-1-4c9ec10ac4ab4e828615e81aa608dd6b.jpg'
    ],
    participants: ['John Doe', 'Jack Doe', 'Jane Doe', 'Jerry Doe']
  },
  {
    post_type: 'ACTIVITY',
    activity_name: 'drawing',
    description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    timestamp: '2023-01-07T04:09:04Z',
    medias: [
      'https://www.allrecipes.com/thmb/P59TgUCXtQbv69dHRlZduE38xs8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/453291-five-ingredient-ice-cream-Alberta-Rose-4x3-1-4c9ec10ac4ab4e828615e81aa608dd6b.jpg'
    ],
    participants: ['John Doe', 'Jack Doe', 'Jane Doe', 'Jerry Doe']
  },
  {
    post_type: 'ACTIVITY',
    activity_name: 'exercise',
    description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    timestamp: '2023-01-07T08:09:04Z',
    medias: [
      'https://www.allrecipes.com/thmb/P59TgUCXtQbv69dHRlZduE38xs8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/453291-five-ingredient-ice-cream-Alberta-Rose-4x3-1-4c9ec10ac4ab4e828615e81aa608dd6b.jpg'
    ],
    participants: ['John Doe', 'Jack Doe', 'Jane Doe', 'Jerry Doe']
  }
]

export default function Home() {
  const [posts, setPosts] = useState<PostInterface[]>(mock_posts)

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => <ActivityPost post={item} />}
        keyExtractor={(item) => item.timestamp}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
