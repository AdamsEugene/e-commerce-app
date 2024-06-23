"use client";

import { PropsWithChildren } from "react";
import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import useScreenSize from "@/src/hooks/useScreenSize";
import CustomNavigationButtons from "./CustomNavigationButtons";

type PROPS = {
  className?: string;
  slidesPerView?: number;
};

export default function NormalSwapper(props: PropsWithChildren<PROPS>) {
  const { children, className, slidesPerView } = props;

  const screenSize = useScreenSize();

  return (
    <Swiper
      loop
      slidesPerView={
        slidesPerView ? slidesPerView : screenSize === "xs" ? 2 : 5
      }
      spaceBetween={slidesPerView === 1 ? 1 : 16}
      navigation={{
        prevEl: ".custom-prev",
        nextEl: ".custom-next",
      }}
      modules={[Navigation]}
      className={`!h-[342px] xs:!h-[292px] ${className}`}
    >
      {children}
      <CustomNavigationButtons />
    </Swiper>
  );
}
