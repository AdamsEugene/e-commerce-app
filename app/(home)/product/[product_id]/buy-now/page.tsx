import { Metadata } from "next/types";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

import "../../../../(home)/home.css";
import ItemsInCarts from "../../components/ItemsInCarts";
import DeliveryInfo from "../../components/DeliveryInfo";
import PaymentMethod from "../../components/PaymentMethod";
import OrderSummary from "../../components/OrderSummary";

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
              <ItemsInCarts buyNow />
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
        <div className="flex w-full flex-col gap-6">
          <Card className="w-full">
            <CardBody>
              <CardHeader>3. SELECT PAYMENT METHOD</CardHeader>
              <Divider className="mb-4" />
              <PaymentMethod />
            </CardBody>
          </Card>
          <Card className="w-full">
            <CardBody>
              <CardHeader>ORDER SUMMARY</CardHeader>
              <Divider className="mb-4" />
              <OrderSummary />
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}
