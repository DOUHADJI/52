import React, { Children, createContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { getWithAxios } from '../../api/axios';
import { UserContextProvider } from '../../userContext';
import SideBar from './partials/SideBar';



const Layout = ({children}) =>  {
    const date = new Date();
    const currentDate = date.toLocaleDateString()

    const [user, setUser] =useState()

    const getUser = async () => {
        const res = await getWithAxios('/user')
        
         setUser(res.user)
    }

 
    function timeCount() {
        var today = new Date();

        var hour = today.getHours();
        if(hour<10)hour = "0"+hour;

        var minute = today.getMinutes();
        if(minute<10)minute = "0"+minute;

        var second = today.getSeconds();
        if(second<10)second = "0"+second;

        document.getElementById("clock").innerHTML = 
            hour+":"+minute+":"+second;

        setTimeout(()=>timeCount(), 1000);
    }

    useEffect(()=>{
        getUser()
    },[])

    useEffect(()=>{
        timeCount()
    },[])
    
    return(
        <UserContextProvider value={user}>
            <div className="flex p-6">
                <SideBar />
                <div className="bg-[#F0EDED] w-full rounded-r-[15px] text-md">
                    <div className='flex gap-10 justify-end pr-12 items-center bg-[#C08989] rounded-tr-[15px] h-[49px]'>
                        <p className='font-bold text-white'>
                            Date : {currentDate}
                        </p>

                        <p className='font-bold text-white'>
                           Heure : <span  id='clock'></span>
                        </p>

                    </div>
                    
                    <div className='px-8'>
                        {children}
                    </div>
                </div>

            </div>
        </UserContextProvider>
    )
}

export default Layout

