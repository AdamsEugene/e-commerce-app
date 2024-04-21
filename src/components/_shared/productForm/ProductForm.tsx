"use client";

import { Button } from "@nextui-org/button";
import StyledFileUpload from "../../StyledFileUpload";
import StyledInput from "../StyledInput";
import StyledSelect from "../StyledSelect";
import StyledTextarea from "../StyledTextarea";
import { Checkbox } from "@nextui-org/react";

export default function ProductForm() {
  return (
    <div>
      <form className="flex flex-col gap-4">
        <StyledInput placeholder="Enter product name" label="Product name" />
        <StyledTextarea
          placeholder="Enter product description"
          label="Product description"
        />
        <div className="flex items-center gap-4">
          <StyledInput
            placeholder="Enter product price"
            label="Product price"
          />
          <StyledInput placeholder="Enter stock" label="Stock" />
        </div>
        <StyledFileUpload />
        <div className="flex items-center gap-4">
          <StyledSelect
            label="Select categories"
            data={animals}
            placeholder="Select category"
          >
            <>nothing</>
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
            placeholder="Select size"
          >
            <>nothing</>
          </StyledSelect>
          <StyledSelect
            label="Select color"
            data={colors}
            placeholder="Select color"
          >
            <>nothing</>
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
        <div className="flex items-center gap-4 my-4">
          <h3 className="text-xl font-bold min-w-[112px]">Variant</h3>
          <Button fullWidth>Add Different Variant</Button>
        </div>
        <div className="flex items-center gap-4 justify-end">
          <Checkbox color="secondary" defaultSelected>
            Add more products
          </Checkbox>
          <Button color="danger">Cancel</Button>
          <Button color="secondary" variant="flat">
            Save
          </Button>
          <Button color="secondary">Save</Button>
        </div>
      </form>
    </div>
  );
}

const colors = [
  {
    label: "Red",
    value: "red",
    description: "",
  },
  {
    label: "White",
    value: "white",
    description: "",
  },
  {
    label: "Green",
    value: "green",
    description: "",
  },
];

const sizes = [
  {
    label: "XXS",
    value: "xxs",
    description: "",
  },
  {
    label: "XS",
    value: "xs",
    description: "",
  },
  {
    label: "S",
    value: "s",
    description: "",
  },
  {
    label: "M",
    value: "m",
    description: "",
  },
  {
    label: "L",
    value: "l",
    description: "",
  },
  {
    label: "XL",
    value: "xl",
    description: "",
  },
  {
    label: "XXL",
    value: "xxl",
    description: "",
  },
  {
    label: "XXXL",
    value: "xxxl",
    description: "",
  },
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
