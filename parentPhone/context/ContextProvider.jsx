import {createContext, useState, useEffect, Children} from 'react'
import { auth } from '../config/firebase'
export const appContext = createContext()


const ContextProvider = ({children}) => {
    const [user, setUser] = useState("");
    useEffect(()=>{
        if(auth.currentUser){
            setUser(auth.currentUser);}
            else{
                setUser(null);
            }

    })
        

    
  return (
    <appContext.Provider value={{user, setUser}}>{children}</appContext.Provider>
  )
}

export default ContextProvider