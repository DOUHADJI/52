import { Avatar, Button, Modal } from "@nextui-org/react";
import { useState } from "react";
import { avatars } from "../../api/avatars";
import { putWithAxios } from "../../api/axios"
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const RecruitGladiatorModal = ({
    open,
    setOpen,
    nom,
    avatarIndex,
    id,
}) => {
    
    const params = useParams()
    
    const handleClose = () => {
        setOpen(false);
    };

    const notifySuccess = () => {
        toast("Le gladiateur a été recruté dans votre école", {
            type: "success",
            hideProgressBar: true,
        });
    };

    const handleSuccess = () => {
        handleClose()
        notifySuccess();
        window.location.reload(true);
    };

    const recruitGladiator = async () => {

        const data = {
            gladiatorId : id,
            ludiName : params.ludiName
        };

          const res = await putWithAxios("/recruite_gladiator", data);
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
                        Confirmer recruter le gladiateur {nom} à {params.ludiName} ?
                    </p>
                </div>
                <Button onPress={recruitGladiator}>confirmer</Button>
            </Modal.Body>
        </Modal>
    );
};

export default RecruitGladiatorModal;
