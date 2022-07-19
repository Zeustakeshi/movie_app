import React from "react";
import Menu from "./Menu";
import { Outlet } from "react-router-dom";

const MainMobile = () => {
    return (
        <>
            <Menu
                navigates={[
                    {
                        title: "Search",
                        to: "/search",
                        icon: <ion-icon name="search"></ion-icon>,
                    },
                    {
                        title: "Home",
                        to: "/home",
                        icon: <ion-icon name="home"></ion-icon>,
                    },

                    {
                        title: "User",
                        to: "/user",
                        icon: <ion-icon name="person-sharp"></ion-icon>,
                    },
                ]}
            />
            <div className="mb-[80px] w-[100vw] h-full">
                <Outlet></Outlet>
            </div>
        </>
    );
};

export default MainMobile;
