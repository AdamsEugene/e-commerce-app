"use client";

import React from "react";
import Link from "next/link";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  ScrollShadow,
  Tooltip,
} from "@nextui-org/react";
import { MdOutlineAddShoppingCart } from "react-icons/md";

import StyledImage from "../Styled/StyledImage";
import productList, { PRODUCTS } from "@/src/utils/productList";
import { siteConfig } from "@/src/config/site";
// import useResizeListener from "@/src/hooks/useResizeListener";
import { useAppStore } from "../../../providers/AppStoreProvider";
import imageByIndex from "@/src/utils/imageByIndex";
import { IconWrapper } from "./IconWrapper";
import { isMoney } from "@/src/utils/functions";
import ProductTooltip from "./ProductTootip";

type PROPS = {
  numberOfItems?: number;
  baseLink?: string;
  data?: PRODUCTS[];
};

export default function GridCard(props: PROPS) {
  const { baseLink, numberOfItems = productList.length, data } = props;

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
        {(
          data?.slice(0, numberOfItems) || productList.slice(0, numberOfItems)
        ).map((item, index) => (
          <ProductTooltip item={item} baseLink={baseLink}>
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
              // className="h-full"
            >
              <CardBody className="overflow-visible p-0 relative !h-[300px]">
                <StyledImage
                  shadow="none"
                  radius="lg"
                  width={300}
                  height={300}
                  alt={item.name}
                  className="object-cover product_image xs:w-full w-[216.8px] !h-[300px]"
                  src={item.image || imageByIndex(index)}
                  isZoomed
                />
                <IconWrapper
                  onClick={() => {
                    addToCart("default", item.productId);
                    toggleDrawer(true);
                  }}
                  className="bg-primary/10 text-primary cursor-pointer hover:bg-primary/30 transition duration-300 ease-in-out absolute z-10 bottom-3 right-3 !w-10 !h-10"
                >
                  <MdOutlineAddShoppingCart className="text-2xl" />
                </IconWrapper>
              </CardBody>
              <CardFooter className="text-small justify-between items-baseline">
                <b className="truncate">{item.name}</b>
                <p className="text-default-500">{item.price}</p>
              </CardFooter>
            </Card>
          </ProductTooltip>
        ))}
      </div>
    </div>
  );
}
