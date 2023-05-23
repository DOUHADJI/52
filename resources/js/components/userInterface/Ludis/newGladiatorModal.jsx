import { Button, Input, Modal } from "@nextui-org/react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { avatars } from "../../api/avatars"
import { postWithAxios } from "../../api/axios"
import AvatarSelection from "../../partials/avatarSelection"

const NewGladiatorModal = ({newAvatarModalIsVisible,setNewAvatarModalIsVisible,ludiName, ludiId}) => {

    const [nom, setNom] =useState()
    const [avatarIndex, setAvatarIndex] = useState()
    const [errors, setErrors] = useState()
    const navigate = useNavigate()

   
    const getName = (e) => {
        const value = e.target.value
        setNom(value)
    }

    const updateSuccessfull = (ludi) => {
       toast("Gladiateur créé avec success", {
        type:"success",
        hideProgressBar:true
       })
       setNewAvatarModalIsVisible(false)
       navigate('/backoffice/ludis/' + ludi.id + '/' + ludi.nom + '/' + ludi.specialite)
        window.location.reload(true)
        
    }

    const handleCreation = async ( ) =>{
        const data = {
            nom : nom,
            avatar : avatarIndex,
            ludiName: ludiName,
            ludiId: ludiId
        }

    
       

        const res = await postWithAxios('/create_gladiateur', data)

        res.errors?setErrors(res.errors) : updateSuccessfull(res.ludi)

       
    }



    return(
        <Modal 
            open={newAvatarModalIsVisible}
            preventClose
            closeButton
            onClose={() => setNewAvatarModalIsVisible(false)}
           
        >
            <Modal.Body>
                <div className="grid gap-6 justify-center items-center h-full">
                <p className="text-xl font-bold mb-2">Créer un nouvel avatar</p>
                <p className="font-light mb-2 text-red-600 text-center">{errors?.message}</p>
                    <div >
                        <p className="font-bold mb-2">Nom de l'avatar</p>
                        <Input
                            aria-label="Nom du nouvel avatar"
                            placeholder={"nom de l'avatar"}
                            size="xl"
                            className="w-full w-[20px]"
                            css={{ width:"300px",height:"60px" }}
                            onChange={getName}

                        />
                        <p className="font-light mb-2 text-red-600">{errors?.nom}</p>
                    </div>

                    <AvatarSelection
                        label={"Avatars de gladiateur"} 
                        setAvatarIndex={setAvatarIndex} 
                        avatarIndex={avatarIndex}
                        options={avatars}
                        error={errors?.avatar}
                    />
                    
                    <div className="flex justify-end">
                        <Button onPress={handleCreation}>
                            Enregister
                        </Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default NewGladiatorModal