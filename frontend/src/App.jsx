import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Users from './pages/users'
import Home from './pages/Home'
import CreateUser from './pages/Users/create'
import RickAndMorty from './pages/RickAndMorty'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login'
import { AuthProvider } from './auth/context'
import PrivateRoute from './router/PrivateRoute'


function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path='/Users' element={<Users />} />
          <Route path='/create/user' element={<CreateUser />} />
          <Route path='/RickAndMorty' element={<RickAndMorty />} />
        </Route>
      </Routes>

      <ToastContainer
        position="bottom-center"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ width: '50%' }}

      />
      <Footer />
    </AuthProvider>
  )
}

export default App
