import React from "react";
import Menu from "./Menu";
import { Outlet } from "react-router-dom";
import { INavigates } from "../../../interfaces/MenuProps.interface";

const navigates: INavigates[] = [
    {
        title: "Search",
        to: "/search",
        iconName: "search",
    },
    {
        title: "Home",
        to: "/home",
        iconName: "home",
    },

    {
        title: "User",
        to: "/user",
        iconName: "person-sharp",
    },
];

const MainMobile = () => {
    return (
        <>
            <Menu navigates={navigates} />
            <div className="mb-[80px] w-[100vw] h-full">
                <Outlet></Outlet>
            </div>
        </>
    );
};

export default MainMobile;
