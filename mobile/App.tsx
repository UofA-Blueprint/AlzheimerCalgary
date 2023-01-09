import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import Login from './views/Login'
import CaregiverApp from './CaregiverApp'
import StaffApp from './StaffApp'
import User from './types/User.interface'
import Role from './types/Role.enum'
import UserContext from './context/UserContext'

export default function App() {
  const [user, setUser] = useState<User | null>(null)
  const value = { user, setUser }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <UserContext.Provider value={value}>
        {user == null ? (
          <Login />
        ) : user.role == Role.STAFF ? (
          <StaffApp />
        ) : (
          <CaregiverApp />
        )}
      </UserContext.Provider>
    </SafeAreaView>
  )
}
