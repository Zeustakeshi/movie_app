import React, { useEffect, useState } from "react";
import ButtonWatchNow from "../../../components/button/ButtonWatchNow";
import Image from "../../../components/Image";
import MovieCard from "../../../components/movies/mobile/MovieCard";
import Paginate from "../../../components/Paginate/Paginate";
import VoteAverage from "../../../components/voteAverage/VoteAverage";
import useGetMovieData from "../../../hooks/useGetMovieData";

const SearchContent = ({ searchValue, itemsPerPage = 1 }) => {
    const [nextPage, setNextPage] = useState(1);
    const [url, setUrl] = useState({
        path: "",
        query: "",
        page: 1,
    });

    useEffect(() => {
        if (searchValue.trim()) {
            setUrl({
                path: "search/movie",
                query: searchValue,
                page: nextPage,
            });
        } else {
            setUrl({
                path: "movie/popular",
                query: "",
                page: nextPage,
            });
        }
    }, [searchValue, nextPage]);

    const { data, error } = useGetMovieData(url.path, url.query, url.page);

    const movies = data?.results || [];

    return (
        <div className="flex flex-col justify-center items-start gap-5">
            <div
                className={`flex flex-col gap-3 justify-center items-center w-full p-3`}
            >
                {movies.length > 0 && !error ? (
                    movies.map((item, index) => {
                        return (
                            <SearchItem key={item.id || index} item={item} />
                        );
                    })
                ) : movies.length <= 0 && !error ? (
                    new Array(10)
                        .fill(0)
                        .map((item, index) => (
                            <SearchItem key={item.id || index} isLoading />
                        ))
                ) : (
                    <div className="text-slate-600 font-bold text-center">
                        no result
                    </div>
                )}
            </div>
            <Paginate
                data={data}
                itemsPerPage={itemsPerPage}
                setNextPage={setNextPage}
            />
        </div>
    );
};

const SearchItem = ({ item, isLoading }) => {
    return (
        <div className="w-full flex gap-2 justify-start items-center h-[160px] py-3 px-4 rounded-xl bg-slate-800">
            <div className="relative w-[30%] h-full rounded-[inherit]">
                {isLoading ? (
                    <div className="skeleton w-full h-full rounded-[inherit]"></div>
                ) : (
                    <Image
                        src={`https://image.tmdb.org/t/p/w780/${
                            item.poster_path || item.backdrop_path
                        }`}
                        alt=""
                        className="w-full h-full object-fill rounded-[inherit]"
                    />
                )}

                <ButtonWatchNow
                    className="absolute top-2/4 left-2/4 bg-opacity-80 rounded-full -translate-x-2/4 -translate-y-2/4 p-2"
                    movieID={item?.id}
                    disable={isLoading}
                >
                    <span className="flex items-center justify-center text-3xl">
                        <ion-icon name="play-circle"></ion-icon>
                    </span>
                </ButtonWatchNow>
            </div>
            <div className="bg-slate-700 bg-opacity-50 p-2 rounded-[inherit] w-[70%] h-full flex flex-col gap-2 justify-start items-start text-bold ">
                {isLoading ? (
                    <div className="skeleton w-[80%] h-4 rounded-full"></div>
                ) : (
                    <h4 className="font-bold text-base text-left p-1 w-full overflow-hidden overflow-ellipsis whitespace-nowrap">
                        {item.title}
                    </h4>
                )}
                <div className="flex justify-center items-center w-full h-full ">
                    <VoteAverage
                        isLoading={isLoading}
                        size="60px"
                        bold="5px"
                        voteAverage={item?.vote_average}
                        color="skyblue"
                        text="14px"
                    />
                </div>
            </div>
        </div>
    );
};

export default SearchContent;
