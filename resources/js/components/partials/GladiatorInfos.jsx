import { Avatar, Card } from "@nextui-org/react"
import {BsFillPersonFill} from 'react-icons/bs'
import img from '../../../../public/img/avatar.png'

const GladiatorInfos = ({nom, talents}) => {
    return (
        <Card  className="w-[150px] ">
            <Card.Body css={{ background:"#F6F2F2" }}>
        <div className="bg-[#F6F2F2] rounded-[15px] text-black p-8 ">
            <div className="flex gap-12 items-center">
               <Avatar src={img} size={"xl"} /> 
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
            </Card.Body>
        </Card>
    )
}

export default GladiatorInfos