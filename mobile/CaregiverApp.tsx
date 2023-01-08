import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import CaregiverAppNavBarOptions from './utility/CaregiverNavBarOptions'
import HomeView from './views/caregiver/Home'
import MoodView from './views/caregiver/Mood'
import ProfileView from './views/caregiver/Profile'
import ScheduleView from './views/caregiver/Schedule'

const Tab = createBottomTabNavigator()

export default function CaregiverApp() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={CaregiverAppNavBarOptions}>
        <Tab.Screen name="Home" component={HomeView} />
        <Tab.Screen name="Mood" component={MoodView} />
        <Tab.Screen name="Schedule" component={ScheduleView} />
        <Tab.Screen name="Profile" component={ProfileView} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
