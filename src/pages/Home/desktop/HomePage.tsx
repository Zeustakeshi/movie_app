import React from "react";
import HomeContent from "./HomeContent";
import SideBarRight from "../../../components/layout/desktop/SideBarRight";

const Home = () => {
    return (
        <div className="page-container">
            <HomeContent />
            <SideBarRight />
        </div>
    );
};

export default Home;
