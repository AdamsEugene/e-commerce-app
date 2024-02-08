"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Divider } from "@nextui-org/react";
import StyledInput from "@/components/StyledInput";
import StyledButton from "@/components/StyledButton";
import Ratings from "@/components/Ratings";
import PurchaseType from "@/components/PurchaseType";
import PlansComponent from "@/components/PlansComponent";
import StyledButtonGroup from "@/components/button/StyledButtonGroup";
import ShippingOption from "@/components/ShippingOption";

const addToCart = [
  { name: "$27.99" },
  {
    name: "ADD TO CART",
    // popOverData: {
    //   title: "Quantity",
    //   content: <StyledInput />,
    // },
  },
];

export default function Details() {
  const [quantity, setQuantity] = useState(1);
  const [value, setValue] = useState(0);

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

  return (
    <div className="w-full mx-auto p-6">
      <Ratings rating={2.5} numberOfReviews={8} />
      <h1 className="text-4xl font-bold mt-4">Product Name</h1>
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
      <div className="flex flex-col gap-4 w-full">
        <PurchaseType />
        <PlansComponent />
      </div>
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
    </div>
  );
}
