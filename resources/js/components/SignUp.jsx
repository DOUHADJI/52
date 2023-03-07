import React from 'react';
import ReactDOM from 'react-dom/client';
import InputWithLabel from './partials/InputWithLabel';

const Login = () => {

    const inputs = [
        {
            label : "Nom",
            inputType : "text"
        },

        {
            label : "Prénom(s)",
            inputType : "text"
        },

        {
            label : "Pseudo",
            inputType : "text"
        },

        {
            label : "Email",
            inputType : "email"
        },

        {
            label : "Mot de passe",
            inputType : "password"
        }


    ]

    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <div className='flex flex-col items-center justify-center bg-[#F4F1F1] w-[384px] gap-12 py-8'>
                <p className="font-bold text-md text-[#BF7B2A] text-center">
                    52 avant notre ère : Les jeux du cirque
                </p>

                <p className='underline'>
                    Formulaire d'inscription
                </p>

                <div className='flex flex-col gap-6'>
                 {inputs.map((e,index) => <InputWithLabel key={index} label={e.label} inputType={e.inputType} />)} 
                </div>

                <div className='flex  justify-end pr-8 w-full'>
                    <button className='rounded-[20px] bg-[#93B98D] font-bold text-white h-[33px] w-[108px]'>
                        Valider
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default Login

if (document.getElementById('login')) {
    const Index = ReactDOM.createRoot(document.getElementById("login"));

    Index.render(
        <React.StrictMode>
            <Login/>
        </React.StrictMode>
    )
}