import { IonIcon } from "@ionic/react";
import React from "react";
import { useAppContext } from "../../contexts/AppProvider";
import { IButtonAddWatchListProps } from "../../interfaces/ButtonProps.interface";
import Button from "./Button";

const ButtonAddWatchList: React.FC<IButtonAddWatchListProps> = ({
    movieInfo,
    disable,
    className = "p-[13px] md:px-4 md:py-4 md:gap-0 bg-gray-500 bg-opacity-60 rounded-lg text-[22px] md:text-xl flex justify-center items-center transition-all",
}) => {
    const { setWatchLists, watchLists, setStoredWatchListValue } =
        useAppContext();
    const handleWatchList = () => {
        setWatchLists((prev: any) => {
            if (!JSON.stringify(prev).includes(JSON.stringify(movieInfo))) {
                const newWatchList = [...prev, movieInfo];
                setStoredWatchListValue(newWatchList);
                return newWatchList;
            } else return [...prev];
        });
    };
    return (
        <Button
            disable={disable}
            onClick={() => handleWatchList()}
            className={`${
                JSON.stringify(watchLists).includes(JSON.stringify(movieInfo))
                    ? "opacity-0 invisible"
                    : ""
            }  ${className} `}
        >
            <IonIcon name="add-sharp" />
        </Button>
    );
};

export default ButtonAddWatchList;
