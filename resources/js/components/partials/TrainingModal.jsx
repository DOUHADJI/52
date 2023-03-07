import { Modal, Avatar, Button, Progress } from "@nextui-org/react"
import { useState } from "react"
import {BsFillCheckCircleFill, BsFillPersonFill} from 'react-icons/bs'

const TrainingModal = ({open, setOpen, nom}) => {

    const [chooseTrainingVisibility, setChooseTrainingVisibility] = useState(true)
    const [isTrainingVisibility, setIsTrainingVisibility] = useState(false)
    const [isTrainingFinish, setIsTrainingFinish] = useState(false)
    const [progressValue, setProgressValue] = useState(0)

    const [choosenTraining, setChoosenTraining] = useState(null)

    const handleChoosenTraining = (training) => {
        setChoosenTraining(training)
        setChooseTrainingVisibility(false)
        setIsTrainingVisibility(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleProgress = () => {
        setProgressValue(0)
        setInterval(() => setProgressValue(progressValue+100), 1000)
        setTimeout(()=> setIsTrainingFinish(true), 1000)
    }
    return (
        <Modal 
            open={open} 
            preventClose
            closeButton
            onClose={handleClose}
        >
            <Modal.Body>
                <div className="flex gap-12 items-center justify-center">
                    <Avatar icon={ <BsFillPersonFill size={"lg"}  /> } size={"xl"}   />
                    <p className="font-bold text-lg">
                        {nom}
                    </p>
                </div>
                <div hidden={!chooseTrainingVisibility}>
                  
                    <div className="flex flex-wrap justify-center gap-6 mt-6">
                        <Button 
                            auto 
                            size={"xl"} 
                            css={{ background:"#542188" }}
                            onPress={()=>{
                                handleChoosenTraining("Entrainement physique")
                                handleProgress()
                            }}
                        >
                            <p className="text-sm font-bold text-start">
                                Entrainement <br /> physqiue
                            </p>
                        </Button>

                        <Button 
                            auto 
                            size={"xl"} 
                            css={{ background:"#7674CB" }}
                            onPress={()=>{
                                handleChoosenTraining("Entrainement tactique")
                                handleProgress()
                            }}
                        >
                            <p className="text-sm font-bold text-start">
                                Entrainement <br /> tactique
                            </p>
                        </Button>

                        <Button 
                            auto 
                            size={"xl"} 
                            css={{ background:"#E489AF" }}
                            onPress={()=>{
                                handleChoosenTraining("Entrainement combiné")
                                handleProgress()
                            }}
                        >
                            <p className="text-sm font-bold text-start">
                                Entrainement <br /> combiné
                            </p>
                        </Button>
                        
                    </div>
                </div>

                <div hidden={!isTrainingVisibility}>
                    <p className="text-[#8F3A3A] text-lg font-bold text-center mb-8">
                        {choosenTraining}
                    </p>

                    <Progress squared size={"sm"}  value={progressValue} color="success"  />

                    <div className="flex  items-center justify-center gap-3 text-xl font-bold text-[#066804] mt-4 ">
                        <p>
                            Status : terminé
                        </p>
                        <BsFillCheckCircleFill className="text-4xl" />
                    </div>

                </div>
            </Modal.Body>
        </Modal>
    )
}

export default TrainingModal