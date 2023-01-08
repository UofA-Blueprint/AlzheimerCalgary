import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Dashboard from './views/staff/Dashboard'
import Activity from './views/staff/Activity'
import Client from './views/staff/Client'
import Staff from './views/staff/Staff'
import ClientProfile from './views/staff/ClientProfile'
import CaregiverList from './views/staff/CaregiverList'

const Stack = createNativeStackNavigator()

export default function StaffApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Activity" component={Activity} />
        <Stack.Screen name="Client" component={Client} />
        <Stack.Screen name="Staff" component={Staff} />
        <Stack.Screen name="ClientProfile" component={ClientProfile} />
        <Stack.Screen name="CaregiverList" component={CaregiverList} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
