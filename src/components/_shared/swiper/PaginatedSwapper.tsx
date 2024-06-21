"use client";

import { PropsWithChildren } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function PaginatedSwapper({ children }: PropsWithChildren) {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  return (
    <Swiper
      loop
      freeMode
      pagination={pagination}
      modules={[Pagination]}
      className="!w-full !h-full border-0 shadow-none rounded-none"
    >
      {children}
    </Swiper>
  );
}
