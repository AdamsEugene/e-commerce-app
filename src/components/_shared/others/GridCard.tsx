"use client";

import React from "react";
import Link from "next/link";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { MdOutlineAddShoppingCart } from "react-icons/md";

import StyledImage from "../Styled/StyledImage";
import { siteConfig } from "@/src/config/site";
import { useAppStore } from "../../../providers/AppStoreProvider";
import imageByIndex from "@/src/utils/imageByIndex";
import { IconWrapper } from "./IconWrapper";
import ProductTooltip from "./ProductTootip";
import { TProduct } from "@/src/types";
import Tags from "./Tags";
import ConditionalRenderAB from "../Conditional/ConditionalRenderAB";
import { addProductToCart } from "@/src/api/cartApis";

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
  const setCartData = useAppStore((state) => state.setCartData);
  const setIsAddingToCart = useAppStore((state) => state.setIsAddingToCart);
  const user = useAppStore((state) => state.user);

  return (
    <div className="container mx-auto flex flex-col justify-center items-center gap-4">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {data?.slice(0, numberOfItems).map((item, index) => (
          <div key={item.id} className="relative">
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
                  <Tags />
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
                </CardBody>
                <CardFooter className="text-small justify-between items-baseline">
                  <b className="truncate">{item.title}</b>
                  <p className="text-default-500">{item.price}</p>
                </CardFooter>
              </Card>
            </ProductTooltip>
            <IconWrapper
              onClick={async (event: Event) => {
                event.stopPropagation();
                addToCart("default", String(item.id));
                toggleDrawer(true);
                if (user) {
                  setIsAddingToCart(true);
                  const response = await addProductToCart({
                    userId: String(user.id),
                    products: [{ id: String(item.id), quantity: 1 }],
                  });
                  setCartData({ carts: [response] });
                }
              }}
              className="bg-primary/10 text-primary cursor-pointer hover:bg-primary/30 transition duration-300 ease-in-out absolute z-10 bottom-10 right-3 !w-10 !h-10"
            >
              <MdOutlineAddShoppingCart className="text-2xl" />
            </IconWrapper>
          </div>
        ))}
      </div>
    </div>
  );
}
