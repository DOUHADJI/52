import React, { useContext, useEffect, useRef } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { getWithAxios, postWithAxios } from "../../api/axios";
import { progressions } from "../../api/const";
import { UserContext, UserContextProvider } from "../../userContext";
import SideBar from "./partials/sideBar";
import AppWrapper from "../../appWrapper";

const Layout = ({ children }) => {
    const date = new Date();
    const currentDate = date.toLocaleDateString();
    const navigate = useNavigate();

    const redirectToLogin = async () => {
        const res = await getWithAxios("/user");

        res.user ? null : navigate("/sign_in");
    };

    useEffect(() => {
        redirectToLogin();
    }, []);

    return (
        <AppWrapper>
            <UserContextProvider>
                <div className="flex w-screen h-screen overflow-x-hidden ">
                    <ToastContainer />
                    <SideBar />
                    <div className=" w-full text-md border-l-4 border-yellow-600">
                        <div className="flex justify-between pr-12 items-center  bg-gray-100 border-b-4 border-yellow-600 drop-shadow-lg py-8 h-[10vh]">
                            <div>
                                <p className="font-bold text-yellow-600 px-8"></p>
                            </div>
                            <div className="flex gap-8 justify-end">
                                <p className="font-bold text-yellow-600">
                                    Date : {currentDate}
                                </p>

                                <p className="font-bold text-yellow-600">
                                    Heure : <Clock />
                                </p>
                            </div>
                        </div>

                        <div className="px-8 py-12 h-[90vh] bg-themeBlueBlack drop-shadow-lg overflow-hidden">
                            <div className="h-full">
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>
            </UserContextProvider>
        </AppWrapper>
    );
};

export default Layout;

const Clock = () => {
    const clockRef = useRef(null)
    
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
