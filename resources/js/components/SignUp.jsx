import { Button } from '@nextui-org/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { getWithAxios } from './api/axios';
import InputWithLabel from './partials/InputWithLabel';

const SignUp = () => {

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

    const handleUserInscription = async () => {
        const res = await getWithAxios("/api/sign_up")
    }

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
                    <Button css={{ background:"#93B98D" }} onPress={handleUserInscription}>
                        <span className=' font-bold text-white '>
                            Valider
                        </span>
                    </Button>
                </div>
            </div>
            
        </div>
    )
}

export default SignUp

/* if (document.getElementById('login')) {
    const Index = ReactDOM.createRoot(document.getElementById("login"));

    Index.render(
        <React.StrictMode>
            <Login/>
        </React.StrictMode>
    )
} */