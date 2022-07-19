import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "./Menu";

const Main = () => {
    return (
        <>
            <Menu
                navigates={[
                    {
                        title: "Home",
                        to: "/home",
                        icon: <ion-icon name="home"></ion-icon>,
                    },
                    {
                        title: "Search",
                        to: "/search",
                        icon: <ion-icon name="search"></ion-icon>,
                    },
                    {
                        title: "User",
                        to: "/user",
                        icon: <ion-icon name="person-sharp"></ion-icon>,
                    },
                ]}
            />
            <Outlet></Outlet>
        </>
    );
};

export default Main;
