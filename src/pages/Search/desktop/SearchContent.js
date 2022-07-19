import React, { useEffect, useState } from "react";
import MovieCard from "../../../components/movies/desktop/MovieCard";
import Paginate from "../../../components/Paginate/Paginate";
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
                className={`w-full ${
                    error ? "text-center p-5" : "grid grid-cols-4 gap-4"
                }`}
            >
                {movies.length > 0 && !error ? (
                    movies.map((item, index) => {
                        return (
                            <MovieCard
                                key={item.id || index}
                                movieInfo={item}
                            />
                        );
                    })
                ) : movies.length <= 0 && !error ? (
                    new Array(20)
                        .fill(0)
                        .map((item, index) => (
                            <MovieCard key={index} isLoading />
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

export default SearchContent;
