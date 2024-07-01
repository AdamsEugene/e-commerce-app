"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import StyledImage from "../Styled/StyledImage";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./swiper.css";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
// import cartItems from "@/src/utils/cartItem";
import CustomNavigationButtons from "./CustomNavigationButtons";
import useScreenSize from "@/src/hooks/useScreenSize";

type PROPS = {
  images?: string[];
};

export default function ImageGallery({ images }: PROPS) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const screenSize = useScreenSize();
  const params = useParams();
  const productId = params.product_id as string;

  // const getCurrentItem = cartItems.find((item) => item.productId === productId);

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={1}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 xs:!w-full xs:!h-[80%] !h-[80%]"
      >
        {images?.map((item) => (
          <SwiperSlide key={item} className="xs:!w-full">
            <StyledImage
              src={item}
              alt={String(item)}
              shadow="lg"
              width={300}
              height={300}
              className="xs:!h-[100%] !h-[100%]"
            />
          </SwiperSlide>
        ))}
        <CustomNavigationButtons size={screenSize === "xs" ? "md" : "lg"} />
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
        {images?.map((item) => (
          <SwiperSlide key={item}>
            <StyledImage
              src={item}
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
