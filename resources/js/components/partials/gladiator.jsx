import { Avatar, Button, Card } from "@nextui-org/react"
import { useState } from "react"
import { BsPen, BsPencil } from "react-icons/bs"
import { avatars } from "../api/avatars"
import TrainingModal from "./trainingModal"
import {FcSportsMode} from 'react-icons/fc'
import {FaDoorOpen} from 'react-icons/fa'
import GladiatorBtn from "./gladiatorBtn"


const Gladiator = ({
    nom, 
    avatarIndex,
    adresse,
    force,
    equilibre,
    vitesse,
    strategie,
    id
}) => {

    const i = +avatarIndex

   

    const [open, setOpen] = useState(false)

    const openTrainingModal = () => {
        setOpen(true)
    }

    const handleOutFromLudi =() => {

    }

    const buttons = [

        {
            tooltip_Text : "entrainer",
            icon : <FcSportsMode className="text-2xl" />,
            onPress: openTrainingModal
        }
    ]

    return (
        <>
            <Card  className="w-[150px]">
                <Card.Body css={{ background:"#F6F2F2" }}>
            <div className="bg-[#F6F2F2] rounded-[15px] text-black px-6 py-3">
                <div className="flex gap-12 items-center">
                <Avatar src={avatars[i]?.avatar} size={"xl"} /> 
                    <p className="font-bold text-lg">
                        {nom}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full mt-8">
                    <div  className="py-1">
                        <p className="font-medium">
                            Adresse : {' '}
                            <span className="font-bold text-[#BDB835]">{adresse}</span>
                        </p>
                        
                    </div>

                    <div  className="py-1">
                        <p className="font-medium">
                            Force : {' '}
                            <span className="font-bold text-[#BDB835]">{force}</span>
                        </p>
                        
                    </div>

                    <div  className="py-1">
                        <p className="font-medium">
                            Equilibre : {' '}
                            <span className="font-bold text-[#BDB835]">{equilibre}</span>
                        </p>
                        
                    </div>

                    <div  className="py-1">
                        <p className="font-medium">
                            Vitesse : {' '}
                            <span className="font-bold text-[#BDB835]">{vitesse}</span>
                        </p>
                        
                    </div>

                    <div  className="py-1">
                        <p className="font-medium">
                            Stratégie : {' '}
                            <span className="font-bold text-[#BDB835]">{strategie}</span>
                        </p>
                        
                    </div>

                </div>

                <div className=" flex flex-wrap justify-end gap-4 mt-3 ">
                       {buttons?.map((e,index) => 
                        <GladiatorBtn 
                            key={index}
                            tooltip_text={e.tooltip_Text}
                            icon={e.icon}
                            onPress={e.onPress}
                            
                        />)}
                </div>
            
            </div>
                </Card.Body>
            </Card>
            <TrainingModal open={open} setOpen={setOpen} nom={nom} avatarIndex={i} id={id} />
        </>
    )
}

export default Gladiator