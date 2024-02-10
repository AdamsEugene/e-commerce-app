import { Metadata } from "next/types";

import "../../../../(home)/home.css";
import ItemsInCarts from "../../components/ItemsInCarts";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import DeliveryInfo from "../../components/DeliveryInfo";
import PurchaseType from "@/components/PurchaseType";

const plan = {
  label: "Select delivery",
  description: "Selected plan can be changed at any time.",
  data: [
    {
      description: "(1–6 weeks, no tracking)",
      value: "regular",
      label: "$8 - Regular",
    },
    {
      description: "(4–6 business days, tracking)",
      value: "express",
      label: "$15 - Express",
    },
  ],
};

export const metadata: Metadata = {
  title: "Products Name",
};

export default function BuyNow() {
  return (
    <section className="w-full home">
      <div className="main flex gap-5 w-full pt-4">
        <div className="w-full">
          <Card className="w-full">
            <CardBody className="flex flex-col gap-2">
              <CardHeader>1. REVIEW YOUR ORDER (22 ITEMS)</CardHeader>
              <Divider className="mb-4" />
              <ItemsInCarts />
              <div className="flex justify-between">
                <p className="text-lg font-bold">SUBTOTAL</p>
                <p className="text-lg font-bold">$1,399USD</p>
              </div>
              <PurchaseType {...plan} />
            </CardBody>
          </Card>
        </div>
        <div className="w-full">
          <Card className="w-full">
            <CardBody className="flex flex-col gap-2">
              <CardHeader>2. DELIVERY ADDRESS</CardHeader>
              <Divider className="mb-4" />
              <p className="text-sm text-gray-400">All fields required</p>
              <DeliveryInfo />
            </CardBody>
          </Card>
        </div>
        <div className="w-full">
          <Card className="w-full">
            <CardBody>
              <CardHeader>3. SELECT PAYMENT METHOD</CardHeader>
              <Divider className="mb-4" />
              <ItemsInCarts />
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}
