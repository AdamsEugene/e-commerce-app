"use client";

import Link from "next/link";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Chip,
  Image,
} from "@nextui-org/react";
import StyledImage from "../Styled/StyledImage";
import imageByIndex from "@/src/utils/imageByIndex";
import { siteConfig } from "@/src/config/site";
import { useAppStore } from "@/src/providers/AppStoreProvider";
import { TProduct } from "@/src/types";
import { useUrlChangeListener } from "@/src/hooks/useUrlChangeListener";
import ConditionalRender from "../Conditional/ConditionalRender";
import NormalSwapper from "./NormalSwapper";
import { SwiperSlide } from "swiper/react";

type PROPS = {
  onOpenChange?: () => void;
  munPerRow?: number;
  featuresCollections?: TProduct[];
  showPrice?: boolean;
};

export default function StyledCardGrid(props: PROPS) {
  const { onOpenChange, munPerRow, featuresCollections, showPrice } = props;
  //  const addToSelectedProduct = useAppStore(
  //    (state) => state.addToSelectedProduct
  //  );
  const changePlan = useAppStore((state) => state.changePlan);

  useUrlChangeListener(onOpenChange);

  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-${
        onOpenChange ? 4 : 5
      } md:grid-cols-${onOpenChange ? 4 : 5} lg:grid-cols-${
        onOpenChange ? 4 : 5
      } xl:grid-cols-${onOpenChange ? 4 : 5} gap-${onOpenChange ? 3 : 4}`}
    >
      {featuresCollections?.slice(0, munPerRow).map((item) => (
        <Card
          isFooterBlurred
          isPressable
          radius="lg"
          as={Link}
          href={
            showPrice
              ? `${siteConfig.pages.product}/${item.id}`
              : ` ${siteConfig.pages.products}/${item.category}`
          }
          key={item.title}
          className="border-none relative"
          onClick={() => {
            changePlan("default");
            // addToSelectedProduct(item);
          }}
        >
          {/* <NormalSwapper slidesPerView={1} className="!h-48" loop> */}
            {/* {item.images?.map((image) => (
              <SwiperSlide key={image}> */}
            <Image
              alt="Woman listing to music"
              className={`object-cover ${
                onOpenChange ? " h-[170px] w-[175px]" : " h-[192px] w-[223px]"
              }`}
              as={StyledImage}
              height={192}
              src={item.thumbnail}
              width={223}
              isZoomed
            />
            {/* </SwiperSlide>
            ))} */}
          {/* </NormalSwapper> */}
          <ConditionalRender
            condition={!!showPrice}
            Component={
              <Chip
                content="5"
                color="default"
                size="sm"
                className="absolute right-1 top-1 z-10 font-bold"
              >
                ${item.price}
              </Chip>
            }
          />
          <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-white/80 truncate">{item.title}</p>
            {/* <Button
              className="text-tiny text-white bg-black/20"
              variant="flat"
              color="default"
              radius="lg"
              size="sm"
            >
              Notify me
            </Button> */}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
