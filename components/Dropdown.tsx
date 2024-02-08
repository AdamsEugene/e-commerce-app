"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

type Selection = {
  anchorKey: string;
  currentKey: string;
};

type KEY = { key: string; label: string };

type PROPS<T extends KEY> = {
  Trigger: React.ReactNode;
  selectedKeys: string;
  handleSelect: (keys: Selection) => void;
  dropdownItems: T[];
};

export default function StyledDropdown<T extends KEY>(props: PROPS<T>) {
  const { Trigger, handleSelect, selectedKeys, dropdownItems } = props;

  //   const selectedValue = useMemo(
  //     () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
  //     [selectedKeys]
  //   );

  return (
    <Dropdown backdrop="blur">
      <DropdownTrigger>{Trigger}</DropdownTrigger>
      <DropdownMenu
        variant="faded"
        aria-label="Static Actions"
        disallowEmptySelection
        defaultSelectedKeys={selectedKeys}
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={handleSelect as any}
      >
        {dropdownItems.map((item) => (
          <DropdownItem key={item.key}>{item.label}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
