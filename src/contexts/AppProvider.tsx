import React, { createContext, useContext, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import useLocalStorage from "../hooks/useLocalStorage";
import {
    AppProviderProps,
    IAppcontext,
} from "../interfaces/AppProvider.interface";

const AppContext = createContext<IAppcontext | null>(null);

const AppProvider: React.FC<AppProviderProps> = (props) => {
    const [storedWatchListValue, setStoredWatchListValue] = useLocalStorage(
        "WatchList",
        []
    );
    const [watchLists, setWatchLists] = useState(storedWatchListValue);
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
        setStoredWatchListValue,
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
