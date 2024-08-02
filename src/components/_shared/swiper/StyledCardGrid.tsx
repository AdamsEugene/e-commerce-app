"use client";

import Link from "next/link";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import StyledImage from "../Styled/StyledImage";
import imageByIndex from "@/src/utils/imageByIndex";
import { siteConfig } from "@/src/config/site";
import { useAppStore } from "@/src/providers/AppStoreProvider";

type PROPS = {
  onOpenChange?: () => void;
  munPerRow?: number;
};

export default function StyledCardGrid(props: PROPS) {
  const { onOpenChange, munPerRow } = props;
  //  const addToSelectedProduct = useAppStore(
  //    (state) => state.addToSelectedProduct
  //  );
  const changePlan = useAppStore((state) => state.changePlan);

  const list = [
    {
      name: "Orange",
      image: imageByIndex(0),
      price: "$5.50",
    },
    {
      name: "Tangerine",
      image: imageByIndex(2),
      price: "$3.00",
    },
    {
      name: "Raspberry",
      image: imageByIndex(3),
      price: "$10.00",
    },
    {
      name: "Lemon",
      image: imageByIndex(4),
      price: "$5.30",
    },
    {
      name: "Avocado",
      image: imageByIndex(5),
      price: "$15.70",
    },
    {
      name: "Lemon 2",
      image: imageByIndex(6),
      price: "$8.00",
    },
    {
      name: "Banana",
      image: imageByIndex(7),
      price: "$7.50",
    },
    {
      name: "Watermelon",
      image: imageByIndex(8),
      price: "$12.20",
    },
  ];

  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-${
        onOpenChange ? 4 : 5
      } md:grid-cols-${onOpenChange ? 4 : 5} lg:grid-cols-${
        onOpenChange ? 4 : 5
      } xl:grid-cols-${onOpenChange ? 4 : 5} gap-${onOpenChange ? 3 : 4}`}
    >
      {list.slice(0, munPerRow).map((item) => (
        <Card
          isFooterBlurred
          isPressable
          radius="lg"
          as={Link}
          href={`${siteConfig.pages.products}/${item.name}`}
          key={item.name}
          className="border-none"
          onClick={() => {
            changePlan("default");
            // addToSelectedProduct(item);
            onOpenChange && onOpenChange();
          }}
        >
          <Image
            alt="Woman listing to music"
            className={`object-cover ${
              onOpenChange ? " h-[170px] w-[175px]" : " h-[192px] w-[223px]"
            }`}
            as={StyledImage}
            height={192}
            src={item.image}
            width={223}
            isZoomed
          />
          <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-white/80">{item.name}</p>
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
