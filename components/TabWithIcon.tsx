"use client";

import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { FaCcMastercard, FaPaypal, FaMobile } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { GoCrossReference } from "react-icons/go";

import StyledInput, { INPUT_PROPS } from "./StyledInput";
import StyledButton from "./StyledButton";
import SelectWithIcon, { SELECT_ICON_PROPS } from "./SelectWithIcon";
import svgLoader from "@/config/svgLoader";

const formData: INPUT_PROPS[] = [
  {
    label: "Card Number",
    placeholder: ".... .... .... ....",
    type: "password",
  },
  {
    label: "Expiration date",
    placeholder: "MM/YY",
    type: "month",
  },
  {
    label: "CVV",
    placeholder: "...",
    type: "password",
  },
];

const momoData: INPUT_PROPS[] = [
  {
    label: "Telephone",
    placeholder: "",
    type: "phone",
    Icon: FaPhone,
    isRequired: true,
  },
  {
    label: "Reference",
    placeholder: "Any thing here",
    type: "address",
    Icon: GoCrossReference,
    isRequired: true,
  },
];

const providers: SELECT_ICON_PROPS = {
  label: "Provide",
  isRequired: true,
  data: [
    { key: "mtn", src: svgLoader("mtn"), name: "MTN" },
    { key: "vodafone", src: svgLoader("vodafone"), name: "Vodafone" },
    {
      key: "airtel/tigo",
      src: svgLoader("airtel"),
      name: "Airtel/Tigo",
    },
  ],
};

export default function TabWithIcon() {
  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options" color="secondary" variant="light" fullWidth>
        <Tab
          key="card"
          title={
            <div className="flex items-center space-x-2">
              <FaCcMastercard />
              <span>Card</span>
            </div>
          }
        >
          <div className="flex w-full flex-col gap-4">
            {formData.map((data) => (
              <StyledInput key={data.label as string} {...data} />
            ))}
          </div>
        </Tab>
        <Tab
          key="payPal"
          title={
            <div className="flex items-center space-x-2">
              <FaPaypal />
              <span>PayPal</span>
            </div>
          }
        >
          <div className="flex w-full flex-col gap-4">
            <StyledButton
              startContent={<FaPaypal />}
              content="PayPal"
              variant="bordered"
              color="secondary"
            />
          </div>
        </Tab>
        <Tab
          key="momo"
          title={
            <div className="flex items-center space-x-2">
              <FaMobile />
              <span>Momo</span>
            </div>
          }
        >
          <div className="flex w-full flex-col gap-4">
            <SelectWithIcon {...providers} />
            {momoData.map((data) => (
              <StyledInput key={data.label as string} {...data} iconStart />
            ))}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
