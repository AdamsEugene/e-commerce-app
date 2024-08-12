"use client";

import { SwiperSlide } from "swiper/react";
import StyledImage from "@/src/components/_shared/Styled/StyledImage";
import VideoPlayer from "@/src/components/_shared/Styled/VideoPlayer";
import imageByIndex from "@/src/utils/imageByIndex";
import React from "react";
import NormalSwapper from "@/src/components/_shared/swiper/NormalSwapper";
import { subtitle, title } from "@/src/components/others/primitives";
import { TProduct } from "@/src/types";

type PROPS = {
  product: TProduct;
};

const vids = [
  "https://youtu.be/YInQ137_J3Y?si=pvws--5hQah3_iWt",
  "https://youtu.be/FB_am3ZPY7I?si=0hEe6DjwG6IzVLGI",
  "https://youtu.be/nr_kRfTJfKc?si=PwK34DWDBxJ0hl-Z",
  "https://youtu.be/b1WpYxnuebQ?si=i8AzyiPI4Lhan21i",
];

export default function UseCases({ product }: PROPS) {
  const images = product.images?.slice(0, 2);

  return (
    <div className="flex flex-col w-full gap-8">
      <div>
        {/* <NormalSwapper
          slidesPerView={1}
          className="!h-[min(500px,60vh)] xs:!h-[min(300px,40vh)]"
        >
          {vids.map((vid) => (
            <SwiperSlide key={vid}>
              <VideoPlayer url={vid} />
            </SwiperSlide>
          ))}
        </NormalSwapper> */}
      </div>
      {images?.map((image, index) => (
        <div
          className={`flex ${index === 1 ? "flex-row-reverse" : ""} xs:flex-col-reverse gap-y-6 gap-x-2`}
        >
          <div className="flex-1">
            <StyledImage
              shadow="none"
              radius="lg"
              width={3000}
              height={3000}
              alt={"item.name"}
              className="object-cover product_image_full xs:w-full w-full !h-[min(500px,60vh)] xs:!h-[min(400px,50vh)]"
              src={image}
              isZoomed
            />
          </div>
          <div className="inline-block max-w-lg text-center justify-center flex-1">
            <h1 className={title()}>Make&nbsp;</h1>
            <h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
            <br />
            <h1 className={title()}>
              websites regardless of your design experience.
            </h1>
            <h2 className={subtitle({ class: "mt-4" })}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
              fugiat minima ipsam numquam aut assumenda quam? Cumque, expedita
              rerum exercitationem nisi sed ratione quo sit, repudiandae
              doloremque deleniti laboriosam nulla. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Deserunt fugiat minima ipsam numquam
              aut assumenda quam? Cumque, expedita rerum exercitationem nisi sed
              ratione quo sit, repudiandae doloremque deleniti laboriosam nulla.
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}
