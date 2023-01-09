import { createContext } from 'react'
import User from '../types/User.interface'

interface UserContextInterface {
  user: User | null
  setUser: any
}

const UserContext = createContext<UserContextInterface | null>(null)

export default UserContext
