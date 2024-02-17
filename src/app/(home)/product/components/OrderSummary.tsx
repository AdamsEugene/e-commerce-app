"use client";

import React, { useState } from "react";
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
import { motion, useMotionValue } from "framer-motion";

import Loading from "@/src/components/Loading";
import StyledButton from "@/src/components/StyledButton";
import StyledModal from "@/src/components/StyledModal";
import formatCurrency from "@/src/utils/formatCurrency";
import generateOrderSummaryData from "@/src/utils/orderSummary";
import CircularProgress from "@/src/components/CircularProgress";
import TrackingDelivery from "./TrackingDelivery";

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
  const [status, setStatus] = useState<"pending" | "error" | "success">(
    "success"
  );
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // Renamed
  const {
    isOpen: newIsOpen,
    onOpen: newOnOpen,
    onOpenChange: newOnOpenChange,
  } = useDisclosure();

  const progress = useMotionValue(90);
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
              <CardHeader>
                <p className="text-2xl text-gray-600">Wait a minute</p>
              </CardHeader>
              <Divider />
              <div className="flex flex-col gap-8 mt-2">
                <ul className="flex flex-col gap-4">
                  {summaryData.map((item) => (
                    <li
                      key={item.name}
                      className="flex justify-between items-center"
                    >
                      <p className="text-xl text-gray-600">{item.name}</p>
                      {item.status === "pending" ? (
                        <Loading size="sm" color="secondary" className="mr-2" />
                      ) : item.status === "success" ? (
                        <Checkbox defaultSelected color="secondary" size="lg" />
                      ) : (
                        <Checkbox
                          defaultSelected
                          color="danger"
                          icon={<MdErrorOutline />}
                          size="lg"
                        />
                      )}
                      <></>
                    </li>
                  ))}
                </ul>
                <Divider />
                <div className="flex flex-col justify-center items-center w-full gap-4">
                  <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: 100 }}
                    style={{ x: progress }}
                    transition={{ duration: 4 }}
                  />
                  <CircularProgress progress={progress} path="success" />
                  {status === "error" ? (
                    <p className="text-xl text-red-400">Transaction failed</p>
                  ) : (
                    <>
                      <p className="text-xl text-green-400">
                        Transaction completed
                      </p>
                      <StyledButton
                        content="Track your delivery"
                        onClick={newOnOpen}
                      />
                    </>
                  )}
                  {/* <CancelProgress /> */}
                </div>
              </div>
              <CardFooter></CardFooter>
            </ModalBody>
          )}
        </ModalContent>
      </StyledModal>
      <StyledModal
        isOpen={newIsOpen}
        onOpenChange={newOnOpenChange}
        placement="top"
        backdrop="blur"
        size="2xl"
        className="search_result"
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <ModalBody>
              <CardHeader>
                <p className="text-2xl text-gray-600">Tracking your delivery</p>
              </CardHeader>
              <Divider />
              <TrackingDelivery />
              <CardFooter></CardFooter>
            </ModalBody>
          )}
        </ModalContent>
      </StyledModal>
    </div>
  );
}
