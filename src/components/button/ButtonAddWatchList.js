import React from "react";
import { useAppContext } from "../../contexts/AppProvider";
import Button from "./Button";
import PropTypes from "prop-types";

const ButtonAddWatchList = ({
    movieInfo,
    disable,
    className = "p-[13px] md:px-4 md:py-4 md:gap-0 bg-gray-500 bg-opacity-60 rounded-lg text-[22px] md:text-xl flex justify-center items-center transition-all",
}) => {
    const { setWatchLists, watchLists } = useAppContext();

    const handleAddWatchList = () => {
        setWatchLists((prev) => {
            if (!JSON.stringify(prev).includes(JSON.stringify(movieInfo)))
                return [...prev, movieInfo];
            else return [...prev];
        });
    };
    return (
        <Button
            disable={disable}
            onClick={() => handleAddWatchList()}
            className={`${
                JSON.stringify(watchLists).includes(JSON.stringify(movieInfo))
                    ? "opacity-0 invisible"
                    : ""
            }  ${className} `}
        >
            <ion-icon name="add-sharp"></ion-icon>
        </Button>
    );
};

ButtonAddWatchList.propTypes = {
    movieInfo: PropTypes.object,
    disable: PropTypes.bool,
    className: PropTypes.string,
};

export default ButtonAddWatchList;
