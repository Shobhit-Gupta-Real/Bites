import { useEffect, useState } from 'react'
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
import Restaurant from './Components/Restaurant'
import NearRest from './Components/NearRest'
import AddFood from './Pages/AddFood'
import Rest from './Pages/Rest'
import Item from './Components/Item'
import SearchResult from './Pages/SearchResult'
import Favourites from './Pages/Favourites'
import { ThemeProvider } from './Context/theme'

function App() {
  const [themeMode, setThemeMode] = useState("light")
  const lightTheme=()=>{
    setThemeMode("light"),
    document.querySelector('body').style.backgroundColor = "white"
    document.querySelector('html').style.backgroundColor = "white"
  }
  const darkTheme=()=>{
    setThemeMode("dark"),
    document.querySelector('body').style.backgroundColor = "#222"
    document.querySelector('html').style.backgroundColor = "#222"
  }
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])
  return (
    <>
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
    <UserContextProvider>
    <LoginContextProvider>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='' element={<FrontPage/>}/>
          <Route path='search/:item' element={<SearchResult/>}/>
          <Route path='SignIn' element={<Login/>}/>
          <Route path='SignUp' element={<SignUp/>}/>
          <Route path='profile' element={<Profile/>}/>
          <Route path='favourites/:id' element={<Favourites/>}/>
          <Route path='rest/:id' element={<ProductDesc/>}/>
          <Route path='/addrest' element={<Restadd/>}/>
        </Route>
        <Route path='doner' element={<Layout/>}>
            <Route path='' element={<Rest/>}/>
            <Route path=':id' element={<AddFood/>}/>
        </Route>
      </Routes>
    </LoginContextProvider>
    </UserContextProvider>
    </ThemeProvider>
    </>
  )
}

export default App
