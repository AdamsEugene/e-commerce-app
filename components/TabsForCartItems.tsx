// "use client";

import React, { useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import cartItems, { ItemsInCart } from "@/utils/cartItem";
import CartItem from "./CartItem";

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
          {allItems.map((item) => (
            <CartItem key={item.key} item={item} removeItem={removeItem} />
          ))}
        </Tab>
        <Tab key="leasing" title="Leasing (3)">
          {allItems.map((item) => (
            <CartItem key={item.key} item={item} removeItem={removeItem} />
          ))}
        </Tab>
        <Tab key="rent" title="Rent  (4)">
          {allItems.map((item) => (
            <CartItem key={item.key} item={item} removeItem={removeItem} />
          ))}
        </Tab>
      </Tabs>
    </div>
  );
};

export default TabsForCartItems;
