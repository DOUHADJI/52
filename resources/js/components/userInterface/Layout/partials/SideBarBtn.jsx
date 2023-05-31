import { Link } from "@nextui-org/react"
import { useLocation } from "react-router-dom"


const SideBarBtn = ({label, url}) => {
    const location = useLocation()
    const path = location.pathname

    

    return(
       <Link href={url}>
        {
            url == path ?

            <p className="text-gray-200 font-black text-start text-lg">
            {label}
            </p>

            :

            <p className="text-yellow-600/50 font-black text-md text-start text-lg">
            {label}
            </p>
        }
       </Link> 
    )
}

export default SideBarBtn