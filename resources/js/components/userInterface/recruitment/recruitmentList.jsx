import { useEffect, useState } from "react";
import { getWithAxios } from "../../api/axios";
import GladiatorInfos from "../../partials/gladiator";

const RecruitmentList = () => {
    const [list, setList] = useState([]);
    const [checking, setChecking] = useState(true);

    const getRecruitablesList = async () => {
        const data = await getWithAxios("/recruitable_gladiators_list");
        // console.log(data)

        if (data.status == "success") {
            setList(data.list);
            setChecking(false);
        }
    };
    useEffect(() => {
        getRecruitablesList();
    }, []);
    return (
        <>
            <div className="grid md:grid-cols-3 py-4 px-12 font-black text-white  bg-red-600 ">
                <p className="text-center text-white font-black text-lg underline">
                    Liste des gladiateurs recruitables
                </p>
            </div>

            <div className="px-6 w-full h-2/3 mt-4 py-4 bg-gray-100 overflow-y-scroll">
                <table className="w-full table table-border table-striped ">
                    <tbody>
                        {list?.length > 0 ? (
                            list.map((g, index) => (
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
                            <p>
                                {checking ? (
                                    <div>checking ...</div>
                                ) : (
                                    <div className="flex items-center gap-2 text-lg w-full">
                                        <span>
                                            Vous n'avez aucun gladiateur dans
                                            votre école
                                        </span>
                                        <span>
                                            <BsEmojiFrown className="text-3xl" />
                                        </span>
                                    </div>
                                )}
                            </p>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default RecruitmentList;
