'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "./productGallery.css";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import StyledCard from "../StyledCard";

export default function ProductGallery() {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={16}
        freeMode={true}
        loop
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper_productGallery"
      >
        <SwiperSlide>
          <StyledCard />
        </SwiperSlide>
        <SwiperSlide>
          <StyledCard />
        </SwiperSlide>
        <SwiperSlide>
          <StyledCard />
        </SwiperSlide>
        <SwiperSlide>
          <StyledCard />
        </SwiperSlide>
        <SwiperSlide>
          <StyledCard />
        </SwiperSlide>
        <SwiperSlide>
          <StyledCard />
        </SwiperSlide>
        <SwiperSlide>
          <StyledCard />
        </SwiperSlide>
        <SwiperSlide>
          <StyledCard />
        </SwiperSlide>
        <SwiperSlide>
          <StyledCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
