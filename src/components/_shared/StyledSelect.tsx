import React from "react";
import {
  Select,
  SelectItem,
  SelectProps,
  Chip,
  SelectedItems,
} from "@nextui-org/react";

type PROPS = {
  data: {
    label: string;
    value: string;
    description?: string;
  }[];
};

export default function StyledSelect(props: SelectProps & PROPS) {
  const { children, data, ...other } = props;
  return (
    <Select
      isMultiline={true}
      selectionMode="multiple"
      placeholder="Select a user"
      labelPlacement="outside"
      {...other}
      items={data}
      renderValue={(items: SelectedItems<PROPS["data"][0]>) => {
        return (
          <div className="flex flex-wrap gap-2">
            {items.map((item) => (
              <Chip key={item.key} color="secondary">
                {item.data?.label}
              </Chip>
            ))}
          </div>
        );
      }}
    >
      {(data) => (
        <SelectItem key={data.label} textValue={data.label}>
          {data.label}
        </SelectItem>
      )}
    </Select>
  );
}
