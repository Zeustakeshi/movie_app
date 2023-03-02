import { useEffect } from "react";
import { createPortal } from "react-dom";

const createProtalWrapper = () => {
    const element = document.createElement("div");
    element.id = "portal-wrapper";
    return element;
};

const portalWrapper = createProtalWrapper();

interface IPortal {
    children: React.ReactNode;
}

const Portal = ({ children }: IPortal) => {
    useEffect(() => {
        document.body.appendChild(portalWrapper);
    }, []);

    return createPortal(children, portalWrapper);
};

export default Portal;
