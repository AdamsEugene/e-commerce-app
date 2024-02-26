"use client";

import { useRouter, useParams } from "next/navigation";
import { Button, Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { IoArrowBackOutline } from "react-icons/io5";

import "../../home.css";
import ItemsInCarts from "./ItemsInCarts";
import DeliveryInfo from "./DeliveryInfo";
import PaymentMethod from "./PaymentMethod";
import OrderSummary from "./OrderSummary";
import { useAppStore } from "@/src/providers/AppStoreProvider";
import { useEffect } from "react";
import productList from "@/src/utils/productList";

type PROPS = {
  buyNow?: boolean;
};

export default function CheckingOut(props: PROPS) {
  const itemsInCart = useAppStore((state) => state.itemsInCart);
  const selectedProduct = useAppStore((state) => state.selectedProduct);
  const addToBuyNow = useAppStore((state) => state.addToBuyNow);
  const addToSelectedProduct = useAppStore(
    (state) => state.addToSelectedProduct
  );

  const totalItems = props.buyNow ? 1 : itemsInCart;

  const router = useRouter();
  const param = useParams();

  useEffect(() => {
    if (props.buyNow && !selectedProduct) {
      addToBuyNow("default", param.product_id as string);
      addToSelectedProduct(
        productList.find((p) => p.productId === param.product_id)!
      );
    }
  }, [addToBuyNow, addToSelectedProduct, param, props.buyNow, selectedProduct]);

  return (
    <div className="main flex flex-col w-full items-center">
      <div className="flex items-start w-full">
        <Button
          color="default"
          variant="light"
          startContent={<IoArrowBackOutline />}
          onClick={() => router.back()}
        >
          Back to {selectedProduct?.title || "details"}
        </Button>
      </div>
      <div className="main flex gap-5 w-full">
        <div className="w-full">
          <Card className="w-full">
            <CardBody className="flex flex-col gap-2">
              <CardHeader>
                1. REVIEW YOUR ORDER ({totalItems} ITEM
                {totalItems > 1 ? "S" : ""})
              </CardHeader>
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
    </div>
  );
}
