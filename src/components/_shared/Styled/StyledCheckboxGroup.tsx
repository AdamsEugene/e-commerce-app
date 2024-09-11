import React from "react";
import { CheckboxGroup, Checkbox, CheckboxGroupProps } from "@nextui-org/react";

type PROPS = {
  setCategories: React.Dispatch<React.SetStateAction<string[] | undefined>>;
  categories?: string[];
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
  const { checkboxData, setCategories, categories, ...others } = props;

  return (
    <div className="flex flex-col xs:flex-row gap-6">
      {checkboxData?.map((data) => (
        <CheckboxGroup
          key={data.label}
          label={data.label}
          color="secondary"
          value={categories}
          onValueChange={setCategories}
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
