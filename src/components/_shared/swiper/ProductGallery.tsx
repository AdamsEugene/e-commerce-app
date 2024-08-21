"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "./productGallery.css";

import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { FreeMode, Autoplay } from "swiper/modules";
import StyledCard from "../Styled/StyledCard";
import Link from "next/link";
import { siteConfig } from "@/src/config/site";
import { useAppStore } from "@/src/providers/AppStoreProvider";
import productList from "@/src/utils/productList";
import CustomNavigationButtons from "./CustomNavigationButtons";
import useScreenSize from "@/src/hooks/useScreenSize";
import { TProduct } from "@/src/types";
import { useUrlChangeListener } from "@/src/hooks/useUrlChangeListener";

type PROPS = {
  onOpenChange: () => void;
  bestSelling?: TProduct[];
  onClose: () => void;
};

export default function ProductGallery(props: PROPS) {
  const { bestSelling, onClose } = props;

  const addToSelectedProduct = useAppStore(
    (state) => state.addToSelectedProduct
  );
  const changePlan = useAppStore((state) => state.changePlan);
  const screenSize = useScreenSize();

  useUrlChangeListener(onClose);

  return (
    <>
      <Swiper
        slidesPerView={screenSize === "xs" ? 4 : 5}
        spaceBetween={16}
        freeMode={true}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        modules={[FreeMode, Autoplay]}
        className="mySwiper_productGallery"
      >
        {bestSelling?.map((item) => (
          <SwiperSlide key={item.id} className="!h-[120px]">
            <StyledCard
              data={item}
              as={Link}
              link={`${siteConfig.pages.product}/${item.id}`}
              onClick={() => {
                changePlan("default");
                addToSelectedProduct(item);
              }}
              className="h-[100%]"
            />
          </SwiperSlide>
        ))}
        <CustomNavigationButtons />
      </Swiper>
    </>
  );
}
