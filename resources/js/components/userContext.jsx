import {createContext, useEffect, useState } from "react";
import { getWithAxios } from "./api/axios";


export const UserContext = createContext()


export const UserContextProvider = ({children}) => {

    const [user, setUser] =useState()

    const getUser = async () => {
        const res = await getWithAxios('/user')
        
         setUser(res.user)
    }


    useEffect(()=>{
        getUser()
    },[])

    return(
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}