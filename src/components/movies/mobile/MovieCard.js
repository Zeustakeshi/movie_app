import React from "react";
import { useAppContext } from "../../../contexts/AppProvider";
import ButtonAddWatchList from "../../button/ButtonAddWatchList";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ButtonWatchNow from "../../button/ButtonWatchNow";
import VoteAverage from "../../voteAverage/VoteAverage";
import Image from "../../Image";

const convertDate = (date) => {
    if (!date) return;
    const [year, month, day] = date.split("-");

    return [day, month, year].join("-");
};

const MovieCard = ({ movieInfo, isLoading }) => {
    const { watchLists } = useAppContext();

    return (
        <div className="group movie-card rounded-xl p-5 bg-slate-800 relative h-[505px] flex flex-col justify-between items-center select-none">
            {isLoading ? (
                <div
                    className={"skeleton w-full h-[380px] rounded-[inherit]"}
                ></div>
            ) : (
                <div className="relative w-full h-[380px]  rounded-[inherit]">
                    <Image
                        src={`https://image.tmdb.org/t/p/w780/${
                            movieInfo.poster_path || movieInfo.backdrop_path
                        }`}
                        alt=""
                        className="w-full h-full  rounded-[inherit] object-cover object-top"
                    />
                    <ButtonWatchNow
                        className="absolute top-2/4 left-2/4 bg-opacity-80 rounded-full -translate-x-2/4 -translate-y-2/4 p-4"
                        movieID={movieInfo?.id}
                        disable={isLoading}
                    >
                        <span className="flex items-center justify-center text-3xl">
                            <ion-icon name="play-circle"></ion-icon>
                        </span>
                    </ButtonWatchNow>
                </div>
            )}
            <div className="flex flex-col justify-center items-center text-white w-full ">
                {isLoading ? (
                    <span className="skeleton w-full h-[10px] rounded-xl my-1 mt-2"></span>
                ) : (
                    <h3 className="font-bold text-lg text-left w-full my-1 mt-2 overflow-hidden overflow-ellipsis whitespace-nowrap">
                        {movieInfo.title || movieInfo.name}
                    </h3>
                )}
                <div className="flex justify-between items-center text-gray-400 w-full mb-7 text-sm">
                    {isLoading ? (
                        <span className="skeleton w-[60px] h-[10px] rounded-xl my-3"></span>
                    ) : (
                        <span>
                            {convertDate(movieInfo.release_date) ||
                                convertDate(movieInfo.first_air_date)}
                        </span>
                    )}
                    <VoteAverage
                        isLoading={isLoading}
                        voteAverage={movieInfo?.vote_average}
                    />
                </div>
            </div>
            <ButtonAddWatchList
                className={`absolute top-5 right-5 p-3 bg-gray-500 bg-opacity-60 rounded-lg text-[22px] flex justify-center items-center invisible opacity-0 ${
                    !JSON.stringify(watchLists).includes(
                        JSON.stringify(movieInfo)
                    ) && "group-hover:opacity-100 group-hover:visible"
                } transition-all`}
                disable={isLoading}
                movieInfo={movieInfo}
            />
        </div>
    );
};

MovieCard.propTypes = {
    movieInfo: PropTypes.shape({
        poster_path: PropTypes.string,
        backdrop_path: PropTypes.string,
        title: PropTypes.string,
        name: PropTypes.string,
        release_date: PropTypes.string,
        first_air_date: PropTypes.string,
        vote_average: PropTypes.number,
        id: PropTypes.number,
    }),
    isLoading: PropTypes.bool,
};

function FallbackComponent() {
    return (
        <p className="bg-red-50 text-red-500">
            Something went wrong with this component
        </p>
    );
}

export default withErrorBoundary(MovieCard, {
    FallbackComponent,
});
