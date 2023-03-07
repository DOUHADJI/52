import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import SideBar from './partials/SideBar';

const Layout = ({children}) =>  {
    // const Date = new Date()
    
    return(
        <div className="flex p-6">
            <SideBar />
            <div className="bg-[#F0EDED] w-full rounded-r-[15px]">
                <div className='flex gap-10 justify-end pr-12 items-center bg-[#C08989] rounded-tr-[15px] h-[49px]'>
                    <p className='font-bold text-white'>
                        Date : current Date
                    </p>

                    <p className='font-bold text-white'>
                        Heure : current time
                    </p>

                </div>
                
                <div className='px-8'>
                    {children}
                </div>
            </div>

        </div>
    )
}

export default Layout

if (document.getElementById('layout')) {
    const Index = ReactDOM.createRoot(document.getElementById("layout"));

    Index.render(
        <Layout/>
    )
}