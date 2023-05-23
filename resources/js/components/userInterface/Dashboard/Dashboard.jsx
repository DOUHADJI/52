import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BsEmojiFrown } from 'react-icons/bs';
import { getWithAxios, postWithAxios } from '../../api/axios';
import { progressions } from '../../api/const';
import GladiatorInfos from '../../partials/gladiator';
import PJCard from '../../partials/pjCard';
import { UserContext } from '../../userContext';


const Dashboard = () => {


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

  




    return(
        <div className='overflow-y-scroll h-full bg-yellow-400/25'>
        

                <div className='px-12'>
                    <p className='text-center font-bold text-2xl mb-12 bg-red-500 py-4 text-white'>Progressions du jour</p>

                    <div className='mb-6 bg-white/25 py-3'>
                        <p className='text-center font-bold text-lg mb-2'>Course de char</p>
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

                    <div className='mb-6 bg-white/25 py-3'>
                        <p className='text-center font-bold text-lg mb-2'>Lutte</p>
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

                    <div className='mb-6 bg-white/25 py-3'>
                        <p className='text-center font-bold text-lg mb-2'>Athlétisme</p>
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