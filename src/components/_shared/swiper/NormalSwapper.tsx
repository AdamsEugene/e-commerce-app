"use client";

import { PropsWithChildren } from "react";
import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";
import useScreenSize from "@/src/hooks/useScreenSize";
import CustomNavigationButtons from "./CustomNavigationButtons";
import { SwiperOptions } from "swiper/types";
import ConditionalRender from "../Conditional/ConditionalRender";

type PROPS = {
  className?: string;
  slidesPerView?: number;
  showNavigation?: boolean;
};

export default function NormalSwapper(
  props: PropsWithChildren<PROPS & SwiperOptions>
) {
  const { children, className, slidesPerView, showNavigation, ...others } =
    props;

  const screenSize = useScreenSize();

  return (
    <Swiper
      loop
      slidesPerView={
        slidesPerView ? slidesPerView : screenSize === "xs" ? 2 : 5
      }
      spaceBetween={slidesPerView === 1 ? 1 : 16}
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
      }}
      navigation={{
        prevEl: ".custom-prev",
        nextEl: ".custom-next",
      }}
      modules={[Navigation, Autoplay]}
      className={`!h-[342px] xs:!h-[292px] ${className}`}
      {...others}
    >
      {children}
      <ConditionalRender
        condition={!!showNavigation}
        Component={<CustomNavigationButtons />}
      />
    </Swiper>
  );
}
