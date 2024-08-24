import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardProps,
  Image,
} from "@nextui-org/react";
import StyledImage from "./StyledImage";
import { TProduct } from "@/src/types";

export default function StyledCard(
  props: CardProps & { data: TProduct } & { link: string } & {
    forHome?: boolean;
  }
) {
  return (
    <Card shadow="none" isPressable {...props} href={props.link}>
      <CardBody
        className={`overflow-visible p-0 ${props.forHome ? "!h-[110px]" : "!h-[90px]"}`}
      >
        <Image
          shadow="sm"
          as={StyledImage}
          isZoomed
          radius="lg"
          width={300}
          height={300}
          alt={props.data.title}
          className={`!w-[200px] !object-contain ${props.forHome ? "!h-[110px]" : "!h-[90px]"} bg-transparent`}
          src={props.data.thumbnail}
        />
      </CardBody>
      <CardFooter className="text-small justify-between">
        <b className="max-w-[100px] truncate text-default-700">
          {props.data.title}
        </b>
        <p className="text-default-500">{props.data.price}</p>
      </CardFooter>
    </Card>
  );
}
