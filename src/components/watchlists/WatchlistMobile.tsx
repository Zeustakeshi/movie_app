import React from "react";
import { useAppContext } from "../../contexts/AppProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import { Autoplay, Pagination, EffectCreative } from "swiper";
import Image from "../Image";
import ButtonWatchNow from "../button/ButtonWatchNow";
import VoteAverage from "../voteAverage/VoteAverage";
import { IMoive } from "../../interfaces/Movie.interface";
import { IonIcon } from "@ionic/react";

const WatchlistMobile = () => {
    const { watchLists: data }: { watchLists: IMoive[] } = useAppContext();

    return (
        <div className="mb-8 mt-5 ">
            <h2 className="font-bold text-2xl mb-5">Your favorite</h2>
            {data.length > 0 ? (
                <Swiper
                    grabCursor={true}
                    slidesPerView="auto"
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    effect={"creative"}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: [0, 0, -400],
                        },
                        next: {
                            translate: ["100%", 0, 0],
                        },
                    }}
                    modules={[Autoplay, Pagination, EffectCreative]}
                >
                    {data?.map((item, index) => (
                        <SwiperSlide key={item.id || index}>
                            <WatchItem movieInfo={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <div className="w-full min-h-[100px] flex justify-center items-center  font-bold text-slate-600">
                    No watchList
                </div>
            )}
        </div>
    );
};

const WatchItem = ({ movieInfo }: { movieInfo: IMoive }) => {
    const { setWatchLists, setStoredWatchListValue } = useAppContext();
    const handleRemoveWatchLists = (id: number) => {
        setWatchLists((prev: IMoive[]) => {
            const newWatchList = prev.filter((item: IMoive) => item.id !== id);
            setStoredWatchListValue(newWatchList);
            return newWatchList;
        });
    };
    return (
        <div className="group relative rounded-xl bg-slate-800 p-4 max-w-[100vw] h-[500px]">
            <span
                onClick={() => {
                    handleRemoveWatchLists(movieInfo.id);
                }}
                className="absolute z-10 top-2 right-2 p-3 cursor-pointer flex justify-center items-center bg-slate-500 rounded-full text-white bg-opacity-30  transition-all"
            >
                <IonIcon name="close"></IonIcon>
            </span>
            <div className="relative w-full h-full z-0 rounded-[inherit]">
                <Image
                    src={`https://image.tmdb.org/t/p/w780/${
                        movieInfo.poster_path || movieInfo.backdrop_path
                    }`}
                    alt=""
                    className="w-full h-full object-fill rounded-[inherit]"
                />
                <div className="absolute bottom-6 left-2/4 -translate-x-2/4  w-[90%]">
                    <VoteAverage
                        voteAverage={movieInfo?.vote_average}
                        size="60px"
                        className="mb-5 text-primary"
                        bold="5px"
                        text="12px"
                    />
                    <ButtonWatchNow
                        movieID={movieInfo.id}
                        className=" px-2 py-3 w-full"
                    >
                        Watch now
                    </ButtonWatchNow>
                </div>
            </div>
        </div>
    );
};

export default WatchlistMobile;
