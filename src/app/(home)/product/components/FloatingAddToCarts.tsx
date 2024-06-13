"use client";

import { useState } from "react";
import Link from "next/link";
import { IoCart } from "react-icons/io5";
import { ImShrink2 } from "react-icons/im";

import { useParams } from "next/navigation";
import { useAppStore } from "@/src/providers/AppStoreProvider";
import StyledButtonGroup from "@/src/components/_shared/button/StyledButtonGroup";
import { siteConfig } from "@/src/config/site";
import { IconWrapper } from "@/src/components/_shared/others/IconWrapper";
import { Badge } from "@nextui-org/react";

export default function FloatingAddToCarts({ visible }: { visible: boolean }) {
  const [expand, setExpand] = useState(false);
  const toggleDrawer = useAppStore((state) => state.toggleDrawer);
  const addToCart = useAppStore((state) => state.addToCart);
  const addToBuyNow = useAppStore((state) => state.addToBuyNow);
  const selectedPlan = useAppStore((state) => state.selectedPlan);
  const itemsInCart = useAppStore((state) => state.itemsInCart);

  const params = useParams();
  const productId = params.product_id as string;

  const _addToCart = [
    { name: "$27.99", variant: "bordered" as const },
    {
      name: "ADD TO CART",
      onClick: (state?: boolean) => {
        addToCart(selectedPlan, params.product_id as string);
        toggleDrawer(Boolean(state));
      },
    },
    {
      name: "Buy Now",
      variant: "ghost" as const,
      as: Link,
      href: `${productId}/${siteConfig.pages.buyNow}`,
      onClick: () => addToBuyNow(selectedPlan, productId),
    },
    {
      name: "",
      icon: ImShrink2,
      variant: "ghost" as const,
      isIconOnly: true,
      onClick: () => setExpand((p) => !p),
    },
  ];

  return (
    <div
      className={`fixed w-max xs:w-full z-50  flex items-center transition-all duration-500 max-w-max xs:max-w-full m-0 ${
        visible ? "!-bottom-96" : "bottom-0"
      } ${
        expand && visible
          ? "block w-max xs:w-full right-14 xs:right-0 max-w-max xs:max-w-full !m-0 bottom-5 xs:bottom-0 bg-default-50"
          : "block w-max xs:w-full right-14 xs:right-5 bg-default-50 max-w-max xs:max-w-max !m-0 bottom-5 xs:bottom-5"
      }`}
    >
      {!expand ? (
        <Badge
          color="secondary"
          content={itemsInCart}
          isInvisible={!Boolean(itemsInCart)}
          shape="circle"
          size="lg"
          onClick={() => setExpand((p) => !p)}
        >
          <IconWrapper
            onClick={() => setExpand((p) => !p)}
            className="bg-secondary/10 text-secondary cursor-pointer hover:bg-secondary/30 transition duration-300 ease-in-out !w-14 !h-14 !p-2"
          >
            <IoCart className="text-[70px]" />
          </IconWrapper>
        </Badge>
      ) : (
        <StyledButtonGroup data={_addToCart} color="secondary" radius="none" />
      )}
    </div>
  );
}
