// "use client";

import React, { useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import cartItems, { ItemsInCart } from "@/src/utils/cartItem";
import CartItem from "./CartItem";
import StyledImage from "./StyledImage";
import ConditionalRenderAB from "./ConditionalRenderAB";

const TabsForCartItems: React.FC<{}> = () => {
  const [allItems, setAllItems] = useState<ItemsInCart[]>(cartItems);

  const removeItem = (id: string) => {
    setAllItems((p) => p.filter((item) => item.key !== id));
  };

  return (
    <div className="flex w-full flex-col gap-3">
      <Tabs
        aria-label="Options"
        color="secondary"
        variant="light"
        fullWidth
        defaultSelectedKey={"default"}
      >
        <Tab key="default" title="Default (8)">
          <ConditionalRenderAB
            ComponentA={
              <>
                {allItems.map((item) => (
                  <CartItem
                    key={item.key}
                    item={item}
                    removeItem={removeItem}
                  />
                ))}
              </>
            }
            ComponentB={EmptyCart}
            condition={allItems.length > 0}
          />
        </Tab>
        <Tab key="leasing" title="Leasing (3)">
          <ConditionalRenderAB
            ComponentA={
              <>
                {allItems.map((item) => (
                  <CartItem
                    key={item.key}
                    item={item}
                    removeItem={removeItem}
                  />
                ))}
              </>
            }
            ComponentB={EmptyCart}
            condition={allItems.length > 0}
          />
        </Tab>
        <Tab key="rent" title="Rent  (4)">
          <ConditionalRenderAB
            ComponentA={
              <>
                {allItems.map((item) => (
                  <CartItem
                    key={item.key}
                    item={item}
                    removeItem={removeItem}
                  />
                ))}
              </>
            }
            ComponentB={EmptyCart}
            condition={allItems.length > 0}
          />
        </Tab>
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
