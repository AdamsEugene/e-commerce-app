"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "./productGallery.css";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import StyledCard from "../../StyledCard";
import Link from "next/link";
import { siteConfig } from "@/src/config/site";
import { useAppStore } from "@/src/providers/AppStoreProvider";
import productList from "@/src/utils/productList";

type PROPS = {
  onOpenChange: () => void;
};

export default function ProductGallery(props: PROPS) {
  const { onOpenChange } = props;

  const addToSelectedProduct = useAppStore(
    (state) => state.addToSelectedProduct
  );
  const changePlan = useAppStore((state) => state.changePlan);

  const topProducts = productList.slice(3, 12);

  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={16}
        freeMode={true}
        loop
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper_productGallery"
      >
        {topProducts.map((item) => (
          <SwiperSlide key={item.productId} className="!h-[120px]">
            <StyledCard
              {...item}
              as={Link}
              link={`${siteConfig.pages.product}/${item.productId}`}
              onClick={() => {
                changePlan("default");
                addToSelectedProduct(item);
                onOpenChange();
              }}
              className="h-[120px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
