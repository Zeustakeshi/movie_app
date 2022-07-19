import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useGetMovieData from "../../../hooks/useGetMovieData";
import BannerItem from "./BannerItem";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import { Autoplay, Pagination, EffectCreative } from "swiper";

const Banner = ({ detail, type }) => {
    const { data } = useGetMovieData(`${detail}/${type}`);

    const movies = data?.results || [];

    return (
        <section className="banner h-[500px] page-container mb-10 overflow-hidden ">
            <Swiper
                grabCursor={true}
                slidesPerView="auto"
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
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
                {movies.length <= 0
                    ? new Array(10).fill(0).map((item, index) => (
                          <SwiperSlide key={index}>
                              <BannerItem isLoading />
                          </SwiperSlide>
                      ))
                    : movies.map((movie) => {
                          return (
                              <SwiperSlide key={movie.id}>
                                  <BannerItem movieInfo={movie} />
                              </SwiperSlide>
                          );
                      })}
            </Swiper>
        </section>
    );
};

export default Banner;
