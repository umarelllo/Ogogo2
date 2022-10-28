import { Header } from '../widgets/header/header'
import { Footer } from '../widgets/footer/footer'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../page/home/home'
import { Registration } from '../page/registration/registration'
import { Login } from '../page/login/login'

export const App = () => {
  return (
  <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Registration/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    <Footer/>
  </>
  )
}