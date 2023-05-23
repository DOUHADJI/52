import { Button, Input, Modal } from "@nextui-org/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { postWithAxios, putWithAxios } from "../../api/axios";
import { specialites } from "../../api/const";
import Selection from "../../partials/selection";

const UpdateLudiModal = ({
    updateLudiModalIsVisible,
    setUpdateLudiModalIsVisible,
    ludiName,
    id,
}) => {
    const [nom, setNom] = useState(ludiName);
    const [specialite, setSpecialite] = useState();
    const [errors, setErrors] = useState();
    const navigate = useNavigate();

    const getName = (e) => {
        const value = e.target.value;
        setNom(value);
    };

    const updateSuccessfull = (ludi) => {
        toast("Les informations de l'école ont été modifiée avec success", {
            type: "success",
            hideProgressBar: true,
        });
        setUpdateLudiModalIsVisible(false);
        navigate('/backoffice/ludis/' + ludi.id + '/' + ludi.nom + '/' + ludi.specialite)
        window.location.reload(true);
    };

    const handleUpdate = async () => {
        const data = {
            nom: nom,
            specialite: specialite,
            ludiName: ludiName,
            id: id,
        };

        const res = await putWithAxios("/update_ludi", data);

        res.errors ? setErrors(res.errors) : updateSuccessfull(res.ludi);
    };

    return (
        <Modal
            open={updateLudiModalIsVisible}
            preventClose
            closeButton
            onClose={() => setUpdateLudiModalIsVisible(false)}
            css={{ width: "fit-content !important" }}
            className="px-12"
        >
            <Modal.Body>
                <div className="grid gap-6 justify-center items-center h-full">
                    <p className="text-xl font-bold mb-2">
                        Ecole de gladiateurs: {ludiName}
                    </p>
                    <p className="font-light mb-2 text-red-600 text-center">
                        {errors?.message}
                    </p>
                    <div>
                        <p className="font-bold mb-2">
                            Modifier le nom de l'école
                        </p>
                        <Input
                            aria-label="Modifier le nom de l'école"
                            placeholder={ludiName}
                            size="xl"
                            className="w-full "
                            css={{ width: "300px", height: "60px" }}
                            onChange={getName}
                        />
                        <p className="font-light mb-2 text-red-600">
                            {errors?.nom}
                        </p>
                    </div>

                    <Selection
                        label={"Spécialité de l'école"}
                        setSpecialite={setSpecialite}
                        specialite={specialite}
                        options={specialites}
                        error={errors?.specialite}
                       
                    />

                    <Button onPress={handleUpdate}>Enregister</Button>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default UpdateLudiModal;
