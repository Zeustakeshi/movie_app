import React from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "../../../components/Image";
import MovieCard from "../../../components/movies/desktop/MovieCard";
import VoteAverage from "../../../components/voteAverage/VoteAverage";
import useGetMovieData from "../../../hooks/useGetMovieData";
import { IMoive } from "../../../interfaces/Movie.interface";

const MovieDetail = () => {
    const { movieId } = useParams();

    const { data } = useGetMovieData(`movie/${movieId}`);

    if (!data) return <></>;
    const {
        backdrop_path,
        poster_path,
        title,
        genres,
        overview,
        release_date,
        vote_average,
    }: IMoive = data;

    return (
        <div className="page-container-right p-2 ">
            <div className="relative">
                <div className="absolute w-full inset-0 bg-slate-900 bg-opacity-80"></div>
                <div
                    className=" w-full h-[100vh] bg-cover bg-no-repeat rounded-lg mb-20"
                    style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original/${
                            backdrop_path || poster_path
                        })`,
                    }}
                >
                    <div className="absolute top-20 left-5 w-full h-full flex justify-start items-start gap-5">
                        <div className="w-full max-w-[400px] h-[600px] rounded-xl relative z-10 shadow-xl">
                            <Image
                                src={`https://image.tmdb.org/t/p/w500/${
                                    poster_path || backdrop_path
                                }`}
                                alt=""
                                className="w-full h-full object-cover object-top rounded-[inherit]"
                            />
                        </div>
                        <div className="flex flex-col justify-start items-start h-full p-5">
                            <div className="flex flex-col justify-start items-start gap-4 mb-10">
                                <h2 className="text-4xl font-bold  max-w-[800px] overflow-hidden overflow-ellipsis whitespace-nowrap">
                                    {title}
                                </h2>
                                <div className="flex justify-start items-center gap-10 text-gray-400 w-full text-ld font-bold">
                                    {release_date && (
                                        <span>
                                            {new Date(
                                                release_date
                                            ).getFullYear()}
                                        </span>
                                    )}
                                    {vote_average && (
                                        <VoteAverage
                                            voteAverage={vote_average}
                                            size="60px"
                                            bold="4px"
                                            text="16px"
                                        />
                                    )}
                                </div>
                            </div>
                            {genres && (
                                <div className="grid grid-cols-5 gap-5 mb-10">
                                    {genres.length > 0 &&
                                        genres.map((item, index) => (
                                            <div
                                                key={item.id || index}
                                                className="text-center font-bold rounded-xl px-4 py-2 text-primary border-[2px] border-primary"
                                            >
                                                {item.name}
                                            </div>
                                        ))}
                                </div>
                            )}
                            <div className="mx-auto w-full max-w-[1000px] mb-10">
                                <p className="text-justify text-xl font-bold leading-relaxed content-overflow-limitline">
                                    {overview || "no overview"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <MovieCredits />
            <MovieVideos />
            <MovieSimilar />
        </div>
    );
};

interface ICast {
    id?: string | number;
    profile_path?: string;
    name?: string;
}

const MovieCredits = () => {
    const { movieId } = useParams();
    const { data } = useGetMovieData(`movie/${movieId}/credits`);
    if (!data || !data.cast || data.cast.length <= 0) return <></>;

    const { cast }: { cast: ICast[] } = data;

    return (
        <>
            <h2 className="text-center text-3xl mb-10 font-bold">
                Top Billed Cast
            </h2>
            <div className="grid grid-cols-4 gap-5 max-w-[1000px] mx-auto">
                {cast.slice(0, 4).map((item) => (
                    <div key={item.id} className="cast-item">
                        <Image
                            src={`https://image.tmdb.org/t/p/w300/${item.profile_path}`}
                            alt=""
                            className="w-full h-[250px] object-cover rounded-lg"
                        />
                        <h3 className="w-full text-center text-lg font-bold mt-4">
                            {item.name}
                        </h3>
                    </div>
                ))}
            </div>
        </>
    );
};

const MovieVideos = () => {
    const { movieId } = useParams();
    const { data } = useGetMovieData(`movie/${movieId}/videos`);

    if (!data || !data.results || data.results.length <= 0) return null;

    const { results } = data;
    return (
        <div className="py-10 mt-10">
            <h2 className="text-center text-3xl mb-10 font-bold">Trailers</h2>

            {results.slice(0, 3).map((item: any) => (
                <div key={item.id} className="w-full mt-10">
                    <h3 className="font-bold text-xl mb-5">{item.name}</h3>
                    <div className="w-full aspect-video">
                        <iframe
                            className="w-full h-full object-fill"
                            width="864"
                            height="486"
                            title={item.name}
                            src={`https://www.youtube.com/embed/${item.key}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            ))}
        </div>
    );
};

const MovieSimilar = () => {
    const { movieId } = useParams();

    const { data } = useGetMovieData(`movie/${movieId}/similar`);

    if (!data || !data.results || data.results.length <= 0) return null;

    const { results: movies }: { results: IMoive[] } = data;

    return (
        <div className="mt-10">
            <h2 className="text-center text-3xl mb-10 font-bold">
                Similar movies
            </h2>
            <div className="movie-list">
                <Swiper
                    grabCursor={true}
                    spaceBetween={30}
                    slidesPerView="auto"
                >
                    {movies?.map((movie) => {
                        return (
                            <SwiperSlide key={movie.id}>
                                <MovieCard movieInfo={movie} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
};

export default MovieDetail;
