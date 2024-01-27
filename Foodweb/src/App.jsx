import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Background from './Components/Background'
import FrontPage from './Pages/FrontPage'
import Recommend from './Components/Recommend'
import { Route, Routes } from 'react-router-dom'
import { UserContextProvider } from './Context/UserContext'
import { LoginContextProvider } from './Context/LoginContext'
import Layout from './Layout'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import ProductDesc from './Pages/ProductDesc'
import Profile from './Pages/Profile'
import Foodadd from './Seed/Restadd'
import Restadd from './Seed/Restadd'

function App() {
  return (
    <>
    <UserContextProvider>
    <LoginContextProvider>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='' element={<FrontPage/>}/>
          <Route path='SignIn' element={<Login/>}/>
          <Route path='SignUp' element={<SignUp/>}/> 
          <Route path='profile' element={<Profile/>}/>
          <Route path='done' element={<ProductDesc/>}/>
          <Route path='/addrest' element={<Restadd/>}/>
        </Route>
      </Routes>
    </LoginContextProvider>
    </UserContextProvider>
    </>
  )
}

export default App
