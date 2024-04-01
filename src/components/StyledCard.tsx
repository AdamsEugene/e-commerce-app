import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardProps,
  Image,
} from "@nextui-org/react";
import StyledImage from "./_shared/StyledImage";
import { PRODUCTS } from "../utils/productList";

export default function StyledCard(
  props: CardProps & PRODUCTS & { link: string }
) {
  return (
    <Card shadow="sm" isPressable {...props} href={props.link}>
      <CardBody className="overflow-visible p-0 !h-[90px]">
        <Image
          shadow="sm"
          as={StyledImage}
          isZoomed
          radius="lg"
          width={300}
          height={200}
          alt={props.title}
          className="!w-[200px] object-cover !h-[90px]"
          src={props.img}
        />
      </CardBody>
      <CardFooter className="text-small justify-between">
        <b className="max-w-[100px] truncate">{props.title}</b>
        <p className="text-default-500">{props.price}</p>
      </CardFooter>
    </Card>
  );
}
