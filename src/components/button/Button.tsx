import React from "react";
import PropTypes from "prop-types";
import { IButtonProps } from "../../interfaces/ButtonProps.interface";

const Button: React.FC<IButtonProps> = ({
    onClick = () => {},
    disable,
    children,
    className = "",
}) => {
    return (
        <button
            onClick={() => {
                if (disable) return;
                onClick();
            }}
            className={`flex justify-center items-center text-white bg-primary rounded-lg shadow-lg font-semibold   md:py-3 md:px-6  md:text-lg md:gap-2 text-base gap-[2px] ${
                disable ? "cursor-default opacity-70" : ""
            }   ${className}`}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    disable: PropTypes.bool,
};

export default Button;
