"use client";

import React, { useState } from "react";
import CartItem from "@/components/CartItem";
import cartItems, { ItemsInCart } from "@/utils/cartItem";
import ConditionalRenderAB from "@/components/ConditionalRenderAB";
import StyledImage from "@/components/StyledImage";
import PurchaseType from "@/components/PurchaseType";
import ConditionalRender from "@/components/ConditionalRender";

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
  const [allItems, setAllItems] = useState<ItemsInCart[]>(cartItems);

  const removeItem = (id: string) => {
    setAllItems((p) => p.filter((item) => item.key !== id));
  };

  return (
    <div className="w-full">
      <ConditionalRenderAB
        condition={allItems.length > 0}
        ComponentA={
          <>
            {allItems.map((item) => (
              <CartItem key={item.key} item={item} removeItem={removeItem} />
            ))}
            <ConditionalRender
              condition={buyNow}
              Component={
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <p className="text-lg font-bold">SUBTOTAL</p>
                    <p className="text-lg font-bold">$1,399USD</p>
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
