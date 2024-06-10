"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

import productList from "@/src/utils/productList";
import { Button, Card, CardBody, CardFooter } from "@nextui-org/react";
import { siteConfig } from "@/src/config/site";
import StyledImage from "../Styled/StyledImage";
import imageByIndex from "@/src/utils/imageByIndex";
import { useAppStore } from "@/src/providers/AppStoreProvider";
import useScreenSize from "@/src/hooks/useScreenSize";

export default function NormalSwapper() {
  const addToSelectedProduct = useAppStore(
    (state) => state.addToSelectedProduct
  );
  const changePlan = useAppStore((state) => state.changePlan);
  const screenSize = useScreenSize();
  const baseLink = "";

  return (
    <>
      <Swiper
        slidesPerView={screenSize === "xs" ? 2 : 5}
        spaceBetween={16}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        modules={[Navigation]}
        className=""
      >
        {productList.map((item, index) => (
          <SwiperSlide>
            <Card
              shadow="none"
              as={Link}
              href={`${baseLink ? baseLink : siteConfig.pages.product}/${
                item.productId
              }`}
              key={index}
              isPressable
              onClick={() => {
                changePlan("default");
                addToSelectedProduct(item);
              }}
              className="h-full w-full"
            >
              <CardBody className="overflow-visible p-0 h-full">
                <StyledImage
                  shadow="none"
                  radius="lg"
                  width={300}
                  height={300}
                  alt={item.name}
                  className="object-cover product_image xs:w-full !w-full !h-[300px]"
                  src={item.image || imageByIndex(index)}
                  isZoomed
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>{item.name}</b>
                <p className="text-default-500">{item.price}</p>
              </CardFooter>
            </Card>
          </SwiperSlide>
        ))}
        <Button
          isIconOnly
          radius="full"
          variant="faded"
          color="secondary"
          className="custom-prev absolute left-2 top-1/2 transform -translate-y-1/2 z-10"
        >
          <MdOutlineArrowBackIos className="text-xl" />
        </Button>
        <Button
          isIconOnly
          radius="full"
          variant="faded"
          color="secondary"
          className="custom-next absolute right-2 top-1/2 transform -translate-y-1/2 z-10"
        >
          <MdOutlineArrowForwardIos className="text-xl" />
        </Button>
      </Swiper>
    </>
  );
}
