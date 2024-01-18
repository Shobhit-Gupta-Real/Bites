import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Background from './Components/Background'
import FrontPage from './Pages/FrontPage'
import Recommend from './Components/Recommend'
import { Route, Routes } from 'react-router-dom'
import { LoginContextProvider } from './Context/LoginContext'
import Layout from './Layout'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'

function App() {
  return (
    <>
    <LoginContextProvider>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='' element={<FrontPage/>}/>
          <Route path='SignIn' element={<Login/>}/>
          <Route path='SignUp' element={<SignUp/>}/> 
        </Route>
      </Routes>
    </LoginContextProvider>
    </>
  )
}

export default App
