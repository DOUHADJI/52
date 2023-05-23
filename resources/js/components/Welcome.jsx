import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';

const Welcome = () => {

   

    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-transparent'>
            <div className='flex flex-col  items-center justify-center bg-[#23175ec9] py-12 w-[384px] gap-12'>
                <img src="/img/52_logo.png" alt="52" className='h-36' />
                <p className="font-bold text-md text-[#BF7B2A] text-center">
                    52 avant notre ère : Les jeux du cirque
                </p>
                <div className='flex flex-col gap-6'>
                    <Link to={"sign_up"}>
                        <button className='font-bold text-white bg-[#A8994A] h-[40px] w-[126px] rounded-[20px] '>
                            S'inscrire
                        </button>
                    </Link>

                    <Link to={"sign_in"}>
                        <button className='font-bold text-white bg-[#A8994A] h-[40px] w-[126px] rounded-[20px] '>
                            Se connecter
                        </button>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}

export default Welcome

/* if (document.getElementById('welcome')) {
    const Index = ReactDOM.createRoot(document.getElementById("welcome"));

    Index.render(
        <React.StrictMode>
            <Welcome/>
        </React.StrictMode>
    )
} */