"use client";

import React from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/react";

import StyledImage from "./StyledImage";
import productList, { PRODUCTS } from "@/src/utils/productList";
import { siteConfig } from "@/src/config/site";
import Link from "next/link";
import useResizeListener from "@/src/hooks/useResizeListener";

type PROPS = {
  numberOfItems?: number;
};

export default function GridCard(props: PROPS) {
  const { numberOfItems = productList.length } = props;

  const { ref, products } = useResizeListener(232.797, numberOfItems);

  return (
    <div
      ref={ref}
      className="container flex flex-col justify-center items-center gap-4"
    >
      {products.map((product, i) => (
        <div
          key={i}
          className="flex flex-col justify-center items-center gap-8"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {product.map((item, index) => (
              <Card
                shadow="sm"
                as={Link}
                href={`${siteConfig.pages.product}/${item.productId}`}
                key={index}
                isPressable
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
          {i % 2 !== 0 && i !== products.length - 1 && <Advertisement />}
        </div>
      ))}
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
