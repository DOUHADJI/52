import { Avatar, Button } from "@nextui-org/react"
import { useState } from "react"
import {BsFillPersonFill} from 'react-icons/bs'
import TrainingModal from "./TrainingModal"

const GladiatorTraining = ({nom, talents}) => {

    const [open, setOpen] = useState(false)

    const openModal = () => {
        setOpen(true)
    }
    return (
        <div className="relative">
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
            <div className=" flex justify-end -mt-5 -mr-5">
                    <Button 
                        auto 
                        color={"secondary"} 
                        size='lg'
                        onPress={openModal}
                    >
                        <span className="font-bold">
                            Entrainer
                        </span>
                    </Button>
                </div>
                <TrainingModal open={open} setOpen={setOpen} nom={nom} />
        </div>
    )
}


export default GladiatorTraining