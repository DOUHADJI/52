import { Avatar, Card, Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { getWithAxios, postWithAxios } from "../../api/axios";
import Layout from "../Layout/layout";
import { BiBuildingHouse } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Ludis = () => {
    const [ludis, setLudis] = useState([]);
    const [errors, setErrors] = useState();
    const navigate = useNavigate();

    const getLudis = async () => {
        const res = await getWithAxios("/get_user_ludis");
        console.log(res);
        res.ludis ? setLudis(res.ludis) : setErrors(res.errors);
    };

    const getLudiDetails = (ludiName, ludiSpecialite, ludiId) => {
        navigate(
            "/backoffice/ludis/" +
                ludiId +
                "/" +
                ludiName +
                "/" +
                ludiSpecialite
        );
    };

    useEffect(() => {
        getLudis();
    }, []);

    return (
        <div className="flex flex-col justify-center items-center h-full py-12">
            <div className="bg-red-500 text-white py-4 text-center text-xl font-bold w-full">liste de vos écoles de gladiateurs</div>
            <table className="table table-striped table-light">
           
                <tbody>
                    {ludis.map((ludi, index) => (
                        <Ludi key={index} ludi={ludi} getLudiDetails={getLudiDetails} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Ludis;

const Ludi = ({ ludi, getLudiDetails }) => {
    return (
        <tr>
            <td >{ludi.nom}</td>
            <td> specialité enseigné : {ludi.specialite}</td>
            <td>
                <button
                    onClick={() =>
                        getLudiDetails(ludi.nom, ludi.specialite, ludi.id)
                    }
                    className="btn btn-primary"
                >
                    voir
                </button>
            </td>
        </tr>
    );
};
