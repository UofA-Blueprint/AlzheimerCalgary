import { createContext } from 'react'
import User from '../interfaces/User'

interface UserContextInterface {
  user: User | null
  setUser: any
}

const UserContext = createContext<UserContextInterface | null>(null)

export default UserContext
