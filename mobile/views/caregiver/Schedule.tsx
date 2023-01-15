import { View, Image } from 'react-native'

export default function Schedule() {
  return (
    <View>
      <Image
        source={{
          uri: 'https://www.wiki-calendar.com/wp-content/uploads/2022/09/December-2022-Calendar-Printable-with-Holidays.jpg'
        }}
        style={{ height: '100%', width: '100%' }}
      />
    </View>
  )
}
