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
  Spinner,
} from "@nextui-org/react";
import Drawer from "react-modern-drawer";
import { GiShoppingCart } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

import "react-modern-drawer/dist/index.css";
import ItemsInCarts from "@/src/app/(home)/product/components/ItemsInCarts";
import { useAppStore } from "@/src/providers/AppStoreProvider";
import ConditionalRenderAB from "../_shared/Conditional/ConditionalRenderAB";
import ConditionalRender from "../_shared/Conditional/ConditionalRender";
import StyledImage from "../_shared/Styled/StyledImage";
import StyledButton from "../_shared/Styled/StyledButton";
import { calculateTotalPrice } from "@/src/utils/functions";

type PROPS = {};

const SideDrawer: React.FC<PropsWithChildren<PROPS>> = (props) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const isDrawerOpen = useAppStore((state) => state.isDrawerOpen);
  const toggleDrawer = useAppStore((state) => state.toggleDrawer);
  const itemsInCart = useAppStore((state) => state.itemsInCart);
  const inCart = useAppStore((state) => state.inCart);
  const cartsData = useAppStore((state) => state.cartsData);
  const activePlan = useAppStore((state) => state.activePlan);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const AUTO_CLOSE_DELAY = 2000;

  useEffect(() => {
    if (!isMouseOver && isDrawerOpen) {
      timerRef.current = setTimeout(() => {
        // toggleDrawer(false);
      }, AUTO_CLOSE_DELAY);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isDrawerOpen, isMouseOver, toggleDrawer]);

  const isDataInCart =
    inCart["default"].length > 0 ||
    inCart["leasing"].length > 0 ||
    inCart["rent"].length > 0 ||
    inCart["later"].length > 0;

  // console.log(activePlan, inCart, cartsData);
  return (
    <>
      <Drawer
        open={isDrawerOpen}
        onClose={() => toggleDrawer(false)}
        direction="right"
        // lockBackgroundScroll={!isDrawerOpen}
        size={450}
        className="!h-[100vh] xs:!w-full rounded-sm"
      >
        <Card
          className="h-[100vh] xs:!w-full"
          radius="none"
          onMouseEnter={() => {
            setIsMouseOver(true);
            if (timerRef.current) {
              clearTimeout(timerRef.current);
            }
          }}
          onMouseLeave={() => {
            setIsMouseOver(false);
          }}
        >
          <CardHeader className="w-full flex justify-between items-center mt-4">
            <div className="flex justify-center items-center gap-4 w-full">
              <Badge
                color="secondary"
                content={itemsInCart}
                isInvisible={!Boolean(itemsInCart)}
                shape="circle"
                size="lg"
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
          <CardBody className="side-drawer-content flex flex-col items-center xs:!w-full !h-[100vh]">
            <Divider />
            <CardBody>
              <ConditionalRenderAB
                condition={isDataInCart}
                ComponentA={
                  <div className="h-[calc(100vh-286px)]">
                    <ItemsInCarts drawer />
                  </div>
                }
                ComponentB={<RenderEmptyCartContent />}
              />
            </CardBody>
            <Divider />
            <ConditionalRender
              condition={isDataInCart}
              Component={
                <RenderCartFooter
                  total={calculateTotalPrice(
                    inCart,
                    cartsData.carts,
                    activePlan
                  )}
                />
              }
            />
          </CardBody>
        </Card>
      </Drawer>
    </>
  );
};

const RenderEmptyCartContent = () => (
  <div className="h-full w-full flex flex-col items-center justify-center">
    <div className="flex flex-col items-center justify-center gap-6">
      <StyledImage
        src="/assets/svgs/emptyCart.svg"
        alt=" Your shopping cart is empty"
        height={350}
        width={300}
      />
      <p className="text-lg font-semibold text-gray-600">
        Your shopping cart is empty
      </p>
    </div>
  </div>
);

const RenderCartFooter = ({ total }: { total?: number }) => {
  const isAddingToCart = useAppStore((state) => state.isAddingToCart);

  return (
    <CardFooter className="flex flex-col w-full gap-4 items-center bottom-0 z-10">
      <div className="flex justify-between items-center w-full">
        <p className="text-sm text-gray-600">SUBTOTAL</p>
        <ConditionalRenderAB
          condition={isAddingToCart}
          ComponentA={<Spinner size="sm" />}
          ComponentB={<p className="text-lg font-semibold">{total || 0}</p>}
        />
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
  );
};

export default SideDrawer;
