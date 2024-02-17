"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Divider } from "@nextui-org/react";
import StyledInput from "@/src/components/StyledInput";
import StyledButton from "@/src/components/StyledButton";
import Ratings from "@/src/components/Ratings";
import PurchaseType from "@/src/components/PurchaseType";
import PlansComponent from "@/src/components/PlansComponent";
import StyledButtonGroup from "@/src/components/button/StyledButtonGroup";
import ShippingOption from "@/src/components/ShippingOption";
import SideDrawer from "@/src/components/SideDrawer";

const plan = {
  label: "Plans",
  description: "Selected plan can be changed at any time.",
  data: [
    { description: "Up to 20 items", value: "Free", label: "free" },
    {
      description: "Unlimited items. $10 per month.",
      value: "Pro",
      label: "pro",
    },
    {
      description: "24/7 support. Contact us for pricing.",
      value: "Enterprise",
      label: "enterprise",
    },
  ],
};

export default function Details() {
  const [quantity, setQuantity] = useState(1);
  const [value, setValue] = useState(0);
  const [isOpen, setIsOpen] = React.useState(false);

  const params = useParams();

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

  const addToCart = [
    { name: "$27.99" },
    {
      name: "ADD TO CART",
      onClick: (state?: boolean) => toggleDrawer(Boolean(state)),
    },
  ];

  const toggleDrawer = (state: boolean) => {
    setIsOpen(state);
  };

  return (
    <div className="w-full mx-auto p-6 flex flex-col gap-4">
      <div>
        <Ratings rating={2.5} numberOfReviews={8} />
        <h1 className="text-4xl font-bold mt-4">Product Name</h1>
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
      <PurchaseType {...plan} />
      <PlansComponent />
      <Divider className="my-4" />
      <div className="flex gap-6">
        <StyledButtonGroup data={quantityData} />
        <StyledButtonGroup data={addToCart} color="secondary" />
        <StyledButton
          as={Link}
          href={`${params.product_id}/buy-now`}
          content="Buy Now"
          variant="ghost"
          color="secondary"
          radius="lg"
        />
      </div>
      <Divider className="my-4" />
      <ShippingOption />
      <SideDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </div>
  );
}
