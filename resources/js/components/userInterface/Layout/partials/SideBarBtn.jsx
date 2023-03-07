import { Link } from "@nextui-org/react"


const SideBarBtn = ({label, url}) => {
    return(
       <Link href={url}>
        <p className="text-black text-md font-black text-start">
        {label}
       </p>
       </Link> 
    )
}

export default SideBarBtn