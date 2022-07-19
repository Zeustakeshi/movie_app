import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="w-[100vw] h-[100vh] flex justify-center items-center">
            <div className="min-h-[300px] max-w-[300px] md:min-h-[600px] md:max-w-[800px] bg-slate-800 p-10 shadow-lg rounded-lg flex flex-col gap-5 md:gap-6 justify-center items-center font-semibold ">
                <div className="text-4xl text-center lg:text-6xl">404</div>
                <div className="text-md md:text-3xl">Page not found</div>
                <p className="max-w-[90%] text-center text-md md:text-xl">
                    The link you clicked may be broken or the page may have been
                    removed or renamed
                </p>
                <Button
                    onClick={() => {
                        navigate("/home");
                    }}
                    className="px-3 py-2"
                >
                    Go home
                </Button>
            </div>
        </div>
    );
};

export default NotFound;
