"use client";

import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import StyledImage from "../StyledImage";
import imageByIndex from "@/src/utils/imageByIndex";

export default function StyledCardGrid() {
  const list = [
    {
      title: "Orange",
      img: imageByIndex(0),
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: imageByIndex(2),
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: imageByIndex(3),
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: imageByIndex(4),
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: imageByIndex(5),
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: imageByIndex(6),
      price: "$8.00",
    },
    {
      title: "Banana",
      img: imageByIndex(7),
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: imageByIndex(8),
      price: "$12.20",
    },
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {list.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-0 h-[200px] card_grid">
            <StyledImage
              shadow="sm"
              radius="lg"
              alt={item.title}
              src={item.img}
              width={200}
              height={200}
            />
          </CardBody>
          {/* <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter> */}
        </Card>
      ))}
    </div>
  );
}
