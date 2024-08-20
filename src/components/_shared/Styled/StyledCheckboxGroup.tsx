"use client";

import React from "react";
import {
  CheckboxGroup,
  Checkbox,
  CheckboxGroupProps,
  Skeleton,
} from "@nextui-org/react";

type PROPS = {
  checkboxData?: {
    label: string;
    data: {
      name: string;
      slug: string;
      url: string;
    }[];
  }[];
};
export default function StyledCheckboxGroup(props: PROPS & CheckboxGroupProps) {
  const { checkboxData, ...others } = props;
  const [selected, setSelected] = React.useState([""]);

  return (
    <div className="flex flex-col xs:flex-row gap-6">
      {checkboxData?.map((data) => (
        <CheckboxGroup
          key={data.label}
          label={data.label}
          color="secondary"
          value={selected}
          onValueChange={setSelected}
          {...others}
        >
          {data.data.map((item) => (
            <Checkbox key={item.name} value={item.name}>
              {item.name}
            </Checkbox>
          ))}
        </CheckboxGroup>
      ))}
    </div>
  );
}
