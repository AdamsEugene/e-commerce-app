"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./homeSwiper.css";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import StyledImage from "../StyledImage";
import imageByIndex from "@/src/utils/imageByIndex";

export default function HomeSwiper() {
  return (
    <div className="flex h-[24rem]">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="homeSwiper"
      >
        <SwiperSlide>
          <StyledImage width={200} height={200} src={imageByIndex(8)} />
        </SwiperSlide>
        <SwiperSlide>
          <StyledImage width={200} height={200} src={imageByIndex(23)} />
        </SwiperSlide>
        <SwiperSlide>
          <StyledImage width={200} height={200} src={imageByIndex(12)} />
        </SwiperSlide>
        <SwiperSlide>
          <StyledImage width={200} height={200} src={imageByIndex(316)} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 10050,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
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
    </div>
  );
}
