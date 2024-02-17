// "use client";

import React from "react";
import { Tabs, Tab, TableProps } from "@nextui-org/react";
import { FaCcMastercard, FaPaypal, FaMobile } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { GoCrossReference } from "react-icons/go";

import StyledInput, { INPUT_PROPS } from "./StyledInput";
import StyledButton from "./StyledButton";
import SelectWithIcon, { SELECT_ICON_PROPS } from "./SelectWithIcon";
import svgLoader from "@/src/config/svgLoader";

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

const TabWithIcon: React.FC<{}> = () => {
  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Options"
        color="secondary"
        variant="light"
        fullWidth
        defaultSelectedKey={"momo"}
      >
        <Tab
          key="card"
          title={
            <div className="flex items-center space-x-2">
              <FaCcMastercard />
              <span>Card</span>
            </div>
          }
        >
          <CreditCardForm formData={formData} />
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
          <PayPalSection />
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
          <MomoSection momoData={momoData} providers={providers} />
        </Tab>
      </Tabs>
    </div>
  );
};

interface CreditCardFormProps {
  formData: INPUT_PROPS[];
}

const CreditCardForm: React.FC<CreditCardFormProps> = ({ formData }) => (
  <div className="flex w-full flex-col gap-4">
    {formData.map((data) => (
      <StyledInput key={data.label as string} {...data} />
    ))}
  </div>
);

const PayPalSection: React.FC = () => (
  <div className="flex w-full flex-col gap-4">
    <StyledButton
      startContent={<FaPaypal />}
      content="PayPal"
      variant="bordered"
      color="secondary"
    />
  </div>
);

interface MomoSectionProps {
  momoData: INPUT_PROPS[];
  providers: SELECT_ICON_PROPS;
}

const MomoSection: React.FC<MomoSectionProps> = ({ momoData, providers }) => (
  <div className="flex w-full flex-col gap-4">
    <SelectWithIcon {...providers} />
    {momoData.map((data) => (
      <StyledInput key={data.label as string} {...data} iconStart />
    ))}
  </div>
);

export default TabWithIcon;
