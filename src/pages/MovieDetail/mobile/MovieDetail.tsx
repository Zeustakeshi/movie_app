import React from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "../../../components/movies/mobile/MovieCard";
import useGetMovieData from "../../../hooks/useGetMovieData";
import VoteAverage from "../../../components/voteAverage/VoteAverage";

// Import Swiper styles
import "swiper/css/effect-coverflow";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cube";

// import required modules
import { Pagination, EffectCube, Autoplay, EffectCoverflow } from "swiper";
import Image from "../../../components/Image";
import { IMoive } from "../../../interfaces/Movie.interface";

const convertDate = (date: any) => {
    if (!date) return;
    const [year, month, day] = date.split("-");

    return [day, month, year].join("-");
};

interface ICustomStyles extends React.CSSProperties {
    "--p"?: number;
    "--b"?: string;
    "--w"?: string;
    "--text"?: string;
    "--c"?: string;
    "--line"?: string;
}

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
    const customStyles: ICustomStyles = {
        "--line": "9",
    };
    return (
        <div className="w-[100vw]">
            <div className="relative rounded-xl h-[360px] mb-10">
                <div className="absolute w-full inset-0 bg-slate-800 bg-opacity-70"></div>
                <Image
                    src={`https://image.tmdb.org/t/p/original/${
                        backdrop_path || poster_path
                    }`}
                    alt=""
                    className="w-full h-full object-fill rounded-[inherit]"
                />
                <Swiper
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    effect={"cube"}
                    grabCursor={true}
                    cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                    }}
                    pagination={true}
                    modules={[Pagination, EffectCube, Autoplay]}
                    className="top-0 left-0 movie-detail inset-0 z-10"
                >
                    <SwiperSlide>
                        <div className="flex justify-center items-center w-full h-full relative z-10 rounded-2xl shadow-lg">
                            <Image
                                src={`https://image.tmdb.org/t/p/w500/${
                                    poster_path || backdrop_path
                                }`}
                                alt=""
                                className="w-full h-full max-w-[200px] max-h-[300px]  object-cover object-top rounded-[inherit]"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="mx-auto w-full max-w-[500px] mb-10 flex flex-col justify-start items-center p-4">
                            <h3 className="my-3 font-bold text-xl">Overview</h3>
                            <p
                                className="text-justify text-base leading-relaxed content-overflow-limitline "
                                style={customStyles}
                            >
                                {overview || "no overview"}
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex justify-center items-center">
                        <div className="w-[90%] h-auto bg-slate-800 bg-opacity-30 rounded-2xl flex justify-start items-center gap-3 p-4">
                            <VoteAverage
                                voteAverage={vote_average}
                                size="100px"
                                bold="6px"
                                text="25px"
                            />
                            <div className="font-bold flex flex-col gap-2 justify-center items-start">
                                <div>{title}</div>
                                <div>
                                    {release_date && (
                                        <span>
                                            <span className="mr-2">Time:</span>
                                            {convertDate(release_date)}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="text-3xl font-bold text-center mb-5 p-3  ">
                {title}
            </div>
            <div className="w-[100vw] p-4 flex justify-center items-center gap-2 mb-10">
                {genres &&
                    genres.length > 0 &&
                    genres.slice(0, 3).map((item, index) => (
                        <div
                            key={item.id || index}
                            className="text-sm border-2 rounded-2xl py-2 px-3 border-primary text-primary font-bold"
                        >
                            {item.name}
                        </div>
                    ))}
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
            <h3 className="text-center text-2xl mb-10 font-bold">
                Top Billed Cast
            </h3>
            <div className="grid grid-cols-4 gap-3 w-full p-3">
                {cast.slice(0, 4).map((item) => (
                    <div key={item.id} className="cast-item">
                        <Image
                            src={`https://image.tmdb.org/t/p/w300/${item.profile_path}`}
                            alt=""
                            className="w-full h-[120px] object-cover rounded-lg"
                        />
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
            <h2 className="text-center text-2xl mb-10 font-bold">Trailers</h2>

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
                    slidesPerView="auto"
                    effect={"coverflow"}
                    centeredSlides={true}
                    coverflowEffect={{
                        rotate: 80,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                >
                    {movies?.map((movie, index) => {
                        return (
                            <SwiperSlide key={movie.id || index}>
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
