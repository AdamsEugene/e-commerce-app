"use client";

import Link from "next/link";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import StyledImage from "../StyledImage";
import imageByIndex from "@/src/utils/imageByIndex";
import { siteConfig } from "@/src/config/site";
import { useAppStore } from "@/src/providers/AppStoreProvider";

type PROPS = {
  onOpenChange: () => void;
};

export default function StyledCardGrid(props: PROPS) {
  const { onOpenChange } = props;
  //  const addToSelectedProduct = useAppStore(
  //    (state) => state.addToSelectedProduct
  //  );
  const changePlan = useAppStore((state) => state.changePlan);

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
      {list.map((item) => (
        <Card
          isFooterBlurred
          isPressable
          radius="lg"
          as={Link}
          href={`${siteConfig.pages.products}/${item.title}`}
          key={item.title}
          className="border-none"
          onClick={() => {
            changePlan("default");
            // addToSelectedProduct(item);
            onOpenChange();
          }}
        >
          <Image
            alt="Woman listing to music"
            className="object-cover h-[200px] w-[175px]"
            as={StyledImage}
            height={200}
            src={item.img}
            width={175}
            isZoomed
          />
          <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-white/80">{item.title}</p>
            {/* <Button
              className="text-tiny text-white bg-black/20"
              variant="flat"
              color="default"
              radius="lg"
              size="sm"
            >
              Notify me
            </Button> */}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
