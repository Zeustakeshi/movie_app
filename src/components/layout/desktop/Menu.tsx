import { IonIcon } from "@ionic/react";
import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";
import { IMenuProps } from "../../../interfaces/MenuProps.interface";

const Menu: React.FC<IMenuProps> = ({ navigates }) => {
    return (
        <div
            className={` text-white font-bold page-side-bar top-0 left-0 border-r border-r-slate-800`}
        >
            <div className="uppercase text-gray-600 text-sm  font-bold tracking-widest">
                Menu
            </div>
            <div className="menu-list mt-2">
                {navigates?.map((item, index) => (
                    <NavLink
                        key={index}
                        to={`${item.to}`}
                        className={({ isActive }) =>
                            `${
                                isActive ? "text-primary" : ""
                            } flex justify-start items-center gap-2 p-2 transition-all hover:text-primary cursor-pointer`
                        }
                    >
                        <span className="flex justify-center items-center">
                            <IonIcon name={item.iconName}></IonIcon>
                        </span>
                        <span className="flex justify-center items-center">
                            {item.title}
                        </span>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

Menu.propTypes = {
    navigates: PropTypes.array.isRequired,
};

export default Menu;
