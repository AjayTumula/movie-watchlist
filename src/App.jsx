
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Login from './auth/Login'
import MyLists from './components/MyLists'
import { BookmarkProvider } from './BookmarkContext'



function App() {

  return (
    <div>
      <BookmarkProvider>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path="/mylists" element={<MyLists />} />
        </Routes>
      </BookmarkProvider>
    </div>
  )
}

export default App
