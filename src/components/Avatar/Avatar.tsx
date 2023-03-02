import React from "react";
import { IAvatar } from "../../interfaces/AvatarProps.interface";

const src =
    "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80";
const Avatar: React.FC<IAvatar> = ({
    width = 100,
    height = 100,
    allowClick = true,
    borderWidth = 4,
    onClick = () => {},
}) => {
    return (
        <div
            onClick={onClick}
            style={{
                width: width,
                height: height,
                borderWidth: borderWidth,
                cursor: allowClick ? "pointer" : "default",
            }}
            className="rounded-full border-[6px] border-primary"
        >
            <img
                src={src}
                alt="avatar"
                className="w-full h-full object-cover rounded-full"
            />
        </div>
    );
};

export default Avatar;
