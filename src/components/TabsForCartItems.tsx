// "use client";

import React, { useMemo, useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import cartItems, { ItemsInCart } from "@/src/utils/cartItem";
import CartItem from "./CartItem";
import StyledImage from "./StyledImage";
import ConditionalRenderAB from "./ConditionalRenderAB";
import { useAppStore } from "../providers/AppStoreProvider";
import { ProductState } from "../store/productSlice";

const TabsForCartItems: React.FC = () => {
  const [allItems, setAllItems] = useState<ItemsInCart[]>(cartItems);
  const inCart = useAppStore((state) => state.inCart);

  const removeItem = (id: string) => {
    setAllItems((prevItems) =>
      prevItems.filter((item) => item.productId !== id)
    );
  };

  const getItemsByCartType = (cartType: keyof ProductState["inCart"]) =>
    allItems.filter((item) => inCart[cartType].includes(item.productId));

  const isCartEmpty = (cartType: keyof ProductState["inCart"]) =>
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
        {Object.entries(inCart).map(([cartType, _]) => (
          <Tab
            key={cartType}
            title={`${capitalize(cartType)} (${
              inCart[cartType as keyof ProductState["inCart"]].length
            })`}
          >
            <ConditionalRenderAB
              ComponentA={
                <>
                  {getItemsByCartType(
                    cartType as keyof ProductState["inCart"]
                  ).map((item) => (
                    <CartItem
                      key={item.key}
                      item={item}
                      removeItem={removeItem}
                    />
                  ))}
                </>
              }
              ComponentB={EmptyCart}
              condition={!isCartEmpty(cartType as keyof ProductState["inCart"])}
            />
          </Tab>
        ))}
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
