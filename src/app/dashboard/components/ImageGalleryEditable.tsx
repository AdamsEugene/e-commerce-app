"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@nextui-org/react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "../../../components/swiper/swiper.css";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import cartItems from "@/src/utils/cartItem";
import StyledImage from "@/src/components/StyledImage";

export default function ImageGalleryEditable() {
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
        className="w-full h-470 mb-4 relative"
      >
        {[1, 2, 3, 4, 5].map((item) => (
          <SwiperSlide key={item}>
            <StyledImage
              src={getCurrentItem?.image}
              alt={String(item)}
              shadow="lg"
              width={300}
              height={300}
              className="!h-[400px]"
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
        className="w-full h-16 md:h-24 lg:h-32 xl:h-40 mx-auto box-border mySwiper-editable"
      >
        {[1, 2, 3, 4, 5].map((item) => (
          <SwiperSlide key={item}>
            <StyledImage
              src={getCurrentItem?.image}
              alt={String(item)}
              shadow="lg"
              width={100}
              height={100}
              className="!h-16 cursor-pointer"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
