import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Users from './pages/users'
import Home from './pages/Home'
import CreateUser from './pages/Users/create'
import RickAndMorty from './pages/RickAndMorty'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/rick-and-morty' element={<RickAndMorty/>} /> 
        <Route path='/Users' element={<Users/>} />
        <Route path='/create/user' element={<CreateUser/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
