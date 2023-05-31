import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { getWithAxios } from "../../../api/axios"
import { UserContext } from "../../../userContext"
import SideBarBtn from "./sideBarBtn"
import { GrMoney } from 'react-icons/gr'


const SideBar = () => {

    
    const navigate = useNavigate()

    const {user, setUser} = useContext(UserContext)
    
    const buttons = [
        {
            label : 'Dashboard',
            url : "/backoffice/accueil"
        },

        {
            label : 'Mes Ludis',
            url : "/backoffice/ludis"

        },

        /* {
            label : 'Recrutement',
            url : "/backoffice/recruiter/liste-de-recruitement"

        }, */

        {
            label : 'Mon compte',
            url : '/backoffice/mon_compte/informations_utilisateur'
        }
    ]

    const handleLogout = async () => {
        const res = await getWithAxios("/sign_out")

      res.errors ? null : setTimeout(()=>navigate('/sign_in'), 1000)
    }

  

    return(
        <div  className=" grid h-screen overflow-y-scroll justify-between bg-themeBlueBlack drop-shadow-lg w-[300px] px-12 py-3">
        <div className="">
            <div className="flex flex-col justify-center">
                <img src="/img/52_logo.png" className="h-32" alt="" />
            </div>

            <div className="flex flex-col  items-center justify-between mt-[60px] ">
                <p className= "flex font-bold underline text-xl text-yellow-400 ">
                    Bourse  
                    </p>
                

                <p className="flex items-end text-yellow-400 font-bold mt-2 ">
                    <span className="text-2xl mr-2">{user?.bourse}</span> deniers
                    
                </p>
            </div>

            <div className="grid justify-end gap-4 mt-8 pr-4">
                {buttons.map((b,index) => <SideBarBtn key={index} label={b.label} url={b.url} />)}
            </div>
        </div>

        <div className=" flex items-end ">
            <button className="bg-[#C08989] w-[137px] h-[41px] text-white font-bold rounded-[15px]" onClick={handleLogout}>
                Déconnexion
            </button>
        </div>
    </div>
    )
}

export default SideBar