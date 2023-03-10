import { Card } from "@nextui-org/react"
import { useEffect, useState } from "react"
import { getWithAxios, postWithAxios } from "../../api/axios"
import Layout from "../Layout/layout"
import { BiBuildingHouse } from 'react-icons/bi'
import { useNavigate } from "react-router-dom"

const Ludis = () => {
    const [ludis, setLudis] = useState([])
    const [errors, setErrors] = useState()
    const navigate = useNavigate()

    const getLudis = async () => {
        const res = await getWithAxios('/get_user_ludis')
        console.log(res)
        res.ludis ? setLudis(res.ludis) : setErrors(res.errors)
    }

    const getLudiDetails = (ludiName, ludiSpecialite, ludiId) => {
        
        navigate('/backoffice/ludis/'+ludiId+'/'+ludiName+'/'+ludiSpecialite)
    }

    useEffect(()=>{
        getLudis()
    },[])

    return(
        <div className="grid sm:grid-cols-2 justify-center items-center p-8 w-2/3">
                {ludis.map((e,index) => 
                    <Card 
                        key={index} 
                        isPressable 
                        isHoverable
                        css={{ background: "#F6F2F2" }}
                        onClick={() =>getLudiDetails(e.nom, e.specialite, e.id)}
                    >
                    <Card.Body>
                        <div>
                            <div className="flex justify-center w-full text-[100px] mb-8 text-[#BF7B2A]">
                                <BiBuildingHouse />
                            </div>
                            <p className="text-center text-lg text-[#BF7B2A] font-bold ">
                                Ecole de gladiateurs : {e.nom}
                            </p>
                        </div>
                    </Card.Body>
                </Card>)}
            </div>
    )
}

export default Ludis