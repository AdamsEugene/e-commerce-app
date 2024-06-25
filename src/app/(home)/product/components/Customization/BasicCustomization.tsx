"use client";

import ConditionalRenderAB from "@/src/components/_shared/Conditional/ConditionalRenderAB";
import StyledInput from "@/src/components/_shared/Styled/StyledInput";
import StyledSelect from "@/src/components/_shared/Styled/StyledSelect";
import StyledTextarea from "@/src/components/_shared/Styled/StyledTextarea";
import ColorPicker from "@/src/components/_shared/others/ColorPicker";
import React, { useState } from "react";
import { ColorResult } from "react-color";

const basicCustomizationData = [
  {
    label: "Color",
    value: "color",
    description: "Choose from a range of colors to personalize your product.",
  },
  {
    label: "Size",
    value: "size",
    description: "Select the size that best fits your needs.",
  },
  {
    label: "Dimension",
    value: "Dimension",
    description: "Select the dimension that best fits your needs.",
  },
  {
    label: "Material",
    value: "material",
    description: "Pick your preferred material for the product.",
  },
  {
    label: "Engraving",
    value: "engraving",
    description: "Add a custom engraving to your product.",
  },
  {
    label: "Packaging",
    value: "packaging",
    description: "Select a packaging option for your product.",
  },
  {
    label: "Accessories",
    value: "accessories",
    description: "Include additional accessories with your product.",
  },
];

const getDescription = (label: string) =>
  basicCustomizationData.find((item) => item.label === label)?.description!;

export default function BasicCustomization() {
  const [selectedCustomization, setSelectedCustomization] = useState("Color");
  const [color, setColor] = useState("");

  const onColorChange = (color: ColorResult) => {
    setColor(color.hex);
  };

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-lg font-bold">Basic Customization</h2>
        <p className="text-sm text-default-500">
          Choose from a variety of general customization options to personalize
          your product.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 xs:gap-y-4 md:gap-4">
        <StyledSelect
          data={basicCustomizationData}
          selectionMode="single"
          color="default"
          variant="flat"
          defaultSelectedKeys={["Color"]}
          onSelectionChange={(e: any) =>
            setSelectedCustomization(e["currentKey"])
          }
        >
          <></>
        </StyledSelect>
        <div className="flex flex-col items-center gap-4 w-full col-span-2">
          <p className="text-base font-semibold text-default-500">
            {getDescription(selectedCustomization)}
          </p>
          <ConditionalRenderAB
            condition={selectedCustomization === "Color"}
            ComponentA={
              <ColorComponent color={color} onColorChange={onColorChange} />
            }
            ComponentB={
              <ConditionalRenderAB
                condition={selectedCustomization === "Size"}
                ComponentA={<SizeComponent />}
                ComponentB={
                  <ConditionalRenderAB
                    condition={selectedCustomization === "Dimension"}
                    ComponentA={<DimensionComponent />}
                    ComponentB={
                      <ConditionalRenderAB
                        condition={selectedCustomization === "Material"}
                        ComponentA={<MaterialComponent />}
                        ComponentB={
                          <ConditionalRenderAB
                            condition={selectedCustomization === "Engraving"}
                            ComponentA={<EngravingComponent />}
                            ComponentB={
                              <ConditionalRenderAB
                                condition={
                                  selectedCustomization === "Packaging"
                                }
                                ComponentA={<EngravingComponent />}
                                ComponentB={<EngravingComponent />}
                              />
                            }
                          />
                        }
                      />
                    }
                  />
                }
              />
            }
          />
        </div>
      </div>
    </div>
  );
}

type COLOR_PROPS = {
  color: string;
  onColorChange: (color: ColorResult) => void;
};

const ColorComponent = ({ color, onColorChange }: COLOR_PROPS) => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div>
        <ColorPicker
          onColorChange={onColorChange}
          className="!shadow-none light:!bg-white dark:!bg-[#18181B]"
        />
        <div className="flex items-center justify-center gap-4">
          <p>Selected color:</p>
          <div
            className={`h-8 w-8 rounded-full`}
            style={{ background: color }}
          />
        </div>
      </div>
    </div>
  );
};

type SIZE_PROPS = {};

const SizeComponent = ({}: SIZE_PROPS) => {
  return (
    <div className="flex flex-col justify-center items-center w-[80%]">
      <StyledInput type="number" />
    </div>
  );
};

type DIMENSION_PROPS = {};

const DimensionComponent = ({}: DIMENSION_PROPS) => {
  return (
    <div className="flex flex-col justify-center items-center w-[80%]">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 xs:gap-y-4 md:gap-4">
        <StyledInput type="number" />
        <StyledInput type="number" />
        <StyledInput type="number" />
      </div>
    </div>
  );
};

type MATERIAL_PROPS = {};

const MaterialComponent = ({}: MATERIAL_PROPS) => {
  return (
    <div className="flex flex-col justify-center items-center w-[80%]">
      <StyledInput />
    </div>
  );
};

type ENGRAVING_PROPS = {};

const EngravingComponent = ({}: ENGRAVING_PROPS) => {
  return (
    <div className="flex flex-col justify-center items-center w-[80%]">
      <StyledTextarea />
    </div>
  );
};
