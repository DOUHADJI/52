import { Avatar, Button, Modal } from "@nextui-org/react";
import { useState } from "react";
import { avatars } from "../../api/avatars";
import { putWithAxios } from "../../api/axios"
import { toast } from "react-toastify";

const DeleteGladiatorFromLudiModal = ({
    open,
    setOpen,
    nom,
    avatarIndex,
    id,
}) => {
    

    const handleClose = () => {
        setOpen(false);
    };

    const notifySuccess = () => {
        toast("Le gladiateur a été supprimer de votre école", {
            type: "success",
            hideProgressBar: true,
        });
    };

    const handleSuccess = () => {
        handleClose()
        notifySuccess();
        window.location.reload(true);
    };

    const deleteGladiator = async () => {

        const data = {
            gladiatorId : id,
        };

          const res = await putWithAxios("/remove_gladiator_from_ludi", data);
          console.log(res)
          res.errors ? setErrors(res.errors) : handleSuccess();
    };

    return (
        <Modal open={open} preventClose closeButton onClose={handleClose}>
            <Modal.Body>
                <div className="flex gap-12 items-center justify-center">
                    <Avatar src={avatars[avatarIndex]?.avatar} size={"xl"} />
                </div>
                <div className="text-center font-bold">
                    gladiateur <span>{nom}</span>
                </div>

                <div>
                    <p className="text-red-700 font-bold">
                        Confirmer remercier le gladiateur {nom} ? Il ne fera
                        plus partie de votre école{" "}
                    </p>
                </div>
                <Button onPress={deleteGladiator}>confirmer</Button>
            </Modal.Body>
        </Modal>
    );
};

export default DeleteGladiatorFromLudiModal;
