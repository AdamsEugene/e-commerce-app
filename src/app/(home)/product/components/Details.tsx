"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Button,
  Divider,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import { FiMoreHorizontal } from "react-icons/fi";

import StyledInput from "@/src/components/StyledInput";
import StyledButton from "@/src/components/StyledButton";
import Ratings from "@/src/components/Ratings";
import PurchaseType from "@/src/components/PurchaseType";
import PlansComponent from "@/src/components/PlansComponent";
import StyledButtonGroup from "@/src/components/button/StyledButtonGroup";
import ShippingOption from "@/src/components/ShippingOption";
import SideDrawer from "@/src/components/SideDrawer";
import { useAppStore } from "@/src/providers/AppStoreProvider";
import cartItems from "@/src/utils/cartItem";
import { siteConfig } from "@/src/config/site";
import StyledDropdown from "@/src/components/Dropdown";
import StyledModal from "@/src/components/StyledModal";
import MoreOnProduct from "@/src/components/MoreOnProduct";

const purchasePlan = {
  label: "Choose Your Payment Plan",
  description: "You can change your selected plan at any time.",
  data: [
    {
      description: "Pay as you go for up to 20 items",
      value: "default",
      label: "Pay As You Go Plan (Default)",
    },
    {
      description: "Unlimited items at $10 per month",
      value: "leasing",
      label: "Leasing Plan",
    },
    {
      description: "Includes 24/7 support. Contact us for pricing.",
      value: "rent",
      label: "Rent This Item Plan",
    },
  ],
};

const options = [
  { key: "share", label: "Share this product" },
  { key: "more", label: "See more of this" },
  { key: "favorite", label: "Add to favorite" },
  { key: "later", label: "Save to buy later" },
] as const;

type DropdownItemsType = (typeof options)[number]["key"];

export default function Details() {
  const [quantity, setQuantity] = useState(1);
  const [value, setValue] = useState(0);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const toggleDrawer = useAppStore((state) => state.toggleDrawer);
  const addToCart = useAppStore((state) => state.addToCart);
  const addToBuyNow = useAppStore((state) => state.addToBuyNow);
  const selectedPlan = useAppStore((state) => state.selectedPlan);

  const params = useParams();
  const productId = params.product_id as string;

  const handleSelect = (key: any) => {
    const currentKey = key.currentKey as DropdownItemsType;
    if (currentKey === "share") onOpen();
    if (currentKey === "later") addToCart("later", productId);
  };

  const quantityData = [
    { name: "-", onClick: () => setQuantity((p) => (p > 1 ? p - 1 : 1)) },
    {
      name: `${quantity}`,
      popOverData: {
        title: "Quantity",
        content: (
          <>
            <StyledInput
              type="number"
              onChange={({ target }) => setValue(+target.value)}
            />
            <StyledButton
              content="Confirm"
              className="w-full !rounded-xl"
              color="secondary"
              onClick={() => setQuantity(value)}
            />
          </>
        ),
        onClick: undefined,
      },
    },
    { name: "+", onClick: () => setQuantity((p) => p + 1) },
  ];

  const _addToCart = [
    { name: "$27.99" },
    {
      name: "ADD TO CART",
      onClick: (state?: boolean) => {
        addToCart(selectedPlan, params.product_id as string);
        toggleDrawer(Boolean(state));
      },
    },
  ];

  const getCurrentItem = cartItems.find((item) => item.productId === productId);

  return (
    <div className="w-full mx-auto p-6 flex flex-col gap-4">
      <div>
        <div className="flex justify-between">
          <Ratings rating={2.5} numberOfReviews={8} />
          <StyledDropdown
            Trigger={
              <Button
                isIconOnly
                color="default"
                aria-label="Like"
                radius="full"
                variant="light"
                size="sm"
              >
                <FiMoreHorizontal className="text-lg" />
              </Button>
            }
            dropdownItems={options as any}
            handleSelect={handleSelect}
            selectedKeys={""}
          />
        </div>
        <h1 className="text-4xl font-bold mt-4">{getCurrentItem?.itemName}</h1>
      </div>
      <div className="pr-16 flex flex-col gap-4">
        <p className="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          minima soluta ullam repellendus delectus! Molestias aspernatur omnis,
          veritatis accusantium veniam voluptate saepe, molestiae dolorem
          quisquam, nemo similique vitae maxime reprehenderit.
        </p>
        <p className="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          minima soluta ullam repellendus delectus! Molestias aspernatur omnis,
          veritatis accusantium veniam voluptate saepe, molestiae dolorem
          quisquam, nemo similique vitae maxime reprehenderit.
        </p>
      </div>
      <Divider className="my-4" />
      <PurchaseType {...purchasePlan} />
      <PlansComponent />
      <Divider className="my-4" />
      <div className="flex gap-6">
        <StyledButtonGroup data={quantityData} />
        <StyledButtonGroup data={_addToCart} color="secondary" />
        <StyledButton
          as={Link}
          href={`${productId}/${siteConfig.pages.buyNow}`}
          content="Buy Now"
          variant="ghost"
          color="secondary"
          radius="lg"
          onClick={() => addToBuyNow(selectedPlan, productId)}
        />
      </div>
      <Divider className="my-4" />
      <ShippingOption />
      <SideDrawer />
      <StyledModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top"
        backdrop="blur"
        size="sm"
        className="search_result"
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => <MoreOnProduct onCopy={onClose} />}
        </ModalContent>
      </StyledModal>
    </div>
  );
}
