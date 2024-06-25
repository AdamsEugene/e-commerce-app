import React from "react";
import {
  Select,
  SelectItem,
  SelectProps,
  Chip,
  SelectedItems,
  Tooltip,
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
      variant="flat"
      {...other}
      items={data}
      renderValue={(items: SelectedItems<PROPS["data"][number]>) => {
        return (
          <div className="flex flex-wrap gap-2">
            {items.map((item) => (
              <Tooltip
                key={item.key}
                color="foreground"
                showArrow={true}
                content={item.data?.description}
              >
                <Chip color={other.color || "secondary"}>
                  {item.data?.label}
                </Chip>
              </Tooltip>
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
