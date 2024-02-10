"use client";

import CountrySelect from "@/components/CountrySelect";
import StyledInput, { INPUT_PROPS } from "@/components/StyledInput";
import generateData from "@/utils/generateDataForSelect";
import { Checkbox, Select, SelectItem } from "@nextui-org/react";
import React from "react";
import { MdMail, MdOutlineSecurity } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { FaPhone, FaRegFileZipper } from "react-icons/fa6";
import { FaAddressCard, FaCity } from "react-icons/fa";
import { TbBuildingEstate } from "react-icons/tb";
import { TfiWorld } from "react-icons/tfi";

const formData: INPUT_PROPS[] = [
  {
    label: "Email",
    placeholder: "adams@gmail.com",
    type: "email",
    Icon: MdMail,
    isRequired: true,
  },
  {
    label: "First name",
    placeholder: "",
    type: "text",
    Icon: IoPerson,
    isRequired: true,
  },
  {
    label: "Last name",
    placeholder: "",
    type: "text",
    Icon: IoPerson,
    isRequired: true,
  },
  {
    label: "Telephone",
    placeholder: "",
    type: "phone",
    Icon: FaPhone,
    isRequired: true,
  },
  {
    label: "Delivery address",
    placeholder: "",
    type: "address",
    Icon: FaAddressCard,
    isRequired: true,
  },
  {
    label: "Suburb/town",
    placeholder: "",
    type: "text",
    Icon: FaCity,
    isRequired: true,
  },
  {
    label: "Postcode/ZIP Code",
    placeholder: "",
    type: "password",
    Icon: FaRegFileZipper,
    isRequired: true,
  },
];

const formData2 = [
  {
    label: "State/territory",
    placeholder: "",
    Icon: TbBuildingEstate,
    isRequired: true,
    children: [],
    data: generateData(9),
  },
  {
    label: "Country",
    placeholder: "",
    Icon: TfiWorld,
    isRequired: true,
    children: [],
    data: generateData(20),
  },
];

export default function DeliveryInfo() {
  return (
    <div className="flex flex-col gap-4">
      {formData.map((data) => (
        <StyledInput key={data.label as string} {...data} iconStart />
      ))}
      <CountrySelect />
      <CountrySelect />
      <Checkbox defaultSelected color="secondary">Same billing address</Checkbox>
    </div>
  );
}
