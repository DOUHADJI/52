import { useState } from "react"
import { Outlet } from "react-router-dom"
import Layout from "../Layout/Layout"
import Profil from "./Profil"
import UpdateProfil from "./updateProfil"

const Parametres = () => {


    return(
        <div className="flex items-center align-center w-full p-[4vw]">
             <Outlet />
        </div>
    )
}

export default Parametres