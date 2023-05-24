import { useContext, useEffect, useRef } from "react";
import { UserContext } from "../../../userContext";
import { BsPerson } from "react-icons/bs";

const TopBar = () => {
    const { user, setUser } = useContext(UserContext);
    const date = new Date();
    const currentDate = date.toLocaleDateString();
    return (
        <div className="flex justify-between pr-12 items-center  bg-gray-100 border-b-4 border-yellow-600 drop-shadow-lg py-8 h-[10vh]">
            <div className="flex px-8 gap-8 justify-end">
                <p className="font-bold text-yellow-600">
                    Date : {currentDate}
                </p>

                <p className="font-bold text-yellow-600">
                    Heure : <Clock />
                </p>
            </div>
            <div>
                <p className="flex gap-6 font-bold text-yellow-600 px-8">
                    <BsPerson className="text-2xl" />
                    {user?.nom}
                </p>
            </div>
        </div>
    );
};

export default TopBar;

const Clock = () => {
    const clockRef = useRef(null);

    function timeCount() {
        var today = new Date();

        var hour = today.getHours();
        if (hour < 10) hour = "0" + hour;

        var minute = today.getMinutes();
        if (minute < 10) minute = "0" + minute;

        var second = today.getSeconds();
        if (second < 10) second = "0" + second;

        //  clock = document.getElementById("clock");

        if (clockRef) {
            clockRef.current.innerHTML = hour + ":" + minute + ":" + second;
        }

        setTimeout(() => timeCount(), 1000);
    }

    useEffect(() => {
        timeCount();
    }, []);

    return <span ref={clockRef} id="clock"></span>;
};
