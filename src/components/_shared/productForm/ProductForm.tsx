"use client";

import StyledFileUpload from "../../StyledFileUpload";
import StyledInput from "../StyledInput";
import StyledSelect from "../StyledSelect";
import StyledTextarea from "../StyledTextarea";

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
        <StyledSelect
          label="Select categories"
          data={animals}
          placeholder="Select category"
        >
          <>nothing</>
        </StyledSelect>
        <StyledInput placeholder="Enter brand" label="Brand" />
        <StyledInput placeholder="Enter SKU" label="SKU" />
        <StyledInput
          placeholder="Enter low stock threshold"
          label="Low Stock Threshold"
        />
        <StyledInput placeholder="Enter slug" label="Slug" />
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
        <StyledInput
          placeholder="Additional Input 1"
          label="Additional Input 1"
        />
        <StyledInput
          placeholder="Additional Input 2"
          label="Additional Input 2"
        />
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
