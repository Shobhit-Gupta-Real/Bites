import { useContext, createContext, useState } from "react";

export const UserContext = createContext({

})

export function UserContextProvider({children}){
    const [user, setUserInfo] = useState({})
    return(
        <UserContext.Provider value={{user, setUserInfo}}>
            {children}
        </UserContext.Provider>
    )
}
export const useUserContext = () =>{
    return useContext(UserContext)
}