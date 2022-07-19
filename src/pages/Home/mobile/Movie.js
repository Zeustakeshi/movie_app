import React from "react";
import { withErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";
import BannerMobile from "../../../components/banner/mobile/Banner";
import MovieList from "../../../components/movies/mobile/MovieList";

const Movie = ({
    detail = "movie",
    banner = "upcoming",
    type = [
        { title: "now playing", type: "now_playing" },
        { title: "Top Rated", type: "top_rated" },
    ],
}) => {
    return (
        <>
            {banner && <BannerMobile detail={detail} type={banner} />}
            {type?.map((item, index) => (
                <section
                    key={index}
                    className="movies-layout page-container px-3 pb-8 max-w-[100vw] "
                >
                    <h2 className="capitalize text-white text-2xl font-bold mb-4">
                        {item.title}
                    </h2>
                    <MovieList detail={detail} type={item.type} />
                </section>
            ))}
        </>
    );
};

Movie.propTypes = {
    detail: PropTypes.string,
    banner: PropTypes.string,
    type: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
        })
    ),
};

function FallbackComponent() {
    return (
        <p className="bg-red-50 text-red-500">
            Something went wrong with this component
        </p>
    );
}

export default withErrorBoundary(Movie, { FallbackComponent });
