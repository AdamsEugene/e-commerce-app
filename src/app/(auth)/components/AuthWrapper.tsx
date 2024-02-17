"use client";

import { PropsWithChildren, useState } from "react";
import { Button } from "@nextui-org/react";
import StyledDropdown from "@/src/components/Dropdown";
import { ThemeSwitch } from "@/src/components/theme-switch";

const languages = [
  { key: "english", label: "English" },
  { key: "french", label: "French" },
];

export default function AuthWrapper({ children }: PropsWithChildren) {
  const HeaderComponent = () => {
    const [selectedKeys, setSelectedKeys] = useState("english");

    const handleSelect = (key: any) => {
      setSelectedKeys(key);
    };

    return (
      <header className="flex justify-between items-center py-4 max-w-7xl w-full">
        <ThemeSwitch />
        <StyledDropdown
          Trigger={
            <Button variant="light" className="capitalize">
              {selectedKeys}
            </Button>
          }
          dropdownItems={languages}
          handleSelect={handleSelect}
          selectedKeys={selectedKeys}
        />
      </header>
    );
  };

  return (
    <section className="h-[calc(100vh-4rem)] w-full p-4 flex flex-col justify-center items-center">
      <HeaderComponent />
      {children}
    </section>
  );
}
