import React from "react";
import {
  Autocomplete,
  AutocompleteItem,
  type AutocompleteProps,
} from "@nextui-org/react";

type Data = {
  label: string;
  value: string;
  description?: string;
};

export default function StyledAutocomplete(
  props: Partial<AutocompleteProps<Data>>
) {
  const { items } = props;

  return (
    <Autocomplete
      label="Favorite Animal"
      labelPlacement="outside"
      shouldCloseOnBlur
      variant="flat"
      items={items}
    >
      {(item) => (
        <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
      )}
    </Autocomplete>
  );
}
