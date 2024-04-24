"use client";

import { Button } from "@nextui-org/button";
import { Avatar, AvatarGroup, Checkbox } from "@nextui-org/react";

import StyledFileUpload from "../../StyledFileUpload";
import StyledInput from "../StyledInput";
import StyledSelect from "../StyledSelect";
import StyledTextarea from "../StyledTextarea";

const images = [
  "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  "https://i.pravatar.cc/150?u=a04258a2462d826712d",
  "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  "https://i.pravatar.cc/150?u=a04258114e29026302d",
  "https://i.pravatar.cc/150?u=a04258114e29026702d",
  "https://i.pravatar.cc/150?u=a04258114e29026708c",
];

export default function ProductForm() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4 justify-between">
        <Avatar src={images[0]} size="lg" radius="lg" />
        <AvatarGroup isBordered>
          {images.map((img) => (
            <Avatar key={img} src={img} size="lg" radius="lg" />
          ))}
        </AvatarGroup>
      </div>
      <form className="flex flex-col gap-4">
        <StyledInput
          placeholder="Enter product name"
          label="Product Name"
          isRequired
        />
        <StyledTextarea
          placeholder="Enter product description"
          label="Product Description"
          isRequired
        />
        <div className="flex items-center gap-4">
          <StyledInput
            placeholder="Enter product price"
            label="Product Price"
            isRequired
          />
          <StyledInput placeholder="Enter stock" label="Stock" isRequired />
        </div>
        <StyledFileUpload label="Product Image or Video" />
        <div className="flex items-center gap-4">
          <StyledSelect
            label="Select category"
            data={animals}
            placeholder="Select Category"
            isRequired
          >
            <></>
          </StyledSelect>
          <StyledInput placeholder="Enter brand" label="Brand" />
        </div>
        <div className="flex items-center gap-4">
          <StyledInput placeholder="Enter SKU" label="SKU" />
          <StyledInput
            placeholder="Enter low stock threshold"
            label="Low Stock Threshold"
          />
          <StyledInput placeholder="Enter slug" label="Slug" />
        </div>
        <StyledTextarea
          placeholder="Enter meta description"
          label="Meta Description"
        />
        <div className="flex items-center gap-4">
          <StyledInput placeholder="Enter weight" label="Weight" />
          <StyledSelect
            label="Select size"
            data={sizes}
            placeholder="Select Size"
          >
            <></>
          </StyledSelect>
          <StyledSelect
            label="Select color"
            data={colors}
            placeholder="Select Color"
          >
            <></>
          </StyledSelect>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <h3 className="text-xl font-bold">Dimensions</h3>
            <StyledInput placeholder="Length" label="Length" />
            <StyledInput placeholder="Width" label="Width" />
            <StyledInput placeholder="Height" label="Height" />
          </div>
        </div>
        <div className="flex items-center gap-4 justify-end">
          <Checkbox color="secondary" defaultSelected>
            Add more products
          </Checkbox>
          <Button color="warning">Cancel</Button>
          <Button color="secondary" variant="flat">
            Add Different Variant
          </Button>
          <Button color="primary" variant="flat">
            Save as Draft
          </Button>
          <Button color="secondary">Publish</Button>
        </div>
      </form>
    </div>
  );
}

const colors = [
  { label: "Red", value: "red" },
  { label: "White", value: "white" },
  { label: "Green", value: "green" },
];

const sizes = [
  { label: "XXS", value: "xxs" },
  { label: "XS", value: "xs" },
  { label: "S", value: "s" },
  { label: "M", value: "m" },
  { label: "L", value: "l" },
  { label: "XL", value: "xl" },
  { label: "XXL", value: "xxl" },
  { label: "XXXL", value: "xxxl" },
];

const animals = [
  {
    label: "Cat",
    value: "cat",
    description: "The second most popular pet in the world",
  },
  {
    label: "Dog",
    value: "dog",
    description: "The most popular pet in the world",
  },
  {
    label: "Elephant",
    value: "elephant",
    description: "The largest land animal",
  },
];
