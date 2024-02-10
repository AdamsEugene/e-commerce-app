"use client";

import React, { useState } from "react";
import CartItem from "@/components/CartItem";
import cartItems, { ItemsInCart } from "@/utils/cartItem";
import ConditionalRenderAB from "@/components/ConditionalRenderAB";
import StyledImage from "@/components/StyledImage";

export default function ItemsInCarts() {
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
