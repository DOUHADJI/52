import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from "../Layout/Layout"
import { Button } from '@nextui-org/react';
import GladiatorTraining from '../../partials/GladiatorTraining';


const Entrainement = () => {

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
                <p className='text-center font-black text-lg underline'>Nom du Ludi</p>
                <div className='flex justify-between px-12 font-black'>
                    <p>Spécialité : combat de char</p>
                    <p><span className='text-2xl'>02</span>/10 gladiateurs</p>
                </div>

                <div className='grid grid-cols-3 gap-12 mt-[50px] px-12'>
                    {gladiators.map((g,index) => <GladiatorTraining key={index} nom={g.nom} talents={g.talents} />)}
                </div>

            </div>
        </Layout>
    )
}

export default Entrainement
