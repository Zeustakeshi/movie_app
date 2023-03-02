import { IonIcon } from "@ionic/react";
import React, { useEffect, useState } from "react";
import { useAppContext } from "../../contexts/AppProvider";
import useGetMovieData from "../../hooks/useGetMovieData";
import { IButtonWatchTrailerProps } from "../../interfaces/ButtonProps.interface";
import Modal from "../modal/Modal";
import Button from "./Button";

const ButtonWatchTrailer: React.FC<IButtonWatchTrailerProps> = ({
    movieId,
    disable,
}) => {
    const { isMobile } = useAppContext();
    const [showTrailer, setShowTrailer] = useState(false);
    const [path, setPath] = useState("");

    const createPath = () => {
        if (!showTrailer) return;
        return `movie/${movieId}/videos`;
    };
    const path2 = createPath();

    useEffect(() => {
        if (path2) {
            setPath(path2);
        }
    }, [showTrailer, path2]);

    const { data } = useGetMovieData(path);
    if (!data || !data.results || data.results.length <= 0) {
        return (
            <>
                <Button onClick={() => setShowTrailer(true)} disable={disable}>
                    <span>{isMobile ? "Trailer" : "Watch Trailer"}</span>
                    <span className="flex items-center justify-center text-base md:text-xl font-semibold ">
                        <IonIcon name="play-circle"></IonIcon>
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
                    <IonIcon name="play-circle"></IonIcon>
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
                            title="video"
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

export default ButtonWatchTrailer;
