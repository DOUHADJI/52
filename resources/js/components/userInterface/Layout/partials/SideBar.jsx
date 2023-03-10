import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { getWithAxios } from "../../../api/axios"
import { UserContext } from "../../../userContext"
import SideBarBtn from "./sideBarBtn"


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

        {
            label : 'Entrainement',
            url : "/backoffice/entrainement"

        },

        {
            label : 'Recrutement',
            url : "/backoffice/recrutement"

        },

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
        <div  className=" grid justify-between bg-[#FBF7F7]  rounded-l-[15px] w-[280px] pt-[70px] pb-[50px] px-12">
        <div className="h-full">
            <div className="flex justify-center">
                <p className="font-bold uppercase text-[#4D4A4A]">
                    {user?.nom}
                </p>
            </div>

            <div className="flex flex-col  items-center justify-between bg-[#D9D9D9] mt-[60px] p-3">
                <p className="text-black font-bold underline ">Bourse</p>
                <p className="text-[#BF7B2A] font-bold mt-6 ">
                    <span className="text-2xl">{user?.bourse}</span> deniers
                </p>
            </div>

            <div className="grid justify-end gap-12 mt-[90px] pr-4">
                {buttons.map((b,index) => <SideBarBtn key={index} label={b.label} url={b.url} />)}
            </div>
        </div>

        <div className=" flex items-end mt-[12rem]">
            <button className="bg-[#C08989] w-[137px] h-[41px] text-white font-bold rounded-[15px]" onClick={handleLogout}>
                Déconnexion
            </button>
        </div>
    </div>
    )
}

export default SideBar