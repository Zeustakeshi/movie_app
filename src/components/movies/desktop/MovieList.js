import PropTypes from "prop-types";
import React from "react";
import { withErrorBoundary } from "react-error-boundary";
import { Swiper, SwiperSlide } from "swiper/react";
import useGetMovieData from "../../../hooks/useGetMovieData";
import MovieCard from "./MovieCard";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
// import required modules

const MovieList = ({ type = "now_playing", detail }) => {
    const { data } = useGetMovieData(`${detail}/${type}`);

    const movies = data?.results || [];

    return (
        <div className="movie-list">
            <Swiper grabCursor={true} spaceBetween={30} slidesPerView="auto">
                {movies.length <= 0
                    ? new Array(6).fill(0).map((item, index) => (
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

MovieList.propTypes = {
    type: PropTypes.string,
    detail: PropTypes.string,
};

function FallbackComponent() {
    return (
        <p className="bg-red-50 text-red-500">
            Something went wrong with this component
        </p>
    );
}

export default withErrorBoundary(MovieList, { FallbackComponent });
