"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Card, CardBody, CardFooter } from "@nextui-org/react";

import StyledImage from "./StyledImage";
import productList from "@/utils/productList";
import { siteConfig } from "@/config/site";

type PROPS = {
  numberOfItems?: number;
};

export default function GridCard(props: PROPS) {
  const { numberOfItems = productList.length } = props;
  const router = useRouter();

  const navigateTo = (id: string) => {
    router.push(`${siteConfig.pages.product}/${id}`, { scroll: true });
  };
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {productList.slice(0, numberOfItems).map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => navigateTo(item.productId)}
          // className="w-1/6"
        >
          <CardBody className="overflow-visible p-0">
            <StyledImage
              shadow="sm"
              radius="lg"
              width={300}
              height={300}
              alt={item.title}
              className="object-cover product_image"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
