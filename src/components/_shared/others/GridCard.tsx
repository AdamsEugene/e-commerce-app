"use client";

import React from "react";
import Link from "next/link";
import { Card, CardBody, CardFooter } from "@nextui-org/react";

import StyledImage from "../Styled/StyledImage";
import productList, { PRODUCTS } from "@/src/utils/productList";
import { siteConfig } from "@/src/config/site";
import useResizeListener from "@/src/hooks/useResizeListener";
import { useAppStore } from "../../../providers/AppStoreProvider";
import imageByIndex from "@/src/utils/imageByIndex";

type PROPS = {
  numberOfItems?: number;
  baseLink?: string;
  data?: PRODUCTS[];
};

export default function GridCard(props: PROPS) {
  const { baseLink, numberOfItems = productList.length, data } = props;

  const { ref, products } = useResizeListener(232.797, numberOfItems);
  const addToSelectedProduct = useAppStore(
    (state) => state.addToSelectedProduct
  );
  const changePlan = useAppStore((state) => state.changePlan);

  return (
    <div
      ref={ref}
      className="container mx-auto flex flex-col justify-center items-center gap-4"
    >
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {(
          data?.slice(0, numberOfItems) || productList.slice(0, numberOfItems)
        ).map((item, index) => (
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
          >
            <CardBody className="overflow-visible p-0">
              <StyledImage
                shadow="none"
                radius="lg"
                width={300}
                height={300}
                alt={item.name}
                className="object-cover product_image xs:w-full w-[216.8px]"
                src={item.image || imageByIndex(index)}
                isZoomed
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.name}</b>
              <p className="text-default-500">{item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

const Advertisement = () => {
  return (
    <div className="w-full mb-4">
      <Card>
        <CardBody>
          <div className="h-[150px]">Advertisement</div>
        </CardBody>
      </Card>
    </div>
  );
};
