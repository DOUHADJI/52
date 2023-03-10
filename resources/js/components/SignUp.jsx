import { Button, Link, Radio } from '@nextui-org/react';
import React, { useState } from 'react';
import { BsFillCheckSquareFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { getCsrfToken, postWithAxios } from './api/axios';
import { specialites } from './api/const';
import InputWithLabel from './partials/inputWithLabel';
import Selection from './partials/selection';

const SignUp = () => {

    const [firstName, setFirstName] = useState(null)
    const [secondName, setSecondName] = useState(null)
    const [pseudo, setPseudo] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [ecole, setEcole] = useState(null)
    const [specialite, setSpecialite] = useState(null)
    const [data, setData] = useState(null)
    const [errors, setErrors] = useState({})
    const [signupSuccess, setSignupSuccess] = useState(false)
    const navigate = useNavigate()

    const options = specialites


    const handleUserInscription = async () => {
        const user = {
            nom : firstName,
            prenoms : secondName,
            pseudo : pseudo,
            email : email,
            mot_de_passe : password,
            bourse : 10,
            ecole : ecole,
            specialite : specialite
    
        }

      
        const res = await postWithAxios("/sign_up", user)
      
        res.errors ? setErrors(res.errors) : handleInscriptionSuccessfull()
    }

    const handleInscriptionSuccessfull = () => {  
        setSignupSuccess(true)
        setTimeout(()=>navigate('/backoffice/accueil'), 1500)
    }

    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <div className='flex flex-col items-center justify-center bg-[#F4F1F1]  h-full gap-4 py-8 px-10'>
                <p className="font-bold text-lg text-[#BF7B2A] text-center my-6">
                    52 avant notre ère : Les jeux du cirque
                </p>

                <p className='underline' hidden={signupSuccess}>
                    Formulaire d'inscription
                </p>

                <div hidden={signupSuccess} className="py-4">
                    <div className='flex flex-col gap-4'  >
                    <InputWithLabel  label={"Nom"} inputType={"text"} setValue={setFirstName} error={errors.nom} /> 
                    <InputWithLabel  label={"Prénom(s)"} inputType={"text"} setValue={setSecondName} error={errors.prenoms} /> 
                    <InputWithLabel  label={"Pseudo"} inputType={"text"} setValue={setPseudo} error={errors.pseudo} /> 
                    <InputWithLabel  label={"Email"} inputType={"text"} setValue={setEmail} error={errors.email} /> 
                    <InputWithLabel  label={"Nom de l'école"} inputType={"text"} setValue={setEcole} error={errors.ecole} /> 
                    <Selection label={"Specialité de l'école"} options={options} setSpecialite={setSpecialite} specialite={specialite} error={errors.specialite} />
                    <InputWithLabel  label={"Mot de passe"} inputType={"password"} setValue={setPassword} error={errors.mot_de_passe} /> 

                    </div>

                    <div className='flex justify-center mt-8 w-full' >
                        <Button   css={{ background:"#93B98D" }} onPress={handleUserInscription}>
                            <span className=' font-bold text-white w-full '>
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

                <p className="underline">Déjà inscrit(e) ? <Link href="/sign_in">se connecter</Link> </p>
               

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