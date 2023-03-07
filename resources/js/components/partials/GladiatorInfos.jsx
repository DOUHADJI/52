import { Avatar } from "@nextui-org/react"
import {BsFillPersonFill} from 'react-icons/bs'

const GladiatorInfos = ({nom, talents}) => {
    return (
        <div className="bg-[#F6F2F2] rounded-[15px] text-black p-8">
            <div className="flex gap-12 items-center">
               <Avatar icon={ <BsFillPersonFill size={"lg"}  /> } size={"xl"}   />
                <p className="font-bold text-lg">
                    {nom}
                </p>
            </div>

            <div className="grid grid-cols-2 w-full mt-8">
               {talents.map((talent,index) =>  <div key={index} className="px-4 py-1">
                    <p className="font-medium">
                        {talent.nom} : {' '}
                        <span className="font-bold text-[#BDB835]">{talent.valeur}</span>
                     </p>
                    
                </div>)}
            </div>

        </div>
    )
}

export default GladiatorInfos