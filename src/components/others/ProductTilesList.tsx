"use client";

import React, { Fragment } from "react";
import StyledImage from "../_shared/Styled/StyledImage";
import imageByIndex from "@/src/utils/imageByIndex";
import { Button, ButtonGroup } from "@nextui-org/button";
import Link from "next/link";
import { siteConfig } from "@/src/config/site";
import { Card, CardBody, Divider } from "@nextui-org/react";
import ConditionalRender from "../_shared/Conditional/ConditionalRender";
import { useAppStore } from "@/src/providers/AppStoreProvider";

export default function ProductTilesList() {
  return (
    <div className="container flex flex-col items-center justify-center !gap-8 mb-4">
      {[1, 2, 3, 4, 5, 6].map((item, index) => (
        <Fragment key={index}>
          <Product key={index + 5 * index} item={item} />
          <ConditionalRender
            condition={index + 1 !== 6}
            Component={<Divider />}
          />
        </Fragment>
      ))}
    </div>
  );
}

const Product = ({ item }: { item: number }) => {
  const addToSelectedProduct = useAppStore(
    (state) => state.addToSelectedProduct
  );
  const changePlan = useAppStore((state) => state.changePlan);
  const toggleDrawer = useAppStore((state) => state.toggleDrawer);
  const addToCart = useAppStore((state) => state.addToCart);
  const addToBuyNow = useAppStore((state) => state.addToBuyNow);

  return (
    <Card
      isPressable
      as={Link}
      href={`${siteConfig.pages.product}/${item}`}
      onClick={() => {
        changePlan("default");
        // addToSelectedProduct(item);
      }}
    >
      <CardBody>
        <div className="grid xs:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-4 w-full">
          <div className="col-span-1">
            <StyledImage
              shadow="sm"
              radius="lg"
              width={3000}
              height={300}
              alt={"product.description"}
              className="object-cover product_image !h-52 !w-full"
              src={imageByIndex(item)}
              isZoomed
            />
          </div>
          <div className="col-span-4 xs:col-span-1">
            <div className="flex flex-col justify-between w-full h-full items-start gap-3">
              <div>
                <h1 className="text-3xl font-bold">product name</h1>
                <h2 className="text-2xl font-bold text-default-500 mt-1">
                  product price
                </h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Praesentium necessitatibus hic pariatur voluptatibus soluta.
                  Alias ratione illum eaque omnis doloribus provident magnam
                  dignissimos nihil? Veniam amet velit eius excepturi cum.
                </p>
              </div>
              <ButtonGroup size="md">
                <Button
                  onClick={() => {
                    addToCart("default", String(item));
                    toggleDrawer(true);
                  }}
                >
                  Add to cart
                </Button>
                <Button
                  as={Link}
                  href={`/product/${String(item)}/${siteConfig.pages.buyNow}`}
                  onClick={() => addToBuyNow("default", String(item))}
                >
                  Buy now
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
