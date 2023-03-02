import React from "react";
import { ILayoutAuth } from "../../../interfaces/LayoutAuthProps.interface";

const LayoutAuth: React.FC<ILayoutAuth> = ({ children }) => {
    return <div>{children}</div>;
};

export default LayoutAuth;
