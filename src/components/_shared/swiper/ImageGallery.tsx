"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@nextui-org/button";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import StyledImage from "../Styled/StyledImage";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./swiper.css";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import cartItems from "@/src/utils/cartItem";

export default function ImageGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const params = useParams();
  const productId = params.product_id as string;

  const getCurrentItem = cartItems.find((item) => item.productId === productId);

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
        className="mySwiper2 xs:!w-full xs:!h-[350px] h-[470px]"
      >
        {[1, 2, 3, 4, 5].map((item) => (
          <SwiperSlide key={item} className="xs:!w-full">
            <StyledImage
              src={getCurrentItem?.image}
              alt={String(item)}
              shadow="lg"
              width={300}
              height={300}
              className="xs:!h-[350px] !h-[470px]"
            />
          </SwiperSlide>
        ))}
        <Button
          isIconOnly
          radius="full"
          variant="solid"
          color="secondary"
          className="custom-prev absolute left-2 top-1/2 transform -translate-y-1/2 z-10"
        >
          <MdOutlineArrowBackIos className="text-xl" />
        </Button>
        <Button
          isIconOnly
          radius="full"
          variant="solid"
          color="secondary"
          className="custom-next absolute right-2 top-1/2 transform -translate-y-1/2 z-10"
        >
          <MdOutlineArrowForwardIos className="text-xl" />
        </Button>
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
        {[1, 2, 3, 4, 5].map((item) => (
          <SwiperSlide key={item}>
            <StyledImage
              src={getCurrentItem?.image}
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
