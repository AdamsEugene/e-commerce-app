"use client";

import { useState } from "react";
import {
  ModalBody,
  ModalFooter,
  ModalHeader,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import { ColorResult } from "react-color";
import { IoColorPaletteSharp } from "react-icons/io5";
import { useAppStore } from "@/src/providers/AppStoreProvider";
import ColorPicker from "../others/ColorPicker";

type PROPS = {
  onClose: () => void;
  colorKey?: string;
};

const fields = [
  { name: "Background" },
  { name: "Headline" },
  { name: "Description" },
  { name: "Button" },
  { name: "Button Text" },
] as const;

export default function ColorPickerModal({
  onClose,
  colorKey = "default",
}: PROPS) {
  const [selected, setSelected] =
    useState<(typeof fields)[number]["name"]>("Background");

  const { theme } = useTheme();
  const adColor = useAppStore((state) => state.adColor);
  const updateAdColor = useAppStore((state) => state.updateAdColor);

  const onColorChange = (color: ColorResult) => {
    updateAdColor(colorKey, selected, color.hex, theme as "light" | "dark");
  };

  return (
    <>
      <ModalHeader>
        <div className="flex items-center gap-3">
          <IoColorPaletteSharp className="text-2xl" />
          <p className="text-lg font-bold">Update Colors</p>
        </div>
      </ModalHeader>
      <ModalBody>
        <div className="w-full flex flex-col gap-4">
          {fields.map((field) => (
            <div
              key={field.name}
              className="flex items-center justify-between w-full"
            >
              <p>{field.name}</p>
              <Popover placement="bottom" showArrow={true} radius="none">
                <PopoverTrigger>
                  <div
                    onClick={() => setSelected(field.name)}
                    className={`w-8 h-5 rounded-sm cursor-pointer border-1 border-default`}
                    style={{
                      background: `${
                        theme === "light"
                          ? (adColor[colorKey] || adColor["default"]).light[
                              field.name
                            ] || adColor["default"].light[field.name]
                          : (adColor[colorKey] || adColor["default"]).dark[
                              field.name
                            ] || adColor["default"].dark[field.name]
                      }`,
                    }}
                  />
                </PopoverTrigger>
                <PopoverContent>
                  <ColorPicker
                    onColorChange={onColorChange}
                    className="!shadow-none light:!bg-white dark:!bg-[#18181B]"
                  />
                </PopoverContent>
              </Popover>
            </div>
          ))}
        </div>
      </ModalBody>
      <ModalFooter>
        <div className="flex items-center gap-4">
          <Button color="danger" onClick={onClose}>
            Cancel
          </Button>
          <Button color="secondary">Save</Button>
        </div>
      </ModalFooter>
    </>
  );
}
