import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BsEmojiFrown } from 'react-icons/bs';
import { getWithAxios, postWithAxios } from '../../api/axios';
import { progressions } from '../../api/const';
import GladiatorInfos from '../../partials/gladiator';
import PJCard from '../../partials/pjCard';
import { UserContext } from '../../userContext';


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

    const [prgrs, setPrgrs] =useState()
    const [charPrgrs, setCharPrgrs] =useState()
    const [luttePrgrs, setLuttePrgrs] =useState()
    const [athletismePrgrs, setAthletismePrgrs] =useState()
    const [gladiateurs, setGladiateurs] = useState()



    const setDailyProgressions = async () => {
        const data = {
            progressions : progressions
        }

        const res = await postWithAxios("/progression_du_jour", data)

        setPrgrs(res.progressions_du_jour)

    }

    const setCharSpecialitePjs = () => {
        const res = prgrs?.filter((item) =>
        item?.specialite.match('Course de char'),
        )   
        setCharPrgrs(res)
    }

    const setLutteSpecialitePjs = () => {
        const res = prgrs?.filter((item) =>
        item?.specialite.match('Lutte'),
        )   
        setLuttePrgrs(res)
    }

    const setAthletismeSpecialitePjs = () => {
        const res = prgrs?.filter((item) =>
        item?.specialite.match('Athletisme'),
        )   
        setAthletismePrgrs(res)
    }

    const getGladiatorsOfTheLudi = async() => {

        const {ludis} = await getWithAxios('/get_user_ludis')

        const data = {
            ludiName: ludis[0].nom,
            ludiId : ludis[0].id
    }

    

        const res =await postWithAxios('/get_ludi_gladiators', data)
       
        setGladiateurs(res.gladiateurs)
 
    }



    useEffect(()=>{
        setDailyProgressions()
    },[])

    useEffect(()=>{
        setCharSpecialitePjs()
    },[prgrs])

    useEffect(()=>{
        setLutteSpecialitePjs()
    },[prgrs])

    useEffect(()=>{
        setAthletismeSpecialitePjs()
    },[prgrs])

    useEffect(()=> {
        getGladiatorsOfTheLudi()
    },[])




    return(
        <div className='pt-8'>
                <div className='bg-[#AC93DF] rounded-[15px] py-8 px-6'>
                    <p className='text-white font-bold text-2xl'>
                        Bienvenue,{' '}
                        <span className='text-2xl'>
                            <UserContext.Consumer>
                                {value => <span>{value.user?.nom}</span>}
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

                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-12 mt-[70px]'>
                {gladiateurs?.length>0? 
                        gladiateurs.map((g,index) => 
                            <GladiatorInfos 
                                key={index} 
                                nom={g.nom} 
                                adresse={g.adresse}
                                force={g.force} 
                                equilibre={g.equilibre}
                                vitesse={g.vitesse}
                                strategie={g.strategie}
                                avatarIndex={g.avatar}
                                id={g.id}
                            />) 
                            : <p className='flex items-center gap-2 text-lg w-full'>
                                <span>Vous n'avez aucun gladiateur dans votre école</span>
                                <span>
                                    <BsEmojiFrown className='text-3xl'/>
                                </span>
                                </p>}
                </div>

                <div className='mt-[60px]'>
                    <p className='text-center font-bold text-2xl mb-12'>Progressions du jour</p>

                    <div className='mb-6'>
                        <p className='text-start font-bold text-lg mb-2'>Course de char</p>
                        <div className='grid md:grid-cols-3 gap-12 '>
                            {charPrgrs?.map((pj,index) => <PJCard 
                                        key={index}
                                        cardHexColorIndex={index} 
                                        typeEntrainement={pj.type_entrainement}
                                        valeur={pj.valeur_du_jour}
                                    />
                                    
                            )} 
                        </div>
                    </div>

                    <div className='mb-6'>
                        <p className='text-start font-bold text-lg mb-2'>Lutte</p>
                        <div className='grid md:grid-cols-3 gap-12 '>
                            {luttePrgrs?.map((pj,index) => <PJCard 
                                        key={index}
                                        cardHexColorIndex={index} 
                                        typeEntrainement={pj.type_entrainement}
                                        valeur={pj.valeur_du_jour}
                                    />
                                    
                            )} 
                        </div>
                    </div>

                    <div className='mb-6'>
                        <p className='text-start font-bold text-lg mb-2'>Athlétisme</p>
                        <div className='grid md:grid-cols-3 gap-12 '>
                            {athletismePrgrs?.map((pj,index) => <PJCard 
                                        key={index}
                                        cardHexColorIndex={index} 
                                        typeEntrainement={pj.type_entrainement}
                                        valeur={pj.valeur_du_jour}
                                    />
                                    
                            )} 
                        </div>
                    </div>

                    
                </div>
        </div>
    )
}

export default Dashboard


if (document.getElementById('dashboard')) {
    const Index = ReactDOM.createRoot(document.getElementById("dashboard"));

    Index.render(
        <Dashboard />
    )
}