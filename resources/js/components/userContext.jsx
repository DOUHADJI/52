import {createContext, useEffect, useState } from "react";
import { getWithAxios } from "./api/axios";
import Layout from "./userInterface/Layout/layout";


export const UserContext = createContext()


export const UserContextProvider = ({children}) => {

    const [user, setUser] =useState()

    const context = {user, setUser}

    const getUser = async () => {
        const res = await getWithAxios('/user')
        
         setUser(res.user)
    }


    useEffect(()=>{
        getUser()
    },[user])

    return(
        <UserContext.Provider value={context}>
            {children}
        </UserContext.Provider>
    )
}