import { Avatar, Card } from "@nextui-org/react";

const PJCard = ({ cardHexColorIndex, typeEntrainement, valeur }) => {
    const cardHexColor = [
        "bg-[#542188]",
        "bg-[#7674CB]",
        "bg-[#E489AF]",
        "bg-[#542188]",
        "bg-[#7674CB]",
        "bg-[#E489AF]",
        "bg-[#542188]",
        "bg-[#7674CB]",
        "bg-[#E489AF]",
    ];

    return (
        <div className="flex gap-4 items-center justify-center">
        
            <div className={cardHexColor[cardHexColorIndex] + " p-3 rounded-full w-28 h-28"}>
                <div className="flex items-center justify-center bg-gray-100 h-full rounded-full">
                <div className="text-2xl font-bold">+ {valeur}</div>
                </div>
            </div>

            <p className="text-yellow-300 pt-4 font-black">
                        Entrainement <br />
                        {typeEntrainement}
                    </p>
        </div>
    );
};

export default PJCard;
