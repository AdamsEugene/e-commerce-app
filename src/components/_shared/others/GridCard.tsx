"use client";

import React from "react";
import Link from "next/link";
import { Card, CardBody, CardFooter, Chip } from "@nextui-org/react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { GoSponsorTiers } from "react-icons/go";

import StyledImage from "../Styled/StyledImage";
import { siteConfig } from "@/src/config/site";
// import useResizeListener from "@/src/hooks/useResizeListener";
import { useAppStore } from "../../../providers/AppStoreProvider";
import imageByIndex from "@/src/utils/imageByIndex";
import { IconWrapper } from "./IconWrapper";
// import { getCurrencySymbol, isMoney } from "@/src/utils/functions";
import ProductTooltip from "./ProductTootip";
import { TProduct } from "@/src/types";

type PROPS = {
  numberOfItems?: number;
  baseLink?: string;
  data?: TProduct[];
};

export default function GridCard(props: PROPS) {
  const { baseLink, numberOfItems = 100, data } = props;

  // const { ref, products } = useResizeListener(232.797, numberOfItems);
  const addToSelectedProduct = useAppStore(
    (state) => state.addToSelectedProduct
  );
  const changePlan = useAppStore((state) => state.changePlan);
  const toggleDrawer = useAppStore((state) => state.toggleDrawer);
  const addToCart = useAppStore((state) => state.addToCart);

  return (
    <div
      // ref={ref}
      className="container mx-auto flex flex-col justify-center items-center gap-4"
    >
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {data?.slice(0, numberOfItems).map((item, index) => (
          <ProductTooltip item={item} key={item.id}>
            <Card
              shadow="sm"
              as={Link}
              href={`${baseLink ? baseLink : siteConfig.pages.product}/${
                item.id
              }`}
              key={index}
              isPressable
              onClick={() => {
                changePlan("default");
                addToSelectedProduct(item);
              }}
              // className="h-full"
            >
              <CardBody className="overflow-visible p-0 relative xs:!h-[200px] !h-[280px]">
                <div className="absolute top-1 right-1 flex flex-col gap-2 z-20">
                  <Chip
                    endContent={<IoStar />}
                    variant="flat"
                    color="secondary"
                    size="sm"
                  >
                    refurbish
                  </Chip>
                  <Chip
                    endContent={<GoSponsorTiers />}
                    variant="flat"
                    color="secondary"
                    size="sm"
                  >
                    sponsored
                  </Chip>
                </div>
                <StyledImage
                  shadow="none"
                  radius="lg"
                  width={300}
                  height={300}
                  alt={item.title}
                  className="product_image xs:w-full w-[100%] xs:!h-[200px] !h-[280px] !object-contain"
                  src={item?.thumbnail || imageByIndex(index)}
                  isZoomed
                />
                <IconWrapper
                  onClick={(event: Event) => {
                    event.stopPropagation();
                    addToCart("default", String(item.id));
                    toggleDrawer(true);
                  }}
                  className="bg-primary/10 text-primary cursor-pointer hover:bg-primary/30 transition duration-300 ease-in-out absolute z-10 bottom-3 right-3 !w-10 !h-10"
                >
                  <MdOutlineAddShoppingCart className="text-2xl" />
                </IconWrapper>
              </CardBody>
              <CardFooter className="text-small justify-between items-baseline">
                <b className="truncate">{item.title}</b>
                <p className="text-default-500">{item.price}</p>
              </CardFooter>
            </Card>
          </ProductTooltip>
        ))}
      </div>
    </div>
  );
}
