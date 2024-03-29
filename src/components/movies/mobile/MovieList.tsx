import React from "react";
import { withErrorBoundary } from "react-error-boundary";
import { Swiper, SwiperSlide } from "swiper/react";
import useGetMovieData from "../../../hooks/useGetMovieData";
import MovieCard from "./MovieCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
// import required modules
import { EffectCoverflow } from "swiper";
import { IMoive, IMovieList } from "../../../interfaces/Movie.interface";

const MovieList: React.FC<IMovieList> = ({ type = "now_playing", detail }) => {
    const { data } = useGetMovieData(`${detail}/${type}`);

    const movies: IMoive[] = data?.results || [];

    return (
        <div className="movie-list w-full overflow-hidden ">
            <Swiper
                grabCursor={true}
                slidesPerView="auto"
                effect={"coverflow"}
                centeredSlides={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow]}
                className="w-full m-auto"
            >
                {movies.length <= 0
                    ? new Array(10).fill(0).map((item, index) => (
                          <SwiperSlide key={index}>
                              <MovieCard isLoading />
                          </SwiperSlide>
                      ))
                    : movies.map((movie) => {
                          return (
                              <SwiperSlide key={movie.id}>
                                  <MovieCard movieInfo={movie} />
                              </SwiperSlide>
                          );
                      })}
            </Swiper>
        </div>
    );
};

function FallbackComponent() {
    return (
        <p className="bg-red-50 text-red-500">
            Something went wrong with this component
        </p>
    );
}

export default withErrorBoundary(MovieList, { FallbackComponent });
