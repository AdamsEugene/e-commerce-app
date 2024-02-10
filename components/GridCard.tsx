"use client";

import React from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/react";

import StyledImage from "./StyledImage";
import productList from "@/utils/productList";
import { siteConfig } from "@/config/site";
import Link from "next/link";

type PROPS = {
  numberOfItems?: number;
};

export default function GridCard(props: PROPS) {
  const { numberOfItems = productList.length } = props;

  const navigateTo = (id: string) => {};

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {productList.slice(0, numberOfItems).map((item, index) => (
        <Card
          shadow="sm"
          as={Link}
          href={`${siteConfig.pages.product}/${item.productId}`}
          key={index}
          isPressable
          // onPress={() => navigateTo(item.productId)}
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
