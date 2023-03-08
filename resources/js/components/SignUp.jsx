import { Button } from '@nextui-org/react';
import React, { useState } from 'react';
import { BsFillCheckSquareFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { getCsrfToken, postWithAxios } from './api/axios';
import InputWithLabel from './partials/InputWithLabel';

const SignUp = () => {

    const [firstName, setFirstName] = useState(null)
    const [secondName, setSecondName] = useState(null)
    const [pseudo, setPseudo] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [data, setData] = useState(null)
    const [errors, setErrors] = useState({})
    const [signupSuccess, setSignupSuccess] = useState(false)
    const navigate = useNavigate()

   

    


    const inputs = [
        {
            label : "Nom",
            inputType : "text",
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
        const user = {
            nom : firstName,
            prenoms : secondName,
            pseudo : pseudo,
            email : email,
            mot_de_passe : password,
            bourse : 10
    
        }

      
        const res = await postWithAxios("/sign_up", user)
    
        res.errors ? setErrors(res.errors) : handleInscriptionSuccessfull()
    }

    const handleInscriptionSuccessfull = () => {
        
        setSignupSuccess(true)
        setTimeout(()=>navigate('/sign_in'), 1500)
    }

    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <div className='flex flex-col items-center justify-center bg-[#F4F1F1] w-[384px] h-full gap-12 py-8'>
                <p className="font-bold text-lg text-[#BF7B2A] text-center">
                    52 avant notre ère : Les jeux du cirque
                </p>

                <p className='underline' hidden={signupSuccess}>
                    Formulaire d'inscription
                </p>

                <div hidden={signupSuccess} className="py-8">
                    <div className='flex flex-col gap-6'  >
                    <InputWithLabel key={1} label={"Nom"} inputType={"text"} setValue={setFirstName} error={errors.nom} /> 
                    <InputWithLabel key={2} label={"Prénom(s)"} inputType={"text"} setValue={setSecondName} error={errors.prenoms} /> 
                    <InputWithLabel key={3} label={"Pseudo"} inputType={"text"} setValue={setPseudo} error={errors.pseudo} /> 
                    <InputWithLabel key={4} label={"Email"} inputType={"text"} setValue={setEmail} error={errors.email} /> 
                    <InputWithLabel key={5} label={"Mot de passe"} inputType={"password"} setValue={setPassword} error={errors.mot_de_passe} /> 

                    </div>

                    <div className='flex  justify-end  mt-8 w-full' >
                        <Button css={{ background:"#93B98D" }} onPress={handleUserInscription}>
                            <span className=' font-bold text-white '>
                                Valider
                            </span>
                        </Button>
                    </div>
                </div>

                <div className='text-xl text-green-700 font-bold' hidden={!signupSuccess}>
                    <p className='flex gap-3 items-center justify-center'>
                        <span>Inscrition réussie</span>
                        <span><BsFillCheckSquareFill className='text-2xl' /> </span>
                    </p>
                </div>

               

            </div>
            
        </div>
    )
}

export default SignUp

/* 
if (document.getElementById('root')) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));

    Index.render(
        <React.StrictMode>
            <Login/>
        </React.StrictMode>
    )
} */