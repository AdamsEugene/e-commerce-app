"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import StyledImage from "../StyledImage";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./swiper.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import imageByIndex from "@/utils/imageByIndex";

export default function ImageGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={1}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <SwiperSlide key={item}>
            <StyledImage
              src={imageByIndex(item)}
              alt={String(item)}
              shadow="lg"
              width={300}
              height={300}
              className="!h-[470px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <SwiperSlide key={item}>
            <StyledImage
              src={imageByIndex(item)}
              alt={String(item)}
              shadow="lg"
              width={100}
              height={100}
              className="!h-[80px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
