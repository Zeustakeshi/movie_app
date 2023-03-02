import { IonIcon } from "@ionic/react";
import React, { useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import { IDropDownProps } from "../../interfaces/DropDownProps.interface";

const DropDown: React.FC<IDropDownProps> = ({
    initItem,
    handleChooseItem,
    items,
}) => {
    const [currentItem, setCurrentItem] = useState(initItem);
    const [show, setShow] = useState(false);

    const dropdownRef = useRef(null);

    const handleClickItem = (item: any) => {
        handleChooseItem(item);
        setCurrentItem(item);
        setShow(false);
    };

    useClickOutside(dropdownRef, () => {
        setShow(false);
    });

    return (
        <>
            <div
                onClick={() => setShow(!show)}
                ref={dropdownRef}
                className="relative flex justify-center items-center gap-4 min-w-[150px] cursor-pointer "
            >
                <span className="">{currentItem}</span>
                <span className="flex justify-center items-center">
                    {!show ? (
                        <IonIcon name="caret-down-outline"></IonIcon>
                    ) : (
                        <IonIcon name="caret-up-outline"></IonIcon>
                    )}
                </span>
                <div
                    className={`absolute top-[calc(100%+10px)] left-0 w-full h-auto bg-slate-800 z-10  ${
                        show ? "visible opacity-100" : "invisible opacity-0"
                    }`}
                >
                    {items?.map((item, index) => (
                        <div
                            key={index}
                            className="px-4 p-3 cursor-pointer transition-all hover:bg-slate-600 hover:text-white "
                            onClick={() => {
                                handleClickItem(item);
                            }}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default DropDown;
