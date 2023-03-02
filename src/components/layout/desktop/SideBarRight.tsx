import React from "react";
import Popular from "../../popular/Popular";
import Watchlists from "../../watchlists/watchlists";

const SideBarRight = () => {
    return (
        <div className={` text-white font-bold page-side-bar top-0 right-0`}>
            <Popular />
            <Watchlists />
        </div>
    );
};

export default SideBarRight;
