import React from "react";
import { Outlet } from "react-router-dom";
import { INavigates } from "../../../interfaces/MenuProps.interface";
import Menu from "./Menu";

const navigates: INavigates[] = [
    {
        title: "Home",
        to: "/home",
        iconName: "home",
    },
    {
        title: "Search",
        to: "/search",
        iconName: "search",
    },
    {
        title: "User",
        to: "/user",
        iconName: "person-sharp",
    },
];

const Main = () => {
    return (
        <>
            <Menu navigates={navigates} />
            <Outlet></Outlet>
        </>
    );
};

export default Main;
