import React from "react";
import DropDown from "../../components/dropDown/DropDown";
import { useAppContext } from "../../contexts/AppProvider";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";

const Header = ({ movieType, setMovieType }) => {
    const { setLanguage, language } = useAppContext();
    return (
        <header className="header flex justify-center items-center text-gray-600 text-base md:text-xl font-semibold gap-3 md:gap-5 px-2 py-3 md:p-5 ">
            <HeaderItem
                setMovieType={setMovieType}
                movieType={movieType}
                type="movie"
                title="In Theaters "
            />
            <HeaderItem
                setMovieType={setMovieType}
                movieType={movieType}
                type="tv"
                title="On TV"
            />
            <DropDown
                initItem={language}
                handleChooseItem={(item) => {
                    setLanguage(item);
                }}
                items={["vi-Vi", "en-US"]}
            />
        </header>
    );
};

const HeaderItem = ({ setMovieType, type, movieType, title }) => {
    return (
        <span
            onClick={() => setMovieType(type)}
            className={`hover:text-primary cursor-pointer p-2 ${
                movieType === type && "text-primary"
            }`}
        >
            {title}
        </span>
    );
};

Header.propTypes = {
    movieType: PropTypes.string.isRequired,
    setMovieType: PropTypes.func.isRequired,
};

function FallbackComponent() {
    return (
        <p className="bg-red-50 text-red-500">
            Something went wrong with this component
        </p>
    );
}

export default withErrorBoundary(Header, { FallbackComponent });
