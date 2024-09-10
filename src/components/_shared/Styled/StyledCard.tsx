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

type PROPS = {
  data: TProduct;
  link: string;
  forHome?: boolean;
  textColor?: string;
};

export default function StyledCard(props: PROPS & CardProps) {
  const { data, textColor, forHome, link, ...others } = props;
  
  return (
    <Card shadow="sm" isPressable {...others} href={link}>
      <CardBody
        className={`overflow-visible p-0 ${forHome ? "!h-[110px]" : "!h-[90px]"}`}
      >
        <Image
          shadow="sm"
          as={StyledImage}
          isZoomed
          radius="lg"
          width={300}
          height={300}
          alt={data.title}
          className={`!w-[200px] !object-contain ${forHome ? "!h-[110px]" : "!h-[90px]"} bg-transparent`}
          src={data.thumbnail}
        />
      </CardBody>
      <CardFooter className="text-small justify-between font-bold">
        <b
          className={`max-w-[100px] truncate text-${textColor || "default"}-700`}
        >
          {data.title}
        </b>
        <p className={`text-${textColor || "default"}-500`}>{data.price}</p>
      </CardFooter>
    </Card>
  );
}
