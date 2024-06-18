import React, { Fragment } from "react";
import StyledImage from "../_shared/Styled/StyledImage";
import imageByIndex from "@/src/utils/imageByIndex";
import { Button, ButtonGroup } from "@nextui-org/button";
import Link from "next/link";
import { siteConfig } from "@/src/config/site";
import { Card, CardBody, Divider } from "@nextui-org/react";
import ConditionalRender from "../_shared/Conditional/ConditionalRender";

export default function ProductTilesList() {
  return (
    <div className="container flex flex-col items-center justify-center !gap-8 mb-4">
      {[1, 2, 3, 4, 5, 6].map((item, index) => (
        <Fragment key={index}>
          <Product key={index + 5 * index} />
          <ConditionalRender
            condition={index + 1 !== 6}
            Component={<Divider />}
          />
        </Fragment>
      ))}
    </div>
  );
}

const Product = () => {
  return (
    <Card isPressable>
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
              src={imageByIndex(13)}
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
                <Button>Add to cart</Button>
                <Button>Buy now</Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
