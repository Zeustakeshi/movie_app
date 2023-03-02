import React, { useContext, useState } from "react";
import {
    AuthProviderProps,
    IAuthContext,
} from "../interfaces/AuthProvider.interface";

const AuthContext = React.createContext<IAuthContext | null>(null);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [userInfo, setUserInfo] = useState({});
    const values = { userInfo, setUserInfo };
    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);
    if (typeof context === "undefined")
        throw new Error("useAuth must be used within AuthProvider");
    return context;
};

export { useAuth, AuthProvider };
