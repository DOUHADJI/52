import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getWithAxios, postWithAxios } from '../../api/axios';
import { progressions } from '../../api/const';
import { UserContext, UserContextProvider } from '../../userContext';
import SideBar from './partials/SideBar';



const Layout = ({children}) =>  {
    const date = new Date();
    const currentDate = date.toLocaleDateString()
    const navigate = useNavigate()

    const redirectToLogin = async () => {
        const res = await  getWithAxios('/user')
       
        res.user ? null :  navigate('/sign_in')
    }

    const setDailyProgressions = async () => {
        const data = {
            progressions : progressions
        }
        const res = postWithAxios("/progression_du_jour", data)

        console.log(res)
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
         redirectToLogin()
    },[])

    useEffect(()=>{
        setDailyProgressions()
   },[])


    useEffect(()=>{
        timeCount()
    },[])
    
    return(
        <UserContextProvider>
            <div className="flex p-6 ">
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

