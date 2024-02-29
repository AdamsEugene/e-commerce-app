"use client";

import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import { Button } from "@nextui-org/button";
import StyledImage from "../StyledImage";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./homeSwiper.css";
import productList, { PRODUCTS } from "@/src/utils/productList";
import { title, subtitle } from "@/src/components/primitives";

// Define the SwiperCarouselProps type
type SwiperCarouselProps = {
  images: PRODUCTS[];
  width: number;
  height: number;
  delay: number;
  half?: boolean;
};

// SwiperCarousel component
const SwiperCarousel: FC<SwiperCarouselProps> = ({
  images,
  width,
  height,
  delay,
  half,
}) => (
  <Swiper
    spaceBetween={30}
    effect={"fade"}
    autoplay={{
      delay,
      disableOnInteraction: false,
    }}
    loop={true}
    modules={[EffectFade, Autoplay]}
    className="homeSwiper"
  >
    {images.map((image, index) => (
      <SwiperSlide
        key={index}
        className={`relative h-[${half ? "17rem" : "34rem"}]`}
      >
        <div
          className={`hero-container relative h-[${half ? "17rem" : "34rem"}]`}
        >
          <StyledImage
            width={width}
            height={height}
            src={image.img}
            className={`object-cover h-[${half ? "17rem" : "34rem"}]`}
          />
          <div className="z-20 absolute inset-0 bg-black opacity-50"></div>
          <div className="w-[90%] z-30 absolute top-1/2 left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="w-[60%] text-left">
              <h2 className={title({ size: half ? "sm" : "lg" })}>
                {image.title}
              </h2>
              <p className={`line-clamp-4 mt-4`}>{image.description}</p>
            </div>
            <div className="w-full flex gap-4 mt-4">
              <Button
                // className="text-tiny text-white bg-black/20"
                variant="solid"
                color="default"
                radius="full"
                size={half ? "sm" : "lg"}
              >
                Buy Now
              </Button>
              <Button
                // className="text-tiny text-white bg-black/20"
                variant="solid"
                color="secondary"
                radius="full"
                size={half ? "sm" : "lg"}
              >
                Add To Cart
              </Button>
              <Button
                // className="text-tiny text-white bg-black/20"
                variant="flat"
                color="default"
                radius="full"
                size={half ? "sm" : "lg"}
              >
                See More
              </Button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

// HomeSwiper component
const HomeSwiper: FC = () => {
  const heroImages = productList.slice(0, 5);
  const heroImages1 = productList.slice(5, 11);
  const heroImages2 = productList.slice(11, 17);

  return (
    <div className="flex h-[34rem]">
      <div className="w-[70%] h-[34rem]">
        <SwiperCarousel
          images={heroImages}
          width={200}
          height={200}
          delay={10000}
        />
      </div>
      <div className="flex flex-col w-[30%]">
        <div className="h-[17rem]">
          <SwiperCarousel
            images={heroImages1}
            width={100}
            height={50}
            delay={14000}
            half
          />
        </div>
        <div className="h-[17rem]">
          <SwiperCarousel
            images={heroImages2}
            width={100}
            height={50}
            delay={17000}
            half
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSwiper;
