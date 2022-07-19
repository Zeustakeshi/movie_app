import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const ButtonWatchNow = ({
    disable,
    onClick = () => {},
    className = "",
    children,
    movieID,
}) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        onClick();
        navigate(`/home/${movieID}`);
    };

    return (
        <Button
            disable={disable}
            className={`${className}`}
            onClick={handleNavigate}
        >
            {children}
        </Button>
    );
};

export default ButtonWatchNow;
