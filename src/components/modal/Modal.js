import React from "react";
import { withErrorBoundary } from "react-error-boundary";
import Portal from "../Portal";
import PropTypes from "prop-types";
const Modal = ({ children, className, show, setShow }) => {
    return (
        <Portal>
            {show && (
                <div className="modal fixed inset-0 w-full h-full z-[1000] flex justify-center items-center">
                    <div
                        onClick={() => setShow(false)}
                        className="absolute inset-0 bg-slate-900 opacity-80 w-full h-full"
                    ></div>
                    <div
                        className={`relative  p-3 md:p-5   bg-slate-800 md:min-w-[960px] md:min-h-[540px] w-[100vw] min-h-[200px] ${className} `}
                    >
                        <div
                            onClick={() => setShow(false)}
                            className="absolute top-2 right-2 flex justify-center items-center p-2 hover:text-primary font-body text-slate-500 transition-all text-xl cursor-pointer"
                        >
                            <ion-icon name="close"></ion-icon>
                        </div>
                        {children}
                    </div>
                </div>
            )}
        </Portal>
    );
};

Modal.propTypes = {
    children: PropTypes.object.isRequired,
    show: PropTypes.bool.isRequired,
    setShow: PropTypes.func.isRequired,
    className: PropTypes.string,
};

function FallbackComponent() {
    return (
        <p className="bg-red-50 text-red-500">
            Something went wrong with this component
        </p>
    );
}

export default withErrorBoundary(Modal, {
    FallbackComponent,
});
