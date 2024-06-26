"use client";

import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  ModalFooter,
  ScrollShadow,
} from "@nextui-org/react";
import {
  FaPalette,
  FaArrowsAltV,
  FaRulerCombined,
  FaBox,
  FaPenFancy,
  FaGift,
  FaTools,
} from "react-icons/fa";
import { ColorResult } from "react-color";
import ConditionalRenderAB from "@/src/components/_shared/Conditional/ConditionalRenderAB";
import StyledInput from "@/src/components/_shared/Styled/StyledInput";
import StyledTextarea from "@/src/components/_shared/Styled/StyledTextarea";
import ColorPicker from "@/src/components/_shared/others/ColorPicker";
import ConditionalRender from "@/src/components/_shared/Conditional/ConditionalRender";
import { campaignStatusColor, radiateStatus } from "@/src/utils/functions";

const basicCustomizationData = [
  {
    label: "Color",
    value: "color",
    description: "Choose from a range of colors to personalize your product.",
    icon: FaPalette,
  },
  {
    label: "Size",
    value: "size",
    description: "Select the size that best fits your needs.",
    icon: FaArrowsAltV,
  },
  {
    label: "Dimension",
    value: "dimension",
    description: "Select the dimension that best fits your needs.",
    icon: FaRulerCombined,
  },
  {
    label: "Material",
    value: "material",
    description: "Pick your preferred material for the product.",
    icon: FaBox,
  },
  {
    label: "Engraving",
    value: "engraving",
    description: "Add a custom engraving to your product.",
    icon: FaPenFancy,
  },
  {
    label: "Packaging",
    value: "packaging",
    description: "Select a packaging option for your product.",
    icon: FaGift,
  },
  {
    label: "Accessories",
    value: "accessories",
    description: "Include additional accessories with your product.",
    icon: FaTools,
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
    <>
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="text-lg font-bold">Basic Customization</h2>
          <p className="text-sm text-default-500">
            Choose from a variety of general customization options to
            personalize your product.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 xs:gap-y-4 md:gap-4">
          <ScrollShadow hideScrollBar className="w-[300px] h-[400px]">
            <div className="flex flex-col gap-4">
              {basicCustomizationData.map((item) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={item.value}
                    isPressable
                    onClick={() => setSelectedCustomization(item.label)}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-3">
                          <Icon className="text-xl" />
                          <p className="text-base font-bold">{item.label}</p>
                        </div>
                        <ConditionalRender
                          condition={selectedCustomization === item.label}
                          Component={
                            <div className="flex items-center gap-2">
                              <div
                                className={`h-2 w-2 rounded-full glowing-${radiateStatus(
                                  "active"
                                )}`}
                                style={{
                                  background: campaignStatusColor("active"),
                                }}
                              />
                            </div>
                          }
                        />
                      </div>
                    </CardHeader>
                    <CardBody>
                      <p className="text-sm text-default-500">
                        {item.description}
                      </p>
                    </CardBody>
                  </Card>
                );
              })}
            </div>
          </ScrollShadow>
          <div className="flex flex-col col-span-2 gap-4 md:border-l-1 border-default-300 md:pl-4 xs:border-t-1 xs:pt-4">
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
      <ModalFooter>
        <Button color="danger">Cancel</Button>
        <Button color="secondary">Apply Customization</Button>
      </ModalFooter>
    </>
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
