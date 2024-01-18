import {React, useContext, createContext, useState} from 'react'

export const LoginContext = createContext({
    
})


export function LoginContextProvider({children}) {
  const [login, setLogin] = useState('SignIn')
  return (
      <LoginContext.Provider value={{login, setLogin}}>
        {children}
      </LoginContext.Provider>
  )
}

export const useLoginContext = () =>{
  return useContext(LoginContext)
}
