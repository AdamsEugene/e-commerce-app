"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";

import CustomNavigationButtons from "./CustomNavigationButtons";
import { ReactNode } from "react";

type PROPS = {
  children: ReactNode[];
};

export default function AutoPlaySwapper({ children }: PROPS) {
  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      }}
      navigation={{
        prevEl: ".custom-prev",
        nextEl: ".custom-next",
      }}
      modules={[Autoplay, Navigation]}
      className="max-w-[1180px] xs:max-w-[100%] w-full"
    >
      {Array.from({ length: children.length }, (_, i) => i).map((index) => (
        <SwiperSlide key={index}>{children[index]}</SwiperSlide>
      ))}
      <CustomNavigationButtons />
    </Swiper>
  );
}
