"use client";

import React from "react";
import { useParams, usePathname } from "next/navigation";

import ConditionalRenderAB from "@/src/components/_shared/Conditional/ConditionalRenderAB";
import StyledImage from "@/src/components/_shared/Styled/StyledImage";
import PurchaseType from "@/src/components/others/PurchaseType";
import ConditionalRender from "@/src/components/_shared/Conditional/ConditionalRender";
import TabsForCartItems from "@/src/components/others/TabsForCartItems";
import { useAppStore } from "@/src/providers/AppStoreProvider";

type PROPS = {
  buyNow?: boolean;
  drawer?: boolean;
};

const plan = {
  label: "Select delivery",
  description: "Selected plan can be changed at any time.",
  data: [
    {
      description: "(1–6 weeks, no tracking)",
      value: "regular",
      label: "$8 - Regular",
    },
    {
      description: "(4–6 business days, tracking)",
      value: "express",
      label: "$15 - Express",
    },
  ],
};

export default function ItemsInCarts(props: PROPS) {
  const { buyNow: now = false, drawer } = props;
  const inCart = useAppStore((state) => state.inCart);
  const buyNow = useAppStore((state) => state.buyNow);
  // const isDrawerOpen = useAppStore((state) => state.isDrawerOpen);

  // const params = useParams();
  // const productId = params.product_id;
  const pathname = usePathname();
  const containsBuyNow = /buy-now/i.test(pathname);

  const productsInCart = containsBuyNow && now ? buyNow : inCart;

  const isDataInCart =
    productsInCart["default"].length > 0 ||
    productsInCart["leasing"].length > 0 ||
    productsInCart["rent"].length > 0 ||
    (Boolean(drawer) && productsInCart["later"].length > 0);

  return (
    <div className="w-full">
      <ConditionalRenderAB
        condition={isDataInCart}
        ComponentA={
          <>
            <TabsForCartItems buyNow={now} drawer={drawer} />
            <ConditionalRender
              condition={now}
              Component={
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <p className="text-lg font-bold text-gray-500">SUBTOTAL</p>
                    <p className="text-lg font-bold text-gray-500">$1,399USD</p>
                  </div>
                  <PurchaseType {...plan} notPlan />
                </div>
              }
            />
          </>
        }
        ComponentB={
          <>
            <div className="min-h-[500px] w-full flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center gap-6">
                <StyledImage
                  src="/assets/svgs/emptyCart.svg"
                  alt=" Your shopping cart is empty"
                  height={400}
                  width={300}
                />
                <p className="text-lg font-semibold text-gray-600">
                  Your shopping cart is empty
                </p>
              </div>
            </div>
          </>
        }
      />
    </div>
  );
}
