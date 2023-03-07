import { Avatar, Card } from "@nextui-org/react"

const PJCard = ({cardHexColorIndex, typeEntrainement, valeur}) => {

    const cardHexColor = [
        "bg-[#542188]",
        "bg-[#7674CB]",
        "bg-[#E489AF]"


    ]

    return(
        <Card >
            <Card.Body className={cardHexColor[cardHexColorIndex]}>
                <div className="flex items-center justify-between px-4">
                    <p className="text-white font-black"> 
                    Entrainement <br /> 
                    {typeEntrainement}
                    </p>
                    <Avatar squared icon={<span className="text-sm">{valeur}</span>} className="font-bold" />
                </div>
            </Card.Body>
               
        </Card>
    )
}

export default PJCard