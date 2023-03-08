import { Link } from "@nextui-org/react"
import { useLocation } from "react-router-dom"


const SideBarBtn = ({label, url}) => {
    const location = useLocation()
    const path = location.pathname

    

    return(
       <Link href={url}>
        {
            url == path ?

            <p className="text-black font-black text-start">
            {label}
            </p>

            :

            <p className="text-gray-500 font-black text-md text-start">
            {label}
            </p>
        }
       </Link> 
    )
}

export default SideBarBtn