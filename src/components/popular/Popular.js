import React from "react";
import useGetMovieData from "../../hooks/useGetMovieData";
import PopularItem from "./PopularItem";

const Popular = () => {
    const { data } = useGetMovieData("movie/popular");
    const popularMovie = data?.results || [];

    return (
        <div className="flex flex-col gap-2 justify-center items-center mb-4">
            <h2 className="text-left w-full text-xl text-slate-600">Popular</h2>
            <div className="flex flex-col gap-2 justify-start h-auto max-h-[39vh] content-overflow-hiden-scroll transition-all rounded-lg">
                {popularMovie.length > 0 ? (
                    popularMovie.map((item, index) => (
                        <PopularItem key={item.id || index} movieInfo={item} />
                    ))
                ) : (
                    <>
                        {new Array(8).fill(0).map((item, index) => (
                            <PopularItem key={index} isLoading />
                        ))}
                    </>
                    // <span className="text-center text-slate-700 text-sm font-bold">
                    //     no popular
                    // </span>
                )}
            </div>
        </div>
    );
};

export default Popular;
