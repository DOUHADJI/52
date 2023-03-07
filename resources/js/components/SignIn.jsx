import React from "react";
import  ReactDOM  from "react-dom/client";
import InputWithoutLabel from "./partials/InputWithoutLabel";

const SignIn =() => {
    const inputs = [
        {
            placeholder : "Pseudo",
            inputType : "text"
        },

        {
            placeholder : "Mot de passe",
            inputType : "password"
        },



    ]
    return(
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <div className='flex flex-col items-center justify-center bg-[#F4F1F1] w-[384px] gap-6 py-8'>
                <p className="font-bold text-md text-[#BF7B2A] text-center pt-12 mb-12">
                    52 avant notre ère : Les jeux du cirque
                </p>

                <p className='underline'>
                    Formulaire de connexion
                </p>

                <div className='flex flex-col gap-6'>
                 {inputs.map((e,index) => <InputWithoutLabel key={index} placeholder={e.placeholder} inputType={e.inputType} />)} 
                </div>

                <button className='rounded-[20px] bg-[#93B98D] font-bold text-white h-[33px] w-[219px]'>
                    Se connecter
                </button>
            </div>
            
        </div>
    )
}

export default SignIn

if (document.getElementById('signin')) {
    const Index = ReactDOM.createRoot(document.getElementById("signin"));

    Index.render(
        <React.StrictMode>
            <SignIn/>
        </React.StrictMode>
    )
}