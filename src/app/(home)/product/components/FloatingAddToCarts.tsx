"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useAppStore } from "@/src/providers/AppStoreProvider";
import StyledButtonGroup from "@/src/components/_shared/button/StyledButtonGroup";
import { siteConfig } from "@/src/config/site";

export default function FloatingAddToCarts({ visible }: { visible: boolean }) {
  const toggleDrawer = useAppStore((state) => state.toggleDrawer);
  const addToCart = useAppStore((state) => state.addToCart);
  const addToBuyNow = useAppStore((state) => state.addToBuyNow);
  const selectedPlan = useAppStore((state) => state.selectedPlan);

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
      onclick: () => addToBuyNow(selectedPlan, productId),
    },
  ];

  return (
    <div
      className={`fixed w-full z-50 left-0 bg-default-50 p-4 flex items-center transition-all duration-500 ${
        visible ? "-bottom-96" : "bottom-0"
      }`}
    >
      <StyledButtonGroup data={_addToCart} color="secondary" />
    </div>
  );
}
