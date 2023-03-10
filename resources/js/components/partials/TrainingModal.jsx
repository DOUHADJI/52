import { Modal, Avatar, Button, Progress } from "@nextui-org/react"
import { useState } from "react"
import {BsFillCheckCircleFill, BsFillPersonFill} from 'react-icons/bs'
import { toast } from "react-toastify"
import { avatars } from "../api/avatars"
import { putWithAxios } from "../api/axios"
import { entrainements } from "../api/const"
import TrainingSelection from "./trainingSelection"

const TrainingModal = ({open, setOpen, nom, avatarIndex, id}) => {

    const [isTrainingVisibility, setIsTrainingVisibility] = useState(false)
    const [errors, setErrors] = useState()
    const [progressValue, setProgressValue] = useState(0)
    const [training, setTraining] = useState(null)

    

  

    const handleClose = () => {
        setOpen(false)
    }

    const notifySuccess = () => {
       toast('Entrainement effectué avec success',{
        type:'success',
        hideProgressBar:true
       })
    }

    const handleSuccess = () => {
        notifySuccess()
        window.location.reload(true)
    }

    const updateGladiatorProgression = async () => {
        const data ={
            id : id,
            entrainement : training
        }

        const res = await putWithAxios('/update_gladiator_progression', data)
        res.errors? setErrors(res.errors) : handleSuccess()

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
                    <Avatar src={avatars[avatarIndex]?.avatar} size={"xl"}   />
                </div>

                <TrainingSelection
                    label={'Entrainer ' +nom}
                    training={training}
                    setTraining={setTraining}
                    options={entrainements}
                    error={errors?.entrainement}


                />

                <Button onPress={updateGladiatorProgression}>
                    Valider
                </Button>

                <div hidden={!isTrainingVisibility}>
                    <p className="text-[#8F3A3A] text-lg font-bold text-center mb-8">
                        {training}
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