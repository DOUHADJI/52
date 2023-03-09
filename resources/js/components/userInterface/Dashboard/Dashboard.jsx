import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import GladiatorInfos from '../../partials/GladiatorInfos';
import PJCard from '../../partials/PJCard';
import { UserContext } from '../../userContext';
import Layout from "../Layout/Layout"

const Dashboard = () => {


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

    const progressions = [
        {
            specialite : "Combat de char",
            typeEntrainement : [
                {
                    type : "physique",
                    valeur : "02",
                    cardHexColor : "542188"

                },

                {
                    type : "tactique",
                    valeur : "02",
                    cardHexColor : "7674CB"
                },

                {
                    type : "combiné",
                    valeur : "02",
                    cardHexColor : "E489AF"
                }
            ]

        },

        {
            specialite : "Lutte",
            typeEntrainement : [
                {
                    type : "physique",
                    valeur : "02",
           

                },

                {
                    type : "tactique",
                    valeur : "02",
                
                },

                {
                    type : "combiné",
                    valeur : "02",
                    
                }
            ]

        }
    ]


    return(
        <Layout>
            <div className='pt-8'>
                <div className='bg-[#AC93DF] rounded-[15px] py-8 px-6'>
                    <p className='text-white font-bold text-2xl'>
                        Bienvenue,{' '}
                        <span className='text-2xl'>
                            <UserContext.Consumer>
                                {value => <span>{value?.nom}</span>}
                            </UserContext.Consumer>
                        </span>
                    </p>
                    <div className=' flex justify-end items-center gap-4 w-full'>
                        <p className='text-white font-bold text-md'>Début des épreuves <br/> dans le colisé</p>
                        <div className='bg-[#B93F3F] rounded-[15px] text-white text-center font-bold text-sm py-2 px-6 h-[38px] w-[124px]'>
                            en attente
                        </div>
                    </div>

                </div>

                <div className='grid grid-cols-3 gap-12 mt-[70px]'>
                    {gladiators.map((g,index) => <GladiatorInfos key={index} nom={g.nom} talents={g.talents} />)}
                </div>

                <div className='mt-[60px]'>
                    <p className='text-center font-bold text-2xl'>Progressions du jour</p>

                    <div className='mt-12'>
                        {progressions.map((pj,index) => <div key={index} className="mb-8">
                            <p className='text-start font-bold text-md mb-2'>{pj.specialite}</p>
                            <div className='grid grid-cols-3 gap-12'>
                                {pj.typeEntrainement.map((e,index) =>  <PJCard 
                                    key={index}
                                    cardHexColorIndex={index} 
                                    typeEntrainement={e.type}
                                    valeur={e.valeur}
                                /> )}  
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard


if (document.getElementById('dashboard')) {
    const Index = ReactDOM.createRoot(document.getElementById("dashboard"));

    Index.render(
        <Dashboard />
    )
}