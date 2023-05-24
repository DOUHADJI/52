import React, { useContext, useEffect, useRef } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { getWithAxios, postWithAxios } from "../../api/axios";
import { progressions } from "../../api/const";
import { UserContext, UserContextProvider } from "../../userContext";
import SideBar from "./partials/sideBar";
import AppWrapper from "../../appWrapper";
import TopBar from "./partials/topBar.jsx";

const Layout = ({ children }) => {
    
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
                        <TopBar />
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
