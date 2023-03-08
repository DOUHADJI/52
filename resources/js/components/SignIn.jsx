import { Button } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCsrfToken, postWithAxios } from "./api/axios";
import InputWithoutLabel from "./partials/InputWithoutLabel";

const SignIn =() => {
   const [email, setEmail] = useState()
   const [password, setPassword] = useState()
   const [errors, setErrors] = useState({})
   const navigate = useNavigate()


   const handleConnexion = async () => {
    const credentials =  {
        email : email,
        password : password
    }

    await getCsrfToken()
    const res = await postWithAxios('/sign_in', credentials)
    console.log(res)
    res.errors? setErrors(res.errors) : navigate('/dashboard')
  

   }

   

    return(
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <div className='flex flex-col items-center justify-center bg-[#F4F1F1] w-[384px] gap-6 py-8'>
                <p className="font-bold text-md text-[#BF7B2A] text-center pt-12 mb-12">
                    52 avant notre ère : Les jeux du cirque
                </p>

                <p className='underline'>
                    Formulaire de connexion
                </p>

                <p className='text-red-600'>
                    {errors?.message}
                </p>

                <div className='flex flex-col gap-6'>
                    <InputWithoutLabel  placeholder={"email"} inputType={'text'} setValue={setEmail} error={errors.email} />  
                    <InputWithoutLabel  placeholder={"mot de passe"} inputType={'password'} setValue={setPassword} error={errors.password}  />  
                </div>

          
                <Button css={{ background: "#93B98D"}} onPress={handleConnexion} >
                    <span className='font-bold text-white'>
                        se connecter
                    </span>
                </Button>
        
            </div>
            
        </div>
    )
}

export default SignIn

