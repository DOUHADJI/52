import { Button, Link } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCsrfToken, getWithAxios, postWithAxios } from "./api/axios";
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

    console.log(credentials)

    await getCsrfToken()
    const res = await postWithAxios('/sign_in', credentials)
   

    res.status == "success" ?  navigate('/dashboard')  : setErrors(res.errors)
  

   }

   const redirectToDashboard = async () => {
    
      const res = await getWithAxios('/user')

     res.user? navigate('/backoffice/accueil') : null

    
 
    }

    useEffect(()=>{
        redirectToDashboard() 
    },[])
    

    return(
        <div className='flex items-center justify-center min-h-screen'>
            <div className='flex flex-col items-center justify-center bg-[#F4F1F1] gap-6 py-8 px-10'>
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
                    <InputWithoutLabel  placeholder={"email"} inputType={'text'} setValue={setEmail} error={errors?.email} />  
                    <InputWithoutLabel  placeholder={"mot de passe"} inputType={'password'} setValue={setPassword} error={errors?.password}  />  
                </div>

          
                <Button css={{ background: "#93B98D"}} onPress={handleConnexion} >
                    <span className='font-bold text-white'>
                        se connecter
                    </span>
                </Button>
                <p className="underline">Pas encore inscrit(e) ? <Link href="/sign_up">s'inscrire</Link> </p>
        
            </div>       
        </div>
    )
}

export default SignIn

