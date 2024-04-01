"use client";

import { FC } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import { Button } from "@nextui-org/button";
import StyledImage from "../StyledImage";
import productList, { PRODUCTS } from "@/src/utils/productList";
import { title } from "@/src/components/primitives";
import { siteConfig } from "@/src/config/site";
import { useAppStore } from "@/src/providers/AppStoreProvider";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./homeSwiper.css";

type SwiperCarouselProps = {
  products: PRODUCTS[];
  width: number;
  height: number;
  delay: number;
  half?: boolean;
};

const SwiperCarousel: FC<SwiperCarouselProps> = ({
  products,
  width,
  height,
  delay,
  half,
}) => {
  const addToBuyNow = useAppStore((state) => state.addToBuyNow);
  const addToCart = useAppStore((state) => state.addToCart);

  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      autoplay={{
        delay,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop={true}
      modules={[EffectFade, Autoplay]}
      className="homeSwiper"
    >
      {products.map((product, index) => (
        <SwiperSlide
          key={index}
          className={`rounded-none relative h-[${half ? "17rem" : "34rem"}]`}
        >
          <div
            className={`w-full hero-container relative h-[${
              half ? "17rem" : "34rem"
            }]`}
          >
            <StyledImage
              width={width}
              height={height}
              src={product.img}
              className={`object-cover h-[${half ? "17rem" : "34rem"}]`}
            />
            <div className="z-20 absolute inset-0 bg-black opacity-60"></div>
            <div className="w-[90%] z-30 absolute top-1/2 left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="w-[60%] text-left">
                <h2 className={title({ size: half ? "sm" : "lg" })}>
                  <span className="text-white">{product.title}</span>
                </h2>
                <p className={`line-clamp-4 mt-4 text-white`}>
                  {product.description}
                </p>
              </div>
              <div className="w-full flex gap-4 mt-4">
                <Button
                  as={Link}
                  href={`${siteConfig.pages.product}/${product.productId}/${siteConfig.pages.buyNow}`}
                  variant="solid"
                  color="default"
                  radius="full"
                  size={half ? "sm" : "lg"}
                  onClick={() => addToBuyNow("default", product.productId)}
                >
                  Buy Now
                </Button>
                <Button
                  variant="solid"
                  color="secondary"
                  radius="full"
                  size={half ? "sm" : "lg"}
                  onClick={() => addToCart("default", product.productId)}
                >
                  Add To Cart
                </Button>
                <Button
                  as={Link}
                  href={`${siteConfig.pages.products}/${product.title}`}
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
};

const HomeSwiper: FC = () => {
  const products = productList.slice(0, 5);
  const products1 = productList.slice(5, 11);
  const products2 = productList.slice(11, 17);

  return (
    <div className="flex h-[34rem]">
      <div className="w-[70%] h-[34rem]">
        <SwiperCarousel
          products={products}
          width={200}
          height={200}
          delay={10000}
        />
      </div>
      <div className="flex flex-col w-[30%]">
        <div className="h-[17rem]">
          <SwiperCarousel
            products={products1}
            width={100}
            height={50}
            delay={14000}
            half
          />
        </div>
        <div className="h-[17rem]">
          <SwiperCarousel
            products={products2}
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
