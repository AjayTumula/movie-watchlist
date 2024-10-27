
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar'
import Home from './Home'
import Login from './auth/Login'



function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </div>
  )
}

export default App
