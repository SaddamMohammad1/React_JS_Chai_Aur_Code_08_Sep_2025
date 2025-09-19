import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <div className="flex justify-between items-center h-screen px-8 bg-gray-50">
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  )
}

export default App
