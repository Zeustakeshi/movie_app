import React from "react";
import WatchlistMobile from "../../../components/watchlists/WatchlistMobile";

const UserPage = () => {
    return (
        <div className="flex flex-col gap-8 p-2 w-[100vw] h-full">
            <WatchlistMobile />
        </div>
    );
};

export default UserPage;
