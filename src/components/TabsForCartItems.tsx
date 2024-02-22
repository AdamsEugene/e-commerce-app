"use client";

import React, { useMemo, useState } from "react";
import { useParams, usePathname } from "next/navigation";
import { Tabs, Tab } from "@nextui-org/react";
import cartItems, { ItemsInCart } from "@/src/utils/cartItem";
import CartItem from "./CartItem";
import StyledImage from "./StyledImage";
import ConditionalRenderAB from "./ConditionalRenderAB";
import { useAppStore } from "../providers/AppStoreProvider";
import { type InCart } from "../store/productSlice";

type PROPS = {
  buyNow?: boolean;
};

const TabsForCartItems: React.FC<PROPS> = (props) => {
  const { buyNow: now = false } = props;

  const [allItems, setAllItems] = useState<ItemsInCart[]>(cartItems);
  const inCart = useAppStore((state) => state.inCart);
  const buyNow = useAppStore((state) => state.buyNow);
  // const isDrawerOpen = useAppStore((state) => state.isDrawerOpen);

  // console.log({ inCart, buyNow });

  // const params = useParams();
  // const productId = params.product_id;
  const pathname = usePathname();
  const containsBuyNow = /buy-now/i.test(pathname);

  const productsInCart = containsBuyNow && now ? buyNow : inCart;

  const getItemsByCartType = useMemo(
    () => (cartType: InCart) => {
      return allItems.filter((item) =>
        productsInCart[cartType].includes(item.productId)
      );
    },
    [allItems, productsInCart]
  );

  const isCartEmpty = (cartType: InCart) =>
    getItemsByCartType(cartType).length === 0;

  return (
    <div className="flex w-full flex-col gap-3">
      <Tabs
        aria-label="Options"
        color="secondary"
        variant="light"
        fullWidth
        defaultSelectedKey={"default"}
      >
        {Object.entries(inCart).map(
          ([cartType, _]) =>
            cartType !== "later" && (
              <Tab
                key={cartType}
                title={`${capitalize(cartType)} (${
                  productsInCart[cartType as InCart].length
                })`}
              >
                <ConditionalRenderAB
                  ComponentA={
                    <>
                      {getItemsByCartType(cartType as InCart).map((item) => (
                        <CartItem
                          key={item.key}
                          item={item}
                          from={cartType as InCart}
                        />
                      ))}
                    </>
                  }
                  ComponentB={EmptyCart}
                  condition={!isCartEmpty(cartType as InCart)}
                />
              </Tab>
            )
        )}
      </Tabs>
    </div>
  );
};

export default TabsForCartItems;

const EmptyCart = (
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
);

// Helper function to capitalize the first letter
const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
