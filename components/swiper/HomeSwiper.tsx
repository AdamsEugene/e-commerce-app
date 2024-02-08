"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./homeSwiper.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import StyledImage from "../StyledImage";
import imageByIndex from "@/utils/imageByIndex";

export default function HomeSwiper() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="homeSwiper"
      >
        <SwiperSlide>
          <StyledImage width={200} height={200} src={imageByIndex(4)} />
        </SwiperSlide>
        <SwiperSlide>
          <StyledImage width={200} height={200} src={imageByIndex(7)} />
        </SwiperSlide>
        <SwiperSlide>
          <StyledImage width={200} height={200} src={imageByIndex(8)} />
        </SwiperSlide>
        <SwiperSlide>
          <StyledImage width={200} height={200} src={imageByIndex(9)} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
