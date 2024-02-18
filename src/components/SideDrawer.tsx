"use client";

import React, { PropsWithChildren, useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Badge,
} from "@nextui-org/react";
import Drawer from "react-modern-drawer";
import { GiShoppingCart } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

import "react-modern-drawer/dist/index.css";
import StyledImage from "./StyledImage";
import ConditionalRenderAB from "./ConditionalRenderAB";
import StyledButton from "./StyledButton";
import ConditionalRender from "./ConditionalRender";
import cartItems, { ItemsInCart } from "@/src/utils/cartItem";
import ItemsInCarts from "@/src/app/(home)/product/components/ItemsInCarts";
import { useAppStore } from "../providers/AppStoreProvider";

type PROPS = {};

const SideDrawer: React.FC<PropsWithChildren<PROPS>> = (props) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [allItems, setAllItems] = useState<ItemsInCart[]>(cartItems);

  const isDrawerOpen = useAppStore((state) => state.isDrawerOpen);
  const toggleDrawer = useAppStore((state) => state.toggleDrawer);
  const itemsInCart = useAppStore((state) => state.itemsInCart);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Close the drawer with a delay when the mouse leaves the CardBody
    if (!isMouseOver && isDrawerOpen) {
      timerRef.current = setTimeout(() => {
        toggleDrawer(false);
      }, 2000);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isMouseOver, isDrawerOpen, toggleDrawer]);

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        onClose={() => toggleDrawer(false)}
        direction="right"
        // lockBackgroundScroll
        size={450}
        className="!h-[100vh] rounded-sm"
      >
        <Card className="h-[100vh]" radius="none">
          <CardBody
            className="side-drawer-content flex flex-col items-center p-4 !h-[100vh]"
            onMouseEnter={() => {
              setIsMouseOver(true);
              if (timerRef.current) {
                clearTimeout(timerRef.current);
              }
            }}
            onMouseLeave={() => setIsMouseOver(false)}
          >
            <CardHeader className="w-full flex justify-between items-center mb-4">
              <div className="flex flex-col justify-center items-center w-full">
                <Badge
                  color="secondary"
                  content={itemsInCart}
                  isInvisible={!Boolean(itemsInCart)}
                  shape="circle"
                >
                  <GiShoppingCart className="text-5xl text-gray-700 mb-2" />
                </Badge>
                <p className="text-base text-gray-700 font-semibold">
                  Your Shopping Cart
                </p>
              </div>
              <IoCloseSharp
                className="text-3xl cursor-pointer"
                onClick={() => toggleDrawer(false)}
              />
            </CardHeader>
            <Divider />
            <CardBody>
              <ConditionalRenderAB
                condition={allItems.length > 0}
                ComponentA={
                  <div className="h-[calc(100vh-286px)]">
                    <ItemsInCarts />
                  </div>
                }
                ComponentB={
                  <>
                    <div className="h-full w-full flex flex-col items-center justify-center">
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
            </CardBody>
            <Divider />
            <ConditionalRender
              condition={allItems.length > 0}
              Component={
                <CardFooter className="flex flex-col w-full gap-4 items-center bottom-0 z-10">
                  <div className="flex justify-between w-full">
                    <p className="text-sm text-gray-600">SUBTOTAL</p>
                    <p className="text-lg font-semibold">$78.98</p>
                  </div>
                  <Divider />
                  <StyledButton
                    as={Link}
                    href={`/checkout`}
                    className="w-full"
                    content="GO TO CHECKOUT"
                    color="secondary"
                  />
                </CardFooter>
              }
            />
          </CardBody>
        </Card>
      </Drawer>
    </>
  );
};

export default SideDrawer;
