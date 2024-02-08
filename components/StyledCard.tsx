import React from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import imageByIndex from "@/utils/imageByIndex";
import StyledImage from "./StyledImage";

export default function StyledCard() {
  const list = {
    title: "Orange",
    img: imageByIndex(6),
    price: "$5.50",
  };

  return (
    <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
      <CardBody className="overflow-visible p-0 my_image">
        <StyledImage
          shadow="sm"
          radius="lg"
          width={200}
          height={200}
          alt={list.title}
          className="w-full object-cover h-[140px]"
          src={list.img}
        />
      </CardBody>
      <CardFooter className="text-small justify-between">
        <b>{list.title}</b>
        <p className="text-default-500">{list.price}</p>
      </CardFooter>
    </Card>
  );
}

//    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
