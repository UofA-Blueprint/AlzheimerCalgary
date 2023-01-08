import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import Login from './views/Login'
import ClientApp from './ClientApp'
import StaffApp from './StaffApp'
import User from './interfaces/User'
import UserContext from './context/UserContext'

export default function App() {
  const [user, setUser] = useState<User | null>(null)
  const value = { user, setUser }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <UserContext.Provider value={value}>
        {user == null ? (
          <Login />
        ) : user.role == 'client' ? (
          <ClientApp />
        ) : (
          <StaffApp />
        )}
      </UserContext.Provider>
    </SafeAreaView>
  )
}
