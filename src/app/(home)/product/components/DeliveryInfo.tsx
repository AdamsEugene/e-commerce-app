"use client";

import React from "react";
import { MdMail } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { FaPhone, FaRegFileZipper } from "react-icons/fa6";
import { FaAddressCard, FaCity } from "react-icons/fa";
import { Checkbox } from "@nextui-org/react";
import SelectWithIcon, {
  SELECT_ICON_PROPS,
} from "@/src/components/others/SelectWithIcon";
import StyledInput, {
  INPUT_PROPS,
} from "@/src/components/_shared/Styled/StyledInput";

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

const stateData: SELECT_ICON_PROPS = {
  label: "State/territory",
  isRequired: true,
  data: [
    { key: "argentina", src: "https://flagcdn.com/ar.svg", name: "Argentina" },
    { key: "venezuela", src: "https://flagcdn.com/ve.svg", name: "Venezuela" },
    { key: "brazil", src: "https://flagcdn.com/br.svg", name: "Brazil" },
    {
      key: "switzerland",
      src: "https://flagcdn.com/ch.svg",
      name: "Switzerland",
    },
    { key: "germany", src: "https://flagcdn.com/de.svg", name: "Germany" },
    { key: "spain", src: "https://flagcdn.com/es.svg", name: "Spain" },
    { key: "france", src: "https://flagcdn.com/fr.svg", name: "France" },
    { key: "italy", src: "https://flagcdn.com/it.svg", name: "Italy" },
    { key: "mexico", src: "https://flagcdn.com/mx.svg", name: "Mexico" },
  ],
};

const countryData: SELECT_ICON_PROPS = {
  label: "Country",
  isRequired: true,
  data: [
    { key: "argentina", src: "https://flagcdn.com/ar.svg", name: "Argentina" },
    { key: "venezuela", src: "https://flagcdn.com/ve.svg", name: "Venezuela" },
    { key: "brazil", src: "https://flagcdn.com/br.svg", name: "Brazil" },
    {
      key: "switzerland",
      src: "https://flagcdn.com/ch.svg",
      name: "Switzerland",
    },
    { key: "germany", src: "https://flagcdn.com/de.svg", name: "Germany" },
    { key: "spain", src: "https://flagcdn.com/es.svg", name: "Spain" },
    { key: "france", src: "https://flagcdn.com/fr.svg", name: "France" },
    { key: "italy", src: "https://flagcdn.com/it.svg", name: "Italy" },
    { key: "mexico", src: "https://flagcdn.com/mx.svg", name: "Mexico" },
  ],
};

export default function DeliveryInfo() {
  return (
    <div className="flex flex-col gap-4">
      {formData.map((data) => (
        <StyledInput key={data.label as string} {...data} iconStart />
      ))}
      <SelectWithIcon {...stateData} />
      <SelectWithIcon {...countryData} />
      <Checkbox defaultSelected color="secondary">
        Same billing address
      </Checkbox>
    </div>
  );
}
