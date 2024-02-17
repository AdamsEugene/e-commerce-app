import React from "react";
import { RadioGroup, Radio, cn } from "@nextui-org/react";

export const CustomRadio = (props: any) => {
  const { children, ...otherProps } = props;

  return (
    <Radio
      {...otherProps}
      color="secondary"
      classNames={{
        base: cn(
          "inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between",
          "flex-row-reverse max-w-[100%] cursor-pointer rounded-lg gap-4 p-4 border-2 border-default",
          "data-[selected=true]:border-secondary"
        ),
      }}
    >
      {children}
    </Radio>
  );
};

type PROPS = {
  label: string;
  description: string;
  data: { label: string; description: string; value: string }[];
};

export default function PurchaseType(props: PROPS) {
  const { data, description, label } = props;
  return (
    <RadioGroup label={label} description={description} defaultValue={data[0].value}>
      {data.map((item) => (
        <CustomRadio key={item.label} {...item}>
          {item.label}
        </CustomRadio>
      ))}
    </RadioGroup>
  );
}
