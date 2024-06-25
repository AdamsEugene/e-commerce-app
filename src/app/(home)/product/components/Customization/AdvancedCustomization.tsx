import { useState } from "react";
import { RadioGroup, Radio, cn } from "@nextui-org/react";
import ConditionalRenderAB from "@/src/components/_shared/Conditional/ConditionalRenderAB";
import StyledFileUpload from "@/src/components/_shared/Styled/StyledFileUpload";
import StyledTextarea from "@/src/components/_shared/Styled/StyledTextarea";

export const CustomRadio = (props: any) => {
  const { children, ...otherProps } = props;

  return (
    <Radio
      {...otherProps}
      classNames={{
        base: cn(
          "inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between",
          "flex-row-reverse max-w-[300px] cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent",
          "data-[selected=true]:border-primary"
        ),
      }}
    >
      {children}
    </Radio>
  );
};

export default function AdvancedCustomization() {
  const [selected, setSelected] = useState("text");

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-lg font-bold">Advanced Customization</h2>
        <p className="text-sm text-default-500">
          Access detailed settings and advanced features to tailor your product
          to your exact needs.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 xs:gap-y-4 md:gap-4">
        <RadioGroup
          // label="Plans"
          // description="Selected plan can be changed at any time."
          defaultValue="text"
          value={selected}
          onValueChange={setSelected}
        >
          <CustomRadio
            // description="Up to 20 items"
            value="text"
          >
            Describe what you want
          </CustomRadio>
          <CustomRadio
            // description="Unlimited items. $10 per month."
            value="pro"
          >
            Upload Image / Video
          </CustomRadio>
        </RadioGroup>
        <div className="col-span-2">
          <ConditionalRenderAB
            condition={selected === "text"}
            ComponentA={<StyledTextarea />}
            ComponentB={<StyledFileUpload handleFileUpload={() => {}} />}
          />
        </div>
      </div>
    </div>
  );
}
