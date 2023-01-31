import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Dashboard from './views/staff/Dashboard'
import Activity from './views/staff/Activity'
import Client from './views/staff/Client'
import Staff from './views/staff/Staff'
import ClientProfile from './views/staff/ClientProfile'
import Caregiver from './views/staff/Caregiver'
import NewPost from './views/staff/NewPost'
import ActivityDetail from './views/staff/ActivityDetail'
import EditPost from './views/staff/EditPost'
import AddStaff from './views/staff/AddStaff'
import StaffBio from './views/staff/StaffBio'

const Stack = createNativeStackNavigator()

export default function StaffApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }}/>
        <Stack.Screen name="Activity" component={Activity} />
        <Stack.Screen name="Client" component={Client} options={{ headerShown: false }}/>
        <Stack.Screen name="Staff" component={Staff} options={{ headerShown: false }}/>
        <Stack.Screen name="ClientProfile" component={ClientProfile} />
        <Stack.Screen name="Caregiver" component={Caregiver} />
        <Stack.Screen name="NewPost" component={NewPost} />
        <Stack.Screen name="ActivityDetail" component={ActivityDetail} />
        <Stack.Screen name="EditPost" component={EditPost} />
        <Stack.Screen name="AddStaff" component={AddStaff} options={{ title: 'Add Staff' }}/>
        <Stack.Screen name="StaffBio" component={StaffBio} options={{ title: 'Staff Bio' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
