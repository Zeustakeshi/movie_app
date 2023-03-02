import React from "react";
import ButtonWatchTrailer from "../../button/ButtonWatchTrailer";
import Image from "../../Image";
import ButtonAddWatchList from "../../button/ButtonAddWatchList";
import ButtonWatchNow from "../../button/ButtonWatchNow";
import { IMoive } from "../../../interfaces/Movie.interface";
import { IonIcon } from "@ionic/react";

interface IBannerItemProps {
    movieInfo?: IMoive;
    isLoading?: boolean;
}

const BannerItem: React.FC<IBannerItemProps> = ({ movieInfo, isLoading }) => {
    return (
        <div className="w-full h-full relative rounded-lg ">
            {!isLoading ? (
                <>
                    <div className="overplay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-[inherit]"></div>
                    <Image
                        src={`https://image.tmdb.org/t/p/w780/${
                            movieInfo?.backdrop_path || movieInfo?.poster_path
                        }`}
                        alt=""
                        className="w-full h-full object-cover object-top rounded-[inherit]"
                    />
                </>
            ) : (
                <div className="bg-slate-800 w-[1190px] h-full rounded-[inherit]"></div>
            )}
            <div className="absolute left-5 bottom-5 w-full text-white font-bold">
                {!isLoading ? (
                    <h2 className=" text-3xl mb-10">
                        {movieInfo?.title || movieInfo?.name}
                    </h2>
                ) : (
                    <div className="skeleton mb-5 w-[300px] h-4 rounded-xl"></div>
                )}

                <div className="flex justify-start items-center gap-4">
                    <ButtonWatchNow
                        disable={isLoading}
                        movieID={movieInfo?.id}
                        className="flex justify-center items-center p-2"
                    >
                        <span>Watch</span>
                        <span className="flex items-center justify-center text-xl">
                            <IonIcon name="play-circle" />
                        </span>
                    </ButtonWatchNow>
                    <ButtonWatchTrailer
                        movieId={movieInfo?.id}
                        disable={isLoading}
                    />
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
