"use client";

import Link from "next/link";
import { SwiperSlide } from "swiper/react";
import { Card, CardBody, CardFooter } from "@nextui-org/react";

import "swiper/css";
import "swiper/css/navigation";

import productList, { PRODUCTS } from "@/src/utils/productList";
import { siteConfig } from "@/src/config/site";
import imageByIndex from "@/src/utils/imageByIndex";
import { useAppStore } from "@/src/providers/AppStoreProvider";
import StyledImage from "@/src/components/_shared/Styled/StyledImage";
import NormalSwapper from "@/src/components/_shared/swiper/NormalSwapper";
import PaginatedSwapper from "@/src/components/_shared/swiper/PaginatedSwapper";

export default function RecommendedAds() {
  return (
    <NormalSwapper>
      {productList.map((item, index) => (
        <SwiperSlide key={index}>
          <Product item={item} />
        </SwiperSlide>
      ))}
    </NormalSwapper>
  );
}

const Product = ({ item }: { item: PRODUCTS }) => {
  const addToSelectedProduct = useAppStore(
    (state) => state.addToSelectedProduct
  );
  const changePlan = useAppStore((state) => state.changePlan);
  const baseLink = "";

  return (
    <Card
      shadow="none"
      as={Link}
      href={`${baseLink ? baseLink : siteConfig.pages.product}/${
        item.productId
      }`}
      key={item.productId}
      isPressable
      onClick={() => {
        changePlan("default");
        addToSelectedProduct(item);
      }}
      className="h-full w-full"
    >
      <CardBody className="overflow-visible p-0 h-full">
        <PaginatedSwapper>
          <SwiperSlide>
            <StyledImage
              shadow="none"
              radius="lg"
              width={300}
              height={300}
              alt={item.name}
              className="object-cover product_image xs:w-full !w-full !h-[300px] xs:!h-[250px]"
              src={item.image || imageByIndex(+item.productId)}
              isZoomed
            />
          </SwiperSlide>
          <SwiperSlide>
            <StyledImage
              shadow="none"
              radius="lg"
              width={300}
              height={300}
              alt={item.name}
              className="object-cover product_image xs:w-full !w-full !h-[300px] xs:!h-[250px]"
              src={item.image || imageByIndex(+item.productId)}
              isZoomed
            />
          </SwiperSlide>
        </PaginatedSwapper>
      </CardBody>
      <CardFooter className="text-small justify-between">
        <b>{item.name}</b>
        <p className="text-default-500">{item.price}</p>
      </CardFooter>
    </Card>
  );
};
