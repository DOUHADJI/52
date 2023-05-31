import React, { useEffect, useState } from "react";
import GladiatorInfos from "../../partials/gladiator";
import { Button } from "@nextui-org/react";
import { useNavigate, useParams } from "react-router-dom";
import { postWithAxios } from "../../api/axios";
import { BsEmojiFrown } from "react-icons/bs";
import UpdateLudiModal from "./updateLudiModal";
import NewGladiatorModal from "./newGladiatorModal";

const Ludi = () => {
    const params = useParams();
    const { ludiName, ludiSpecialite, ludiId } = params;
    const navigate = useNavigate()

    const [gladiateurs, setGladiateurs] = useState();
    const [checking, setChecking] = useState(true);

    const [updateLudiModalIsVisible, setUpdateLudiModalIsVisible] =
        useState(false);
    const [newAvatarModalIsVisible, setNewAvatarModalIsVisible] =
        useState(false);

    const handleUpdateLudiModalVisibility = () => {
        setUpdateLudiModalIsVisible(true);
    };

    const handleNewAvatarModalVisibility = () => {
        setNewAvatarModalIsVisible(true);
    };

    const getGladiatorsOfTheLudi = async () => {
        const data = {
            ludiName: ludiName,
            ludiId: ludiId,
        };
        const res = await postWithAxios("/get_ludi_gladiators", data);

        setGladiateurs(res.gladiateurs);
        setChecking(false)
    };


    const handleRecruitment = () => {
        navigate(`/backoffice/ludis/${ludiName}/recruiter`)
    }

    useEffect(() => {
        getGladiatorsOfTheLudi();
    }, []);

    return (
        <div className=" flex flex-col justify-between h-full  pt-8 px-4 bg-white/25">
            
            <div className="grid md:grid-cols-3 py-4 px-12 font-black text-white  bg-red-600 ">
                <p className="w-full">Spécialité : {ludiSpecialite}</p>
                <p className="text-center text-white font-black text-lg underline">
                    Ecole de gladiateur : {ludiName}
                </p>
                <p className="text-end">
                    <span className="text-2xl  w-full">
                        {gladiateurs?.length}
                    </span>
                    /10 gladiateurs
                </p>
            </div>

            <div className="px-6 w-full h-2/3 mt-4 py-4 bg-gray-100 overflow-y-scroll">
                <table className="w-full table table-border table-striped ">
                    <tbody>
                        {gladiateurs?.length > 0 ? (
                            gladiateurs.map((g, index) => (
                                <GladiatorInfos
                                    key={index}
                                    nom={g.nom}
                                    adresse={g.adresse}
                                    force={g.force}
                                    equilibre={g.equilibre}
                                    vitesse={g.vitesse}
                                    strategie={g.strategie}
                                    avatarIndex={g.avatar}
                                    id={g.id}
                                    recrutableStatus={g.recrutable}
                                />
                            ))
                        ) : (
                            <p >
                                {checking ? <div>
                                    checking ...
                                </div> : <div className="flex items-center gap-2 text-lg w-full">
                                <span>
                                    Vous n'avez aucun gladiateur dans votre école
                                </span>
                                <span>
                                    <BsEmojiFrown className="text-3xl" />
                                </span>
                                    </div>}
                               
                            </p>
                        )}
                    </tbody>
                </table>
            </div>

            <div className=" grid lg:grid-cols-3  mt-4 px-6 gap-4 pb-4">
                <Button
                    auto
                    color={"error"}
                    size="lg"
                    flat
                    onPress={handleUpdateLudiModalVisibility}
                >
                    <span className="font-bold ">
                        Modifier les information de l'école
                    </span>
                </Button>

                <Button
                    auto
                    color={"primary"}
                    size="lg"
                    onPress={handleNewAvatarModalVisibility}
                >
                    <span className="font-bold">Créer un gladiateur</span>
                </Button>

                <Button auto color={"secondary"} size="lg" onClick={handleRecruitment}>
                    <span className="font-bold">Recruter un gladiateur</span>
                </Button>
            </div>

            <UpdateLudiModal
                updateLudiModalIsVisible={updateLudiModalIsVisible}
                setUpdateLudiModalIsVisible={setUpdateLudiModalIsVisible}
                ludiName={ludiName}
                id={ludiId}
            />

            <NewGladiatorModal
                newAvatarModalIsVisible={newAvatarModalIsVisible}
                setNewAvatarModalIsVisible={setNewAvatarModalIsVisible}
                ludiName={ludiName}
                ludiId={ludiId}
            />
        </div>
    );
};

export default Ludi;
