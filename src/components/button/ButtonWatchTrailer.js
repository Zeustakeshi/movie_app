import React, { useEffect, useState } from "react";
import useGetMovieData from "../../hooks/useGetMovieData";
import Modal from "../modal/Modal";
import Button from "./Button";
import PropTypes from "prop-types";
import { useAppContext } from "../../contexts/AppProvider";

const ButtonWatchTrailer = ({ movieId, disable }) => {
    const { isMobile } = useAppContext();
    const [showTrailer, setShowTrailer] = useState(false);
    const [path, setPath] = useState();

    const createPath = () => {
        if (!showTrailer) return;
        return `movie/${movieId}/videos`;
    };

    const path2 = createPath();

    useEffect(() => {
        setPath(path2);
    }, [showTrailer, path2]);

    const { data } = useGetMovieData(path);
    if (!data || !data.results || data.results.length <= 0) {
        return (
            <>
                <Button onClick={() => setShowTrailer(true)} disable={disable}>
                    <span>{isMobile ? "Trailer" : "Watch Trailer"}</span>
                    <span className="flex items-center justify-center text-base md:text-xl font-semibold ">
                        <ion-icon name="play-circle"></ion-icon>
                    </span>
                </Button>
                <Modal
                    setShow={setShowTrailer}
                    show={showTrailer}
                    className="p-3 md:p-5 rounded-lg bg-slate-800 md:min-w-[960px] md:min-h-[540px] w-[100vw]"
                >
                    <div className="w-full">
                        <h3 className="font-bold text-xl mb-5">Trailer</h3>
                        <div className="w-full aspect-auto flex justify-center items-center">
                            <span className="text-slate-600 font-bold text-lg">
                                no trailer
                            </span>
                        </div>
                    </div>
                </Modal>
            </>
        );
    }
    const { results } = data;

    return (
        <>
            <Button onClick={() => setShowTrailer(true)} disable={disable}>
                <span>Watch Trailer</span>
                <span className="flex items-center justify-center text-xl">
                    <ion-icon name="play-circle"></ion-icon>
                </span>
            </Button>
            <Modal
                setShow={setShowTrailer}
                show={showTrailer}
                className="p-5 rounded-lg bg-slate-800 min-w-[960px] min-h-[540px]"
            >
                <div className="w-full">
                    <h3 className="font-bold text-xl mb-5">Trailer</h3>
                    <div className="w-full aspect-video">
                        <iframe
                            className="w-full h-full object-fill"
                            width="864"
                            height="486"
                            src={`https://www.youtube.com/embed/${results[0].key}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </Modal>
        </>
    );
};

ButtonWatchTrailer.propTypes = {
    movieId: PropTypes.number,
    disable: PropTypes.bool,
};

export default ButtonWatchTrailer;
