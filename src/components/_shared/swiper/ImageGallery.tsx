"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FullScreen,
  FullScreenHandle,
  useFullScreenHandle,
} from "react-full-screen";
import { IoExpand } from "react-icons/io5";

import StyledImage from "../Styled/StyledImage";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./swiper.css";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
// import cartItems from "@/src/utils/cartItem";
import CustomNavigationButtons from "./CustomNavigationButtons";
import useScreenSize from "@/src/hooks/useScreenSize";
import { useRouter } from "next/navigation";
import { IconWrapper } from "../others/IconWrapper";
import ConditionalRenderAB from "../Conditional/ConditionalRenderAB";

type PROPS = {
  images?: string[];
  preview?: "sm" | "lg";
};

export default function ImageGallery({ images, preview }: PROPS) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const handle = useFullScreenHandle();

  const screenSize = useScreenSize();
  const params = useParams();
  const productId = params.product_id as string;

  // const getCurrentItem = cartItems.find((item) => item.productId === productId);

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
        className={`mySwiper2 xs:!w-full xs:!h-[80%] !h-[80%] ${
          preview === "sm"
            ? "!w-[100%] !h-[100%] xs:!w-[100%] xs:!h-[70vh]"
            : preview === "lg"
              ? "!w-[70vw] !h-[75.5vh] xs:!w-[100%] xs:!h-[70vh]"
              : ""
        }`}
      >
        {images?.map((item) => (
          <SwiperSlide key={item} className="xs:!w-full relative">
            <ConditionalRenderAB
              condition={!!preview}
              ComponentA={
                <FullScreen handle={handle}>
                  <ImageRender
                    handle={handle}
                    item={item}
                    productId={productId}
                    preview={preview}
                  />
                </FullScreen>
              }
              ComponentB={
                <ImageRender
                  handle={handle}
                  item={item}
                  productId={productId}
                  preview={preview}
                />
              }
            />
          </SwiperSlide>
        ))}
        <CustomNavigationButtons size={screenSize === "xs" ? "md" : "lg"} />
        <ConditionalRenderAB
          condition={!!preview}
          ComponentA={
            <IconWrapper
              onClick={handle.enter}
              className="bg-secondary/10 text-secondary cursor-pointer hover:bg-secondary/30 transition duration-300 ease-in-out !w-14 !h-14 !p-2 absolute z-10 bottom-4 right-4"
            >
              <IoExpand className="text-[70px]" />
            </IconWrapper>
          }
          ComponentB={null}
        />
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={screenSize === "xs" ? 4 : !preview ? 5 : 6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={`mySwiper ${
          preview === "sm"
            ? "!w-[100%] xs:!w-[100%]"
            : preview === "lg"
              ? "!w-[70vw] xs:!w-[100%]"
              : ""
        }`}
      >
        {images?.map((item) => (
          <SwiperSlide key={item}>
            <StyledImage
              src={item}
              alt={String(item)}
              shadow={preview ? "none" : "lg"}
              width={100}
              height={100}
              className="!h-[80px] !object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

type ImageProps = {
  item: string;
  productId: string;
  preview?: "sm" | "lg";
  handle: FullScreenHandle;
};

const ImageRender = ({ item, preview, productId, handle }: ImageProps) => {
  const router = useRouter();

  return (
    <StyledImage
      src={item}
      alt={String(item)}
      shadow={preview ? "none" : "lg"}
      width={30000}
      height={300}
      isZoomed
      className={`xs:!h-[100%] !h-[100%] !object-contain ${
        preview === "sm"
          ? "!w-[100%] !h-[65vh] xs:!w-[100%] xs:!h-[80vh]"
          : preview === "lg"
            ? "!w-[100%] !h-[72vh] xs:!w-[100%] xs:!h-[80vh]"
            : "cursor-pointer"
      } ${handle.active ? "!w-[100vw] !h-[100vh]" : ""}`}
      onClick={() =>
        !preview ? router.push(`${productId}/preview`) : undefined
      }
    />
  );
};
