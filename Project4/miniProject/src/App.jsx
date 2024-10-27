import { useState } from 'react'
import Login from './Components/Login'
import Profile from './Components/Profile'
import userContextProvider from './Context/userContextProvider'



function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>React video for context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App

