"use client";

import React from "react";
import {
  CardFooter,
  CardHeader,
  Checkbox,
  Divider,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import { MdErrorOutline } from "react-icons/md";

import Loading from "@/components/Loading";
import StyledButton from "@/components/StyledButton";
import StyledModal from "@/components/StyledModal";
import formatCurrency from "@/utils/formatCurrency";
import generateOrderSummaryData from "@/utils/orderSummary";

type SUMMARY_DATA = {
  name: string;
  status: "pending" | "error" | "success";
};

const summaryData: SUMMARY_DATA[] = [
  { name: "Order reviewed", status: "success" },
  { name: "Delivery option", status: "success" },
  { name: "Delivery address", status: "error" },
  { name: "Payment method", status: "pending" },
  { name: "Summary", status: "error" },
];

export default function OrderSummary() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const orderSummaryData = generateOrderSummaryData(4);

  return (
    <div className="flex flex-col gap-4">
      <ul className="flex flex-col gap-4">
        {orderSummaryData.map((data) => (
          <li key={data.name} className="flex justify-between items-center">
            <p className="text-sm text-gray-500">
              {data.amount ? `${data.amount} X ${data.name}` : `${data.name}`}
            </p>
            <p className="text-sm text-gray-500">
              {formatCurrency(data.price)}
            </p>
          </li>
        ))}
      </ul>
      <Divider />
      <ul className="flex flex-col gap-4">
        <li className="flex justify-between items-center">
          <p className="text-sm text-gray-600">Subtotal</p>
          <p className="text-sm text-gray-600">$53.23</p>
        </li>
        <li className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">Shipping to Ghana</p>
            <p className="text-sm text-gray-400">
              Express (4–6 business days, tracking)
            </p>
          </div>
          <p className="text-sm text-gray-500">$15</p>
        </li>
        <li className="flex justify-between items-center">
          <p className="text-sm text-gray-600">Sales Tax </p>
          <p className="text-sm text-gray-600">FREE</p>
        </li>
      </ul>
      <Divider />
      <div className="flex justify-between items-center">
        <p className="text-2xl text-gray-600">ORDER TOTAL</p>
        <div className="flex items-baseline gap-2">
          <span className="text-sm text-gray-600">USD</span>
          <p className="text-2xl text-gray-600">$324.56</p>
        </div>
      </div>
      <Checkbox defaultSelected color="secondary">
        Email me about new products
      </Checkbox>
      <StyledButton
        content="COMPLETE ORDER"
        color="secondary"
        onClick={onOpen}
      />
      <p className="text-xs text-gray-400">
        *By signing up or placing an order, you&lsquo;re consenting to our
        privacy policy.
      </p>
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
          {(onClose) => (
            <ModalBody>
              <CardHeader></CardHeader>
              <div className="flex flex-col gap-4">
                <ul className="flex flex-col gap-4">
                  {summaryData.map((item) => (
                    <li
                      key={item.name}
                      className="flex justify-between items-center"
                    >
                      <p className="text-2xl text-gray-600">{item.name}</p>
                      {item.status === "pending" ? (
                        <Loading size="sm" color="secondary" className="mr-2" />
                      ) : item.status === "success" ? (
                        <Checkbox defaultSelected color="secondary" />
                      ) : (
                        <Checkbox
                          defaultSelected
                          color="danger"
                          icon={<MdErrorOutline />}
                        />
                      )}
                      <></>
                    </li>
                  ))}
                </ul>
              </div>
              <CardFooter></CardFooter>
            </ModalBody>
          )}
        </ModalContent>
      </StyledModal>
    </div>
  );
}
