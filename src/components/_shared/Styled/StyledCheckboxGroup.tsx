import React from "react";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";

type PROPS = {
  checkboxData: {
    label: string;
    data: {
      name: string;
    }[];
  }[];
};

export default function StyledCheckboxGroup(props: PROPS) {
  const { checkboxData } = props;
  const [selected, setSelected] = React.useState([""]);

  return (
    <div className="flex flex-col xs:flex-row gap-6">
      {checkboxData.map((data) => (
        <CheckboxGroup
          key={data.label}
          label={data.label}
          color="secondary"
          value={selected}
          onValueChange={setSelected}
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
