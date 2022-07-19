import React from "react";
import { useAppContext } from "../../contexts/AppProvider";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import { EffectFlip, Pagination } from "swiper";
import { useNavigate } from "react-router-dom";
import Image from "../Image";

const WatchlistMobile = () => {
    const { watchLists: data } = useAppContext();

    return (
        <Swiper
            effect={"flip"}
            grabCursor={true}
            pagination={true}
            navigation={true}
            modules={[EffectFlip, Pagination]}
        >
            {data?.map((item, index) => (
                <SwiperSlide key={item.id || index}>
                    <WatchItem movieInfo={item} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

const WatchItem = ({ movieInfo }) => {
    const { watchLists, setWatchLists } = useAppContext();
    const navigate = useNavigate();
    const handleRemoveWatchLists = (id) => {
        setWatchLists((prev) => prev.filter((item) => item.id !== id));
    };
    return (
        <div className="group relative rounded-xl bg-slate-800 p-4 max-w-[100vw] h-[500px]">
            <span
                onClick={() => {
                    handleRemoveWatchLists(movieInfo.id);
                }}
                className="absolute top-2 right-2 p-1 cursor-pointer flex justify-center items-center bg-slate-500 rounded-full text-white bg-opacity-60 invisible opacity-0 group-hover:visible group-hover:opacity-100  transition-all"
            >
                <ion-icon name="close"></ion-icon>
            </span>
            <Image
                src={`https://image.tmdb.org/t/p/w780/${
                    movieInfo.poster_path || movieInfo.backdrop_path
                }`}
                alt=""
                className="w-full h-full object-cover rounded-[inherit]"
            />
        </div>
    );
};

export default WatchlistMobile;
