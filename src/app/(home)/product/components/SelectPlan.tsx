"use client";

import { useParams } from "next/navigation";
import {
  Card,
  CardBody,
  CardHeader,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { FaCalendarAlt, FaCalendarCheck, FaCalendarDay } from "react-icons/fa";
import { BiCalendarWeek, BiCalendar, BiCalendarEvent } from "react-icons/bi";

import ConditionalRender from "@/src/components/_shared/Conditional/ConditionalRender";
import { useAppStore } from "@/src/providers/AppStoreProvider";
import {
  campaignStatusColor,
  getPeriodEquivalent,
  getRandomTitle,
  getValueFromMoney,
  radiateStatus,
} from "@/src/utils/functions";
import { purchasePlan } from "@/src/utils/onProduct";
import cartItems from "@/src/utils/cartItem";
import ConditionalRenderAB from "@/src/components/_shared/Conditional/ConditionalRenderAB";
import { InCart } from "@/src/store/productSlice";
import { IconWrapper } from "@/src/components/_shared/others/IconWrapper";
import { useState } from "react";

export default function SelectPlan() {
  const { data, description, label, icon } = purchasePlan;
  const Icon = icon;

  const params = useParams();
  const productId = params.product_id as string;

  const changePlan = useAppStore((state) => state.changePlan);
  const selectedPlan = useAppStore((state) => state.selectedPlan);

  const getCurrentItem = cartItems.find((item) => item.productId === productId);
  const getItem = (value: Exclude<InCart, "later">) =>
    data.find((item) => item.value === value)!;

  const PayNowIcon = getItem("default").icon;

  return (
    <>
      <ModalHeader>
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <Icon className="text-2xl" />
            <p className="text-lg font-bold">{label}</p>
          </div>
          <p className="text-sm text-default-500">{description}</p>
        </div>
      </ModalHeader>
      <ModalBody>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 xs:gap-y-4 md:gap-4">
          <div className="flex flex-col gap-4">
            {data.map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.value}
                  isPressable
                  onClick={() => changePlan(item.value)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-3">
                        <Icon className="text-xl" />
                        <p className="text-base font-bold">{item.label}</p>
                      </div>
                      <ConditionalRender
                        condition={selectedPlan === item.value}
                        Component={
                          <div className="flex items-center gap-2">
                            <div
                              className={`h-2 w-2 rounded-full glowing-${radiateStatus(
                                "active"
                              )}`}
                              style={{
                                background: campaignStatusColor("active"),
                              }}
                            />
                          </div>
                        }
                      />
                    </div>
                  </CardHeader>
                  <CardBody>
                    <p className="text-sm text-default-500">
                      {item.description}
                    </p>
                  </CardBody>
                </Card>
              );
            })}
          </div>
          <div className="flex flex-col col-span-2 gap-4 md:border-l-1 border-default-300 md:pl-4 xs:border-t-1 xs:pt-4">
            <ConditionalRenderAB
              condition={selectedPlan === "default"}
              ComponentA={
                <div className="flex items-center justify-center w-full h-full relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
                    <PayNowIcon className="text-[400px] text-success-50 opacity-50" />
                  </div>
                  <p className="text-9xl font-bold text-default-500">
                    {getCurrentItem?.price}
                  </p>
                </div>
              }
              ComponentB={
                <ConditionalRenderAB
                  condition={selectedPlan === "leasing"}
                  ComponentA={<PlanComponent item={getItem("leasing")} />}
                  ComponentB={
                    <ConditionalRenderAB
                      condition={selectedPlan === "rent"}
                      ComponentA={<PlanComponent item={getItem("rent")} />}
                      ComponentB={
                        <PlanComponent item={getItem("high_purchase")} />
                      }
                    />
                  }
                />
              }
            />
          </div>
        </div>
      </ModalBody>
      <ModalFooter></ModalFooter>
    </>
  );
}

type SUB_PROPS = {
  item: (typeof purchasePlan)["data"][number];
};

const leaseTitle = [
  "Own it Now, Pay Over Time",
  "Flexible Ownership with Leasing.",
];

const rentTitle = [
  "Enjoy it Now, Without Commitment",
  "Flexible Access to Top Products.",
];

const highPurchaseTitle = [
  "Own it Today, Enjoy it Forever",
  "Invest in Quality, Get Lasting Value.",
];

const rentalTerms = [
  {
    key: "weekly",
    duration: "Week",
    icon: BiCalendarWeek,
    description: "Enjoy the product for a short-term commitment.",
    price: "$19.99",
  },
  {
    key: "monthly",
    duration: "Month",
    icon: BiCalendar,
    description: "Get the most value with a longer rental period.",
    price: "$79.99",
  },
  {
    key: "quarterly",
    duration: "3 Months",
    icon: BiCalendarEvent,
    description: "Rent for a quarter and experience extended convenience.",
    price: "$219.99",
  },
  // You can add more options here if needed
];

const leaseData = [
  {
    key: "12_months",
    duration: "12 Months",
    icon: FaCalendarAlt,
    description: "Lease the product for 12 months with flexible terms.",
    price: "$20/month",
  },
  {
    key: "24_months",
    duration: "24 Months",
    icon: FaCalendarCheck,
    description: "Lease the product for 24 months with better pricing options.",
    price: "$18/month",
  },
  {
    key: "36_months",
    duration: "36 Months",
    icon: FaCalendarDay,
    description:
      "Lease the product for 36 months with the best pricing and maximum benefits.",
    price: "$15/month",
  },
];

const getMoneyWithoutMonth = (money: string) => money.split("/")?.[0] || "";
const getDuration = (duration: string) => duration.split(" ")?.[0] || "1";

const PlanComponent = ({ item }: SUB_PROPS) => {
  const data =
    item.value === "leasing"
      ? leaseData
      : item.value === "rent"
      ? rentalTerms
      : rentalTerms;

  const [selectedPeriod, setSelectedPeriod] = useState(data[0].key);

  const title =
    item.value === "leasing"
      ? leaseTitle
      : item.value === "rent"
      ? rentTitle
      : highPurchaseTitle;

  const selectedItem = data.find((item) => item.key === selectedPeriod)!;

  const Icon = item.icon;

  return (
    <div className="relative w-full h-full flex flex-col gap-4">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
        <Icon className="text-[400px] text-success-50 opacity-50" />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-lg font-bold">{getRandomTitle(title)}</p>
        <p className="text-sm text-default-500">
          Lower upfront cost, potential tax benefits, and easy upgrades after
          the lease term.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold">
          Lease durations:{" "}
          <span className="text-default-500">{selectedItem.duration}</span>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {data.map((_item) => {
            const Icon = _item.icon;
            return (
              <Card
                key={_item.key}
                isPressable
                shadow="sm"
                className="h-full"
                onClick={() => setSelectedPeriod(_item.key)}
              >
                <CardBody>
                  <ConditionalRender
                    condition={selectedPeriod === _item.key}
                    Component={
                      <div className="flex items-center gap-2 absolute right-2">
                        <div
                          className={`h-2 w-2 rounded-full glowing-${radiateStatus(
                            "active"
                          )}`}
                          style={{
                            background: campaignStatusColor("active"),
                          }}
                        />
                      </div>
                    }
                  />
                  <div className="h-full flex flex-col justify-between text-center gap-2">
                    <div className="flex flex-col items-center justify-center w-full gap-2">
                      <IconWrapper className="bg-success/10 text-success/60 !w-16 !h-16">
                        <Icon className="text-3xl" />
                      </IconWrapper>
                      <p className="text-xl font-bold text-default-600">
                        {_item.duration}
                      </p>
                      <p className="text-sm text-default-500">
                        {_item.description}
                      </p>
                    </div>
                    <h2 className="text-xl font-bold text-default-500">
                      {getMoneyWithoutMonth(_item.price)}{" "}
                      <span className="italic">/month</span>
                    </h2>
                  </div>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold">
          Total amount to be paid at the end of the:{" "}
          <span className="text-default-500">{selectedItem.duration}</span>
        </p>
        <Card>
          <CardBody>
            <div className="flex items-center justify-center w-full h-full">
              <p className="text-7xl font-bold text-default-500">
                $
                {+getValueFromMoney(getMoneyWithoutMonth(selectedItem.price)) *
                  (item.value === "leasing"
                    ? +getDuration(selectedItem.duration)
                    : (getPeriodEquivalent as any)[selectedItem.duration])}
              </p>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
