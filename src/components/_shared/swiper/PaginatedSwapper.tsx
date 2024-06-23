"use client";

import { PropsWithChildren } from "react";
import { Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

type PROPS = {
  direction?: "horizontal" | "vertical";
};

export default function PaginatedSwapper(props: PropsWithChildren<PROPS>) {
  const { children, direction } = props;

  const pagination = {
    clickable: true,
    renderBullet: function (_: number, className: string) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  return (
    <Swiper
      loop
      freeMode
      direction={direction}
      pagination={pagination}
      modules={[Pagination]}
      className="!w-full !h-full border-0 shadow-none rounded-none"
    >
      {children}
    </Swiper>
  );
}
