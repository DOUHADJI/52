import React from 'react';
import Layout from "../Layout/Layout"
import GladiatorInfos from '../../partials/GladiatorInfos';
import { Button } from '@nextui-org/react';


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
    return(
        <Layout>
            <div className='bg-[#D9D9D9] mt-[90px] py-10 '>
                <p className='text-center font-black text-lg underline'>Nom du ludi</p>
                <div className='flex justify-between px-12 font-black'>
                    <p>Spécialité : combat de char</p>
                    <p><span className='text-2xl'>02</span>/10 gladiateurs</p>
                </div>

                <div className='grid grid-cols-3 gap-12 mt-[50px] px-12'>
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
        </Layout>
    )
}

export default Ludi

