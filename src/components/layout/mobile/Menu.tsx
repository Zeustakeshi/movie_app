import { IonIcon } from "@ionic/react";
import { NavLink } from "react-router-dom";
import { IMenuProps } from "../../../interfaces/MenuProps.interface";

const Menu: React.FC<IMenuProps> = ({ navigates }) => {
    return (
        <div className="text-white font-bold page-menu-mobile flex justify-center items-center gap-5 p-2 bg-slate-800 border border-slate-700 rounded-t-3xl shadow-xl">
            {navigates?.map((item, index) => (
                <NavLink
                    key={index}
                    to={`${item.to}`}
                    className={({ isActive }) =>
                        `${
                            isActive ? "bg-primary text-2xl" : ""
                        } flex justify-start items-center p-3 text-lg transition-all cursor-pointer rounded-full `
                    }
                >
                    <span className="flex justify-center items-center">
                        <IonIcon name={item.iconName}></IonIcon>
                    </span>
                </NavLink>
            ))}
        </div>
    );
};

export default Menu;
