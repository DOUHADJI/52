import React, { useEffect, useState } from 'react';
import Layout from "../Layout/layout"
import GladiatorInfos from '../../partials/gladiatorInfos';
import { Button } from '@nextui-org/react';
import { useParams } from 'react-router-dom';
import { postWithAxios } from '../../api/axios';
import { BsEmojiFrown } from 'react-icons/bs';
import UpdateLudiModal from './updateLudiModal';
import { ToastContainer } from 'react-toastify';


const Ludi = () => {

   
    const params = useParams()
    const {ludiName, ludiSpecialite} = params

    const [gladiateurs, setGladiateurs] = useState()

    const[updateLudiModalIsVisible, setUpdateLudiModalIsVisible] =useState(false)

    const handleUpdateLudiModalVisibility = () => {
        setUpdateLudiModalIsVisible(true)
    }

    const getGladiatorsOfTheLudi = async() => {
        const data = {
            ludiName: ludiName
        }
        const res =await postWithAxios('/get_ludi_gladiators', data)

        setGladiateurs(res.gladiateurs)

        
    }

    useEffect(()=> {
        getGladiatorsOfTheLudi()
    },[])
    
    return(
        <div className='bg-[#D9D9D9] mt-[90px] py-10 '>
                <p className='text-center font-black text-lg underline mb-12'>Ecole de gladiateur : {ludiName}</p>
                <div className='grid md:grid-cols-2 px-12 font-black '>
                    <p className='w-full'>Spécialité : {ludiSpecialite}</p>
                    <p className='text-end'>
                        <span className='text-2xl  w-full'>{gladiateurs?.length}</span>/10 gladiateurs
                    </p>
                </div>

                <div className='grid lg:grid-cols-2 gap-12 mt-[50px] px-12'>
                    {gladiateurs?.length>0? 
                        gladiateurs.map((g,index) => 
                            <GladiatorInfos key={index} nom={g.nom} talents={g.talents} />) 
                            : <p className='flex items-center gap-2 text-lg w-full'>
                                <span>Vous n'avez aucun gladiateur dans votre école</span>
                                <span>
                                    <BsEmojiFrown className='text-3xl'/>
                                </span>
                                </p>}
                </div>

                <div className=' flex justify-end mt-12 pr-12 gap-8'>
                    <Button color={"error"} size="lg"flat onPress={handleUpdateLudiModalVisibility}>
                        <span className='font-bold'>
                            Modifier les information de l'école
                        </span>
                    </Button>

                    <Button color={"primary"} size="lg">
                        <span className='font-bold'>
                            Créer un gladiateur
                        </span>
                    </Button>

                    <Button color={"secondary"} size="lg">
                        <span className='font-bold'>
                            Recruter un gladiateur
                        </span>
                    </Button>

                </div>
                    <UpdateLudiModal 
                        updateLudiModalIsVisible={updateLudiModalIsVisible}
                        setUpdateLudiModalIsVisible={setUpdateLudiModalIsVisible}
                        ludiName={ludiName}
                     />
            </div>
    )
}

export default Ludi

