"use client";

import { FC } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import { Button } from "@nextui-org/button";
import StyledImage from "../Styled/StyledImage";
import productList, { PRODUCTS } from "@/src/utils/productList";
import { title } from "@/src/components/others/primitives";
import { siteConfig } from "@/src/config/site";
import { useAppStore } from "@/src/providers/AppStoreProvider";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./homeSwiper.css";
import { TProduct } from "@/src/types";
import { getRandomSubsets } from "@/src/utils/functions";
import { addProductToCart } from "@/src/api/cartApis";

type SwiperCarouselProps = {
  products: TProduct[];
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
  const toggleDrawer = useAppStore((state) => state.toggleDrawer);
  const setCartData = useAppStore((state) => state.setCartData);
  const setIsAddingToCart = useAppStore((state) => state.setIsAddingToCart);
  const user = useAppStore((state) => state.user);

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
            className={`w-full hero-container bg-default-50 relative h-[${
              half ? "17rem" : "34rem"
            }]`}
          >
            <StyledImage
              width={width}
              height={height}
              src={product?.images?.[0] || product.thumbnail}
              className={`!object-fill h-[${half ? "17rem" : "34rem"}]`}
            />
            <div className="z-20 absolute inset-0 bg-black opacity-60"></div>
            <div className="w-[90%] z-30 absolute top-1/2 left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col justify-center items-center">
              <div className="w-[80%] ">
                <h2 className={title({ size: half ? "sm" : "lg" })}>
                  <span className="text-white line-clamp-1">
                    {product.title}
                  </span>
                </h2>
                <p className={`mt-4 text-white line-clamp-3`}>
                  {product.description}
                </p>
              </div>
              <div className="w-full flex gap-4 mt-4 items-center justify-center">
                <Button
                  as={Link}
                  href={`${siteConfig.pages.product}/${product.id}/${siteConfig.pages.buyNow}`}
                  variant="solid"
                  color="default"
                  radius="full"
                  size={half ? "sm" : "lg"}
                  onClick={async () => {
                    addToBuyNow("default", String(product.id));
                    if (user) {
                      setIsAddingToCart(true);
                      const response = await addProductToCart({
                        userId: String(user.id),
                        products: [{ id: String(product.id), quantity: 1 }],
                      });
                      setCartData({ carts: [response] });
                    }
                  }}
                >
                  Buy Now
                </Button>
                <Button
                  variant="solid"
                  color="secondary"
                  radius="full"
                  size={half ? "sm" : "lg"}
                  onClick={async () => {
                    addToCart("default", String(product.id));
                    toggleDrawer(true);
                    if (user) {
                      setIsAddingToCart(true);
                      const response = await addProductToCart({
                        userId: String(user.id),
                        products: [{ id: String(product.id), quantity: 1 }],
                      });
                      setCartData({ carts: [response] });
                    }
                  }}
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

type PROPS = {
  products: TProduct[];
  total: number;
};

const HomeSwiper: FC<PROPS> = ({ products, total }) => {
  const randomSubsets = getRandomSubsets(products, 10, 3);

  return (
    <div className="flex xs:h-[min(25rem,60vh)] h-[34rem]">
      <div className="xs:w-full xs:h-[min(25rem,60vh)] w-[60%] h-[34rem]">
        <SwiperCarousel
          products={randomSubsets[0]}
          width={200}
          height={544}
          delay={10000}
        />
      </div>
      <div className="w-[40%] xs:hidden flex-col">
        <div className="h-[17rem]">
          <SwiperCarousel
            products={randomSubsets[1]}
            width={100}
            height={272}
            delay={14000}
            half
          />
        </div>
        <div className="h-[17rem]">
          <SwiperCarousel
            products={randomSubsets[2]}
            width={100}
            height={272}
            delay={17000}
            half
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSwiper;
