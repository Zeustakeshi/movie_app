import React, { useEffect, useState } from "react";
import Header from "../Header";
import Movie from "./Movie";

interface IDataMovieType {
    title: "now playing" | "Top Rated" | "Airing Today" | "On The Air";
    type: "now_playing" | "top_rated" | "airing_today" | "on_the_air";
}

interface IDataMovie {
    detail: string;
    banner: "upcoming" | "popular";
    type: IDataMovieType[];
}

const dataMovieList: IDataMovie[] = [
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

const HomeContent: React.FC = () => {
    const [movieType, setMovieType] = useState("movie");
    const [movieInfo, setMovieInfo] = useState<IDataMovie>();

    useEffect(() => {
        const info = dataMovieList.filter(
            (item) => item.detail === movieType
        )[0];
        setMovieInfo(info);
    }, [movieType]);

    return (
        <div className="flex flex-col">
            <Header movieType={movieType} setMovieType={setMovieType} />
            {movieInfo && (
                <Movie
                    detail={movieInfo.detail}
                    banner={movieInfo.banner}
                    type={movieInfo.type}
                />
            )}
        </div>
    );
};

export default HomeContent;
