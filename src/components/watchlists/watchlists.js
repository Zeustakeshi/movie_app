import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../contexts/AppProvider";
import Image from "../Image";
import VoteAverage from "../voteAverage/VoteAverage";

const Watchlists = () => {
    const { watchLists: data } = useAppContext();

    return (
        <div className="flex flex-col gap-2 justify-center items-center ">
            <h2 className="text-left w-full text-xl text-slate-600">
                Watchlists
            </h2>
            <div className="flex flex-col gap-2 justify-start h-auto max-h-[39vh] content-overflow-hiden-scroll transition-all">
                {data.length > 0 ? (
                    data.map((item, index) => (
                        <WatchItem key={item.id || index} movieInfo={item} />
                    ))
                ) : (
                    <span className="text-center text-slate-700 text-sm font-bold">
                        no watch lists
                    </span>
                )}
            </div>
        </div>
    );
};

const WatchItem = ({ movieInfo }) => {
    const { watchLists, setWatchLists, setStoredWatchListValue } =
        useAppContext();
    const ref = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    }, [watchLists]);

    const handleRemoveWatchLists = (id) => {
        setWatchLists((prev) => {
            const newWatchList = prev.filter((item) => item.id !== id);
            setStoredWatchListValue(newWatchList);
            return newWatchList;
        });
    };

    return (
        <div
            ref={ref}
            className="group relative flex justify-center items-center gap-3 p-3 bg-slate-800 rounded-lg text-sm transition-all cursor-pointer"
        >
            <span
                onClick={() => {
                    handleRemoveWatchLists(movieInfo.id);
                }}
                className="absolute top-2 right-2 p-1 cursor-pointer flex justify-center items-center bg-slate-500 rounded-full text-white bg-opacity-60 invisible opacity-0 group-hover:visible group-hover:opacity-100  transition-all"
            >
                <ion-icon name="close"></ion-icon>
            </span>
            <div
                className="rounded-[inherit] w-[40%] h-[80px] "
                onClick={() => navigate(`/home/${movieInfo.id}`)}
            >
                <Image
                    src={`https://image.tmdb.org/t/p/w300/${
                        movieInfo.poster_path || movieInfo.backdrop_path
                    }`}
                    alt=""
                    className="w-full h-full object-cover rounded-[inherit] object-top"
                />
            </div>
            <div className="w-[60%]">
                <h4 className="mb-3 overflow-hidden overflow-ellipsis whitespace-nowrap">
                    {movieInfo.title || movieInfo.name}
                </h4>
                <div className="flex justify-between items-center">
                    <span className="text-xs">
                        {new Date(
                            movieInfo.release_date || movieInfo.first_air_date
                        ).getFullYear()}
                    </span>
                    <VoteAverage
                        voteAverage={movieInfo.vote_average}
                        text="12px"
                    />
                </div>
            </div>
        </div>
    );
};

export default Watchlists;
