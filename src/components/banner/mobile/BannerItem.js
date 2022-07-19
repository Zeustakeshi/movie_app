import React from "react";
import ButtonAddWatchList from "../../button/ButtonAddWatchList";
import ButtonWatchNow from "../../button/ButtonWatchNow";
import Image from "../../Image";

const BannerItem = ({ movieInfo, isLoading }) => {
    return (
        <div className="w-full h-full relative rounded-lg ">
            {!isLoading ? (
                <>
                    <div className="overplay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-[inherit]"></div>
                    <Image
                        src={`https://image.tmdb.org/t/p/w780/${
                            movieInfo.backdrop_path || movieInfo.poster_path
                        }`}
                        alt=""
                        className="w-full h-full rounded-[inherit] object-fill"
                    />
                </>
            ) : (
                <div className="bg-slate-800 w-[1190px] h-full rounded-[inherit]"></div>
            )}
            <div className="absolute left-5 bottom-5 w-full text-white font-bold">
                {!isLoading ? (
                    <h2 className=" text-xl mb-4">
                        {movieInfo.title || movieInfo.name}
                    </h2>
                ) : (
                    <div className="skeleton mb-4 w-[200px] h-3 rounded-full"></div>
                )}
                <div className="flex justify-start items-center gap-4">
                    <ButtonWatchNow
                        disable={isLoading}
                        movieID={movieInfo?.id}
                        className="flex justify-center items-center px-5 py-3 "
                    >
                        <span>Watch</span>
                        <span className="flex items-center justify-center text-xl">
                            <ion-icon name="play-circle"></ion-icon>
                        </span>
                    </ButtonWatchNow>

                    <ButtonAddWatchList
                        disable={isLoading}
                        movieInfo={movieInfo}
                    />
                </div>
            </div>
        </div>
    );
};

export default BannerItem;
