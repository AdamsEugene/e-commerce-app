import React from "react";
import { Select, SelectItem, Avatar } from "@nextui-org/react";

export type SELECT_ICON_PROPS = {
  label: string;
  data: { key: string; src: string; name: string }[];
  isRequired?: boolean;
};

export default function SelectWithIcon(props: SELECT_ICON_PROPS) {
  const { data, label, isRequired } = props;
  return (
    <Select
      className="w-full"
      label={label}
      labelPlacement="outside"
      placeholder="Select country"
      isRequired={isRequired}
    >
      {data.map((item) => (
        <SelectItem
          key={item.key}
          startContent={
            <Avatar alt="Mexico" className="w-6 h-6" src={item.src} />
          }
        >
          {item.name}
        </SelectItem>
      ))}
    </Select>
  );
}
