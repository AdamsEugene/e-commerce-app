import React from "react";
import NormalSwapper from "../swiper/NormalSwapper";
import { SwiperSlide } from "swiper/react";
import { GoSponsorTiers } from "react-icons/go";
import { Chip } from "@nextui-org/react";
import { IoStar } from "react-icons/io5";

export default function Tags() {
  return (
    <div className="absolute top-1 right-1 flex flex-col gap-2 z-20">
      <NormalSwapper
        direction="vertical"
        spaceBetween={2}
        slidesPerView={1}
        className="lg:!h-8"
      >
        <SwiperSlide>
          <Chip
            // endContent={<IoStar />}
            variant="flat"
            color="secondary"
            size="sm"
          >
            refurbish
          </Chip>
        </SwiperSlide>
        <SwiperSlide>
          <Chip
            endContent={<GoSponsorTiers />}
            variant="flat"
            color="success"
            size="sm"
          >
            sponsored
          </Chip>
        </SwiperSlide>
        <SwiperSlide>
          <Chip
            endContent={<IoStar className="text-warning" />}
            variant="flat"
            color="warning"
            size="sm"
          >
            refurbish
          </Chip>
        </SwiperSlide>
      </NormalSwapper>
    </div>
  );
}
