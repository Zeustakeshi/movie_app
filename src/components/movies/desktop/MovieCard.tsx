import { IonIcon } from "@ionic/react";
import React from "react";
import { withErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../../contexts/AppProvider";
import { IMovieCard } from "../../../interfaces/Movie.interface";
import Button from "../../button/Button";
import ButtonAddWatchList from "../../button/ButtonAddWatchList";
import Image from "../../Image";
import VoteAverage from "../../voteAverage/VoteAverage";

const MovieCard: React.FC<IMovieCard> = ({ movieInfo, isLoading }) => {
    const { watchLists } = useAppContext();

    const navigate = useNavigate();

    return (
        <div className="group movie-card rounded-lg p-3 bg-slate-800 relative h-[500px] flex flex-col justify-between items-center select-none">
            {isLoading ? (
                <div
                    className={"skeleton w-full h-[250px] rounded-[inherit]"}
                ></div>
            ) : (
                <Image
                    src={`https://image.tmdb.org/t/p/w500/${
                        movieInfo?.poster_path || movieInfo?.backdrop_path
                    }`}
                    alt=""
                    className="w-full h-[250px] rounded-[inherit] object-cover object-top"
                />
            )}
            <div className="flex flex-col justify-center items-center text-white w-full ">
                {isLoading ? (
                    <span className="skeleton w-full h-[10px] rounded-xl my-3"></span>
                ) : (
                    <h3 className="font-bold text-lg text-left w-full my-3 overflow-hidden overflow-ellipsis whitespace-nowrap">
                        {movieInfo?.title || movieInfo?.name}
                    </h3>
                )}
                <div className="flex justify-between items-center text-gray-400 w-full mb-7 text-sm">
                    {isLoading ? (
                        <span className="skeleton w-[60px] h-[10px] rounded-xl my-3"></span>
                    ) : (
                        <span>
                            {movieInfo &&
                                new Date(
                                    movieInfo.release_date ||
                                        movieInfo.first_air_date
                                ).getFullYear()}
                        </span>
                    )}

                    <VoteAverage
                        isLoading={isLoading}
                        voteAverage={movieInfo?.vote_average}
                        text="12px"
                        size="48px"
                        bold="3px"
                    />
                </div>
            </div>

            <Button
                onClick={() => navigate(`/home/${movieInfo?.id}`)}
                disable={isLoading}
            >
                <span>Watch now</span>
                <span className="flex items-center justify-center text-xl">
                    <IonIcon name="play-circle"></IonIcon>
                </span>
            </Button>
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
