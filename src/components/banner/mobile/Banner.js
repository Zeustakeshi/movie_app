import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useGetMovieData from "../../../hooks/useGetMovieData";
import BannerItem from "./BannerItem";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

import { Autoplay, EffectCreative } from "swiper";

const BannerMobile = ({ detail, type }) => {
    const { data } = useGetMovieData(`${detail}/${type}`);

    const movies = data?.results || [];

    return (
        <section className="banner h-[290px] page-container mb-10 overflow-hidden max-w-[100vw]">
            <Swiper
                loop={true}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
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
                modules={[Autoplay, EffectCreative]}
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

export default BannerMobile;
