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
import UpdateStaff from './views/staff/UpdateStaff'
import ClientBio from './views/staff/ClientBio'
import AddClient from './views/staff/AddClient'

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
        <Stack.Screen name="AddStaff" component={AddStaff} options={{ headerShown: false }}/>
        <Stack.Screen name="StaffBio" component={StaffBio} options={{ headerShown: false }}/>
        <Stack.Screen name="UpdateStaff" component={UpdateStaff} />
        <Stack.Screen name="ClientBio" component={ClientBio} options={{ headerShown: false }}/>
        <Stack.Screen name="AddClient" component={AddClient} options={{ title: 'Add Client' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
