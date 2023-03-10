import React, { useEffect, useState } from 'react';
import Layout from "../Layout/layout"
import GladiatorInfos from '../../partials/gladiatorInfos';
import { Button } from '@nextui-org/react';
import { useParams } from 'react-router-dom';
import { postWithAxios } from '../../api/axios';


const Ludi = () => {

    const gladiators = [
        {
            nom : "gladiator 1",
            talents : [
                {
                    nom : "Adresse",
                    valeur : 2
                },

                {
                    nom : "Force",
                    valeur : 2
                },

                {
                    nom : "Equilibre",
                    valeur : 2
                },

                {
                    nom : "Vitesse",
                    valeur : 2
                },

                {
                    nom : "Stratégie",
                    valeur : 2
                }
            ]
        },

        {
            nom : "gladiator 1",
            talents : [
                {
                    nom : "Adresse",
                    valeur : 2
                },

                {
                    nom : "Force",
                    valeur : 2
                },

                {
                    nom : "Equilibre",
                    valeur : 2
                },

                {
                    nom : "Vitesse",
                    valeur : 2
                },

                {
                    nom : "Stratégie",
                    valeur : 2
                }
            ]
        },

    
    ]
    const params = useParams()
    const ludiName = params.ludiName

    const [gladiateurs, setGladiateurs] = useState()

    const getGladiatorsOfTheLudi = async() => {
        const data = {
            ludiName: ludiName
        }
        const res =await postWithAxios('/get_ludi_gladiators', data)

        setGladiateurs(res.gladiateurs)

        console.log(res)
    }

    useEffect(()=> {
        getGladiatorsOfTheLudi()
    },[])
    
    return(
        <div className='bg-[#D9D9D9] mt-[90px] py-10 '>
                <p className='text-center font-black text-lg underline mb-12'>Ecole de gladiateur : {ludiName}</p>
                <div className='grid md:grid-cols-2 px-12 font-black '>
                    <p className='w-full'>Spécialité : combat de char</p>
                    <p className='text-end'>
                        <span className='text-2xl  w-full'>02</span>/10 gladiateurs
                    </p>
                </div>

                <div className='grid lg:grid-cols-2 gap-12 mt-[50px] px-12'>
                    {gladiators.map((g,index) => <GladiatorInfos key={index} nom={g.nom} talents={g.talents} />)}
                </div>

                <div className=' flex justify-end mt-12 pr-12'>
                    <Button color={"secondary"} size="lg">
                        <span className='font-bold'>
                            Recruter un gladiateur
                        </span>
                    </Button>
                </div>

            </div>
    )
}

export default Ludi

