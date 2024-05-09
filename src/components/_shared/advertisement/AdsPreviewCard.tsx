"use client";

import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

import StyledImage from "../Styled/StyledImage";
import imageByIndex from "@/src/utils/imageByIndex";
import { useState } from "react";
import ConditionalRenderAB from "../Conditional/ConditionalRenderAB";

const list = [
  {
    name: "Banana",
    image: imageByIndex(13),
    price: "$7.50",
  },
  {
    name: "Watermelon",
    image: imageByIndex(13),
    price: "$12.20",
  },
];

export default function AdsPreviewCard() {
  const [movement, setMovement] = useState<"left" | "right">("left");

  return (
    <div className="flex flex-col gap-4">
      <ConditionalRenderAB
        condition={movement === "left"}
        ComponentA={
          <Card
            isFooterBlurred
            isPressable
            radius="lg"
            key={list[0].name}
            className="border-none h-full w-full preview-card"
          >
            <CardBody className="overflow-visible p-0 product_image_big_wrapper">
              <Image
                alt="Woman listing to music"
                className="h-full w-full"
                as={StyledImage}
                height={500}
                src={list[0].image}
                width={500}
                isZoomed
              />
              <div className="absolute top-0 left-0 p-2 z-10">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
              </div>
            </CardBody>
            <CardFooter className="justify-between w-full before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 shadow-small z-10">
              <div className="flex items-center justify-between w-full">
                <p className="text-tiny text-white/80">{list[0].name}</p>
                <Button
                  className="text-tiny text-white bg-black/20"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  Shop Now
                </Button>
              </div>
            </CardFooter>
          </Card>
        }
        ComponentB={
          <Card isPressable>
            <CardBody className="overflow-visible p-0 product_image_big_wrapper">
              <StyledImage
                radius="lg"
                width={500}
                height={500}
                alt={list[1].name}
                className="object-cover w-full product_image_big"
                src={imageByIndex(13)}
                isZoomed
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{list[1].name}</b>
              <p className="text-default-500">{list[1].price}</p>
            </CardFooter>
          </Card>
        }
      />

      <div className="flex items-center justify-between">
        <Button isIconOnly onPress={() => setMovement("left")}>
          <FaAngleLeft />
        </Button>
        <Button isIconOnly onPress={() => setMovement("right")}>
          <FaAngleRight />
        </Button>
      </div>
    </div>
  );
}
