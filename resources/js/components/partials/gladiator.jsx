import { Avatar, Button, Card } from "@nextui-org/react";
import { useState } from "react";
import { BsPen, BsPencil } from "react-icons/bs";
import { avatars } from "../api/avatars";
import TrainingModal from "./trainingModal";
import { FcMinus, FcSportsMode } from "react-icons/fc";
import { FaDoorOpen } from "react-icons/fa";
import GladiatorBtn from "./gladiatorBtn";

const Gladiator = ({
    nom,
    avatarIndex,
    adresse,
    force,
    equilibre,
    vitesse,
    strategie,
    id,
}) => {
    const i = +avatarIndex;

    const [open, setOpen] = useState(false);

    const openTrainingModal = () => {
        setOpen(true);
    };

    const handleOutFromLudi = () => {};

    const buttons = [
        {
            tooltip_Text: "entrainer",
            icon: <FcSportsMode className="text-2xl" />,
            onPress: openTrainingModal,
        },

        {
            tooltip_Text: "remercier",
            icon: <FcMinus className="text-2xl" />,
            color : "error",
            onPress: openTrainingModal,
        },
    ];

    return (
        <>
            <tr className="w-[150px]">
                <td>
                    <div className="flex gap-12 items-center justify-center ">
                        <Avatar src={avatars[i]?.avatar} size={"xl"} />
                        <p className="font-bold text-lg">{nom}</p>
                    </div>
                </td>

                <td>
                    <div className="flex flex-wrap gap-8 items-center">
                        <div className="py-1">
                            <p className="font-medium">
                                Adresse :{" "}
                                <span className="font-bold text-[#BDB835]">
                                    {adresse}
                                </span>
                            </p>
                        </div>

                        <div className="py-1">
                            <p className="font-medium">
                                Force :{" "}
                                <span className="font-bold text-[#BDB835]">
                                    {force}
                                </span>
                            </p>
                        </div>

                        <div className="py-1">
                            <p className="font-medium">
                                Equilibre :{" "}
                                <span className="font-bold text-[#BDB835]">
                                    {equilibre}
                                </span>
                            </p>
                        </div>

                        <div className="py-1">
                            <p className="font-medium">
                                Vitesse :{" "}
                                <span className="font-bold text-[#BDB835]">
                                    {vitesse}
                                </span>
                            </p>
                        </div>

                        <div className="py-1">
                            <p className="font-medium">
                                Stratégie :{" "}
                                <span className="font-bold text-[#BDB835]">
                                    {strategie}
                                </span>
                            </p>
                        </div>
                    </div>
                </td>

                <td>
                    <div className=" flex flex-wrap justify-end gap-4 ">
                        {buttons?.map((e, index) => (
                            <GladiatorBtn
                                key={index}
                                tooltip_text={e.tooltip_Text}
                                icon={e.icon}
                                color={e.color}
                                onPress={e.onPress}
                            />
                        ))}
                    </div>
                </td>
            </tr>
            <TrainingModal
                open={open}
                setOpen={setOpen}
                nom={nom}
                avatarIndex={i}
                id={id}
            />
        </>
    );
};

export default Gladiator;
