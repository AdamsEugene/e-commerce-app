"use client";

import React from "react";
import ConditionalRenderAB from "@/src/components/ConditionalRenderAB";
import StyledImage from "@/src/components/StyledImage";
import PurchaseType from "@/src/components/PurchaseType";
import ConditionalRender from "@/src/components/ConditionalRender";
import TabsForCartItems from "@/src/components/TabsForCartItems";
import { useAppStore } from "@/src/providers/AppStoreProvider";

type PROPS = {
  buyNow?: boolean;
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
  const { buyNow = false } = props;
  const inCart = useAppStore((state) => state.inCart);

  const isDataInCart =
    inCart["default"].length > 0 ||
    inCart["lessing"].length > 0 ||
    inCart["rent"].length > 0;

  return (
    <div className="w-full">
      <ConditionalRenderAB
        condition={isDataInCart}
        ComponentA={
          <>
            <TabsForCartItems />
            <ConditionalRender
              condition={buyNow}
              Component={
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <p className="text-lg font-bold text-gray-500">SUBTOTAL</p>
                    <p className="text-lg font-bold text-gray-500">$1,399USD</p>
                  </div>
                  <PurchaseType {...plan} />
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
