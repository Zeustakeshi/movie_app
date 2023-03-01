import { useEffect } from "react";
import { createPortal } from "react-dom";

const createProtalWrapper = () => {
    const element = document.createElement("div");
    element.id = "portal-wrapper";
    return element;
};

const portalWrapper = createProtalWrapper();

const Portal = ({ children }) => {
    useEffect(() => {
        document.body.appendChild(portalWrapper);
    }, []);

    return createPortal(children, portalWrapper);
};

export default Portal;
