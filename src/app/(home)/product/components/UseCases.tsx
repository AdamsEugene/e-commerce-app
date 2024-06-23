"use client";

import { SwiperSlide } from "swiper/react";
import StyledImage from "@/src/components/_shared/Styled/StyledImage";
import VideoPlayer from "@/src/components/_shared/Styled/VideoPlayer";
import imageByIndex from "@/src/utils/imageByIndex";
import React from "react";
import NormalSwapper from "@/src/components/_shared/swiper/NormalSwapper";

const vids = [
  "https://youtu.be/YInQ137_J3Y?si=pvws--5hQah3_iWt",
  "https://youtu.be/FB_am3ZPY7I?si=0hEe6DjwG6IzVLGI",
  "https://youtu.be/nr_kRfTJfKc?si=PwK34DWDBxJ0hl-Z",
  "https://youtu.be/b1WpYxnuebQ?si=i8AzyiPI4Lhan21i",
];

export default function UseCases() {
  return (
    <div className="flex flex-col w-full gap-8">
      <div>
        <NormalSwapper
          slidesPerView={1}
          className="!h-[min(500px,60vh)] xs:!h-[min(300px,40vh)]"
        >
          {vids.map((vid) => (
            <SwiperSlide key={vid}>
              <VideoPlayer url={vid} />
            </SwiperSlide>
          ))}
        </NormalSwapper>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-y-6 gap-x-2">
        <div className="w-full">
          <StyledImage
            shadow="none"
            radius="lg"
            width={3000}
            height={3000}
            alt={"item.name"}
            className="object-cover product_image_full xs:w-full w-full !h-[min(500px,60vh)] xs:!h-[min(400px,50vh)]"
            src={imageByIndex(13)}
            isZoomed
          />
        </div>
        <div>UseCases</div>
        <div>UseCases</div>
        <div className="w-full">
          <StyledImage
            shadow="none"
            radius="lg"
            width={3000}
            height={3000}
            alt={"item.name"}
            className="object-cover product_image_full xs:w-full w-full !h-[min(500px,60vh)] xs:!h-[min(400px,50vh)]"
            src={imageByIndex(16)}
            isZoomed
          />
        </div>
      </div>
    </div>
  );
}
