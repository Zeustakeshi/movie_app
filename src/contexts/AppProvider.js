import React, { createContext, useContext, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";

const AppContext = createContext();

const AppProvider = (props) => {
    const [watchLists, setWatchLists] = useState([]);
    const [popularList, setPopularList] = useState([]);
    const [language, setLanguage] = useState("en-US");

    const windowSize = useWindowSize();
    const isMobile = windowSize.width < 840;

    const value = {
        isMobile,
        watchLists,
        popularList,
        language,
        setWatchLists,
        setPopoularList: setPopularList,
        setLanguage,
    };

    return <AppContext.Provider value={value} {...props}></AppContext.Provider>;
};

const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context)
        throw new Error("useAppContext must be used within AppProvider");

    return context;
};

export { AppProvider, useAppContext };
