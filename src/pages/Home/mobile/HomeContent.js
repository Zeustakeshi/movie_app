import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import Header from "../Header";

const dataMovieList = [
    {
        detail: "movie",
        banner: "upcoming",
        type: [
            { title: "now playing", type: "now_playing" },
            { title: "Top Rated", type: "top_rated" },
        ],
    },
    {
        detail: "tv",
        banner: "popular",
        type: [
            {
                title: "Airing Today",
                type: "airing_today",
            },
            { title: "On The Air", type: "on_the_air" },
            { title: "Top Rated", type: "top_rated" },
        ],
    },
];

const HomeContent = () => {
    const [movieType, setMovieType] = useState("movie");
    const [movieInfo, setMovieInfo] = useState({});

    useEffect(() => {
        const info = dataMovieList.filter(
            (item) => item.detail === movieType
        )[0];
        setMovieInfo(info);
    }, [movieType]);

    return (
        <div className="flex flex-col">
            <Header movieType={movieType} setMovieType={setMovieType} />
            <Movie
                detail={movieInfo.detail}
                banner={movieInfo.banner}
                type={movieInfo.type}
            />
        </div>
    );
};

export default HomeContent;
