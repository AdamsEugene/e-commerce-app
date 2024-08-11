"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  CardBody,
  DatePicker,
} from "@nextui-org/react";
import { IconType } from "react-icons";
import { FaCalendarAlt, FaCalendarCheck, FaCalendarDay } from "react-icons/fa";
import { campaignStatusColor, radiateStatus } from "@/src/utils/functions";
import { BiCalendar, BiCalendarEvent, BiCalendarWeek } from "react-icons/bi";
import { GrMoney } from "react-icons/gr";

import {
  customizationTab,
  productDetailOptions,
  purchasePlan,
} from "@/src/utils/onProduct";
import ConditionalRenderAB from "../Conditional/ConditionalRenderAB";
import ConditionalRender from "../Conditional/ConditionalRender";
import { IconWrapper } from "../others/IconWrapper";
import StyledInput from "./StyledInput";

type LABEL = "Pay As You Go" | "Lease" | "Item Rental" | "Hire Purchase";

export default function StyledAccordion({ price }: { price: number }) {
  const { data, description, label, icon } = purchasePlan;
  const customizedData = customizationTab.map((item) => ({
    key: item.id,
    name: item.label,
    icon: item.icon,
    description: item.description,
  }));

  const planOptions = data.map((item) => ({
    key: item.label,
    name: item.label,
    icon: item.icon,
    description: item.description,
    // content: (
    //   <RenderContent icon={item.icon} label={item.label} price={price} />
    // ),
  }));

  return (
    <Accordion variant="splitted" className="!shadow-none !px-0">
      {productDetailOptions.map((item) => {
        const Icon = item.icon;
        const dataToRender =
          item.key === "selectPlan" ? planOptions : customizedData;
        return (
          <AccordionItem
            key={item.key}
            aria-label={item.name}
            title={item.name}
            subtitle={item.description}
            className="!shadow-md h-max"
            startContent={<Icon className="text-2xl text-default-500" />}
          >
            <Accordion variant="splitted" className="!shadow-none !px-0">
              {dataToRender.map((data) => {
                const Icon = data.icon;
                return (
                  <AccordionItem
                    key={data.key}
                    aria-label={data.name}
                    title={data.name}
                    subtitle={data.description}
                    className="!shadow-none h-max ml-2"
                    startContent={
                      <Icon className="text-2xl text-default-500" />
                    }
                  >
                    <ConditionalRenderAB
                      condition={item.key === "selectPlan"}
                      ComponentA={
                        <RenderContent
                          icon={data.icon}
                          label={data.name as LABEL}
                          price={price}
                        />
                      }
                      ComponentB={<RenderCustomization />}
                    />

                    <div className="flex gap-4 items-center justify-end mt-4">
                      <Button color="warning" variant="light">
                        Read more about plan
                      </Button>
                      <Button color="secondary" variant="light">
                        Select plan
                      </Button>
                    </div>
                  </AccordionItem>
                );
              })}
            </Accordion>
            compare plans
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

const RenderContent = ({
  icon,
  label,
  price,
}: {
  icon: IconType;
  label: LABEL;
  price: number;
}) => {
  const Icon = icon;
  return (
    <div className="relative w-full h-full flex flex-col gap-4 min-h-48">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Icon className="text-[200px] text-success-50 opacity-50" />
      </div>
      <div className="w-full h-full flex justify-center items-center z-10 min-h-48">
        <ConditionalRenderAB
          condition={label === "Pay As You Go"}
          ComponentA={<PayNow price={price} />}
          ComponentB={
            <ConditionalRenderAB
              condition={label === "Lease"}
              ComponentA={<RenderPlan label={label} />}
              ComponentB={
                <ConditionalRenderAB
                  condition={label === "Item Rental"}
                  ComponentA={<RenderPlan label={label} />}
                  ComponentB={<HirePurchase />}
                />
              }
            />
          }
        />
      </div>
    </div>
  );
};

const PayNow = ({ price }: { price: number }) => {
  return (
    <>
      <p className="text-7xl font-bold text-default-500">{price}</p>
    </>
  );
};

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

const getMoneyWithoutMonth = (money: string) => money.split("/")?.[0] || "";

const RenderPlan = ({ label }: { label: LABEL }) => {
  const data =
    label === "Lease"
      ? leaseData
      : label === "Item Rental"
        ? rentalTerms
        : rentalTerms;
  const [selectedPeriod, setSelectedPeriod] = useState(data[0].key);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 w-full">
      {data.map((_item) => {
        const Icon = _item.icon;
        return (
          <Card
            key={_item.key}
            isPressable
            shadow="sm"
            className={`h-full ${selectedPeriod === _item.key ? "border-1 border-success" : ""}`}
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
              <div className="h-full flex justify-between text-center gap-2 w-full">
                <div className="flex items-  lg:justify-center w-full gap-2">
                  <div>
                    <IconWrapper className="bg-success/10 text-success/60 !w-10 !h-10">
                      <Icon className="text-xl" />
                    </IconWrapper>
                  </div>
                  <div className="flex flex-col">
                    <div className=" flex items-center justify-between">
                      <p className="text-base font-bold text-default-600">
                        {_item.duration}
                      </p>
                      <h2 className="text-base font-bold text-default-500 whitespace-nowrap">
                        {getMoneyWithoutMonth(_item.price)}{" "}
                        <span className="italic">/month</span>
                      </h2>
                    </div>
                    <p className="text-sm text-start text-default-500">
                      {_item.description}
                    </p>
                  </div>
                </div>
              </div>
              {/* <p className="lg:hidden text-xs text-default-500 mt-2">
                {_item.description}
              </p> */}
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
};

const HirePurchase = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <StyledInput
        placeholder="$78.98"
        label="Initial payment"
        fullWidth
        startContent={<GrMoney />}
      />
      <StyledInput
        placeholder="$50.00"
        label="Monthly / Weekly payment"
        fullWidth
        startContent={<GrMoney />}
      />
      <DatePicker label="Duration" labelPlacement="outside" fullWidth />
    </div>
  );
};

const RenderCustomization = () => {
  return <div></div>;
};
