import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import Login from './views/Login'
import ClientApp from './ClientApp'
import StaffApp from './StaffApp'

interface User {
  name: string
  role: string
}

export default function App() {
  const [user, setUser] = useState<User | null>(null)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {user == null ? (
        <Login />
      ) : user.role == 'client' ? (
        <ClientApp />
      ) : (
        <StaffApp />
      )}
    </SafeAreaView>
  )
}
