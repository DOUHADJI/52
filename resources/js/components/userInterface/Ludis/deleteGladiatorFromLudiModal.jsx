import { Modal } from "@nextui-org/react";
import { useState } from "react";

const DeleteGladiatorFromLudiModal = ({
    open,
    setOpen,
    nom,
    avatarIndex,
    id,
}) => {
    const [visibility, setVisibility] = useState(false);

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
        notifySuccess();
        window.location.reload(true);
    };

    const deleteGladiator = async () => {
        const data = {
            id: id,
        };

      //  const res = await putWithAxios("/update_gladiator_progression", data);
      //  res.errors ? setErrors(res.errors) : handleSuccess();
    };


    return (
        <Modal>
            <Modal.Body></Modal.Body>
        </Modal>
    );
};
