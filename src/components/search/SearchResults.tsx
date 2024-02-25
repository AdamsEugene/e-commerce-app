"use client";

import { ModalBody, ModalHeader, Divider } from "@nextui-org/react";
import React from "react";
import { FiSearch } from "react-icons/fi";

import StyledInput from "../StyledInput";
import StyledCheckboxGroup from "../StyledCheckboxGroup";
import ProductGallery from "../swiper/ProductGallery";
import StyledCardGrid from "../swiper/StyledCardGrid";
import { useState } from "react";
import { useDeferredValue } from "react";
import ConditionalRenderAB from "../ConditionalRenderAB";
import SearchList from "./SearchList";

type PROPS = {
  onOpenChange: () => void;
};

const checkboxData = [
  {
    label: "Top Searches",
    data: [
      { name: "Cars" },
      { name: "Phones" },
      { name: "Spectacles" },
      { name: "TV Remotes" },
    ],
  },
  {
    label: "Recent Searched",
    data: [
      { name: "Laptops" },
      { name: "Pen Drives" },
      { name: "Microphones" },
      { name: "Home Theater" },
    ],
  },
  {
    label: "Suggested Items",
    data: [{ name: "Perfumes" }, { name: "Cloths" }, { name: "Keyboard Pad" }],
  },
];

export default function SearchResults(props: PROPS) {
  const { onOpenChange } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const deferredValue = useDeferredValue(searchTerm);

  return (
    <>
      <ModalHeader className="flex flex-col gap-1">
        <StyledInput
          iconStart
          both
          Icon={FiSearch}
          autoFocus
          className="px-6"
          placeholder="Looking for something specific? Start typing..."
          onChange={({ target }) => setSearchTerm(target.value)}
        />
      </ModalHeader>
      <Divider className="my-4" />
      <ModalBody>
        <div className="flex w-full h-full pb-4">
          <div className="w-[208px] flex justify-between gap-4">
            <StyledCheckboxGroup checkboxData={checkboxData} />
            <Divider orientation="vertical" />
          </div>
          <div className="w-[calc(100%-208px)] flex flex-col px-4 gap-4">
            <ConditionalRenderAB
              condition={!!deferredValue}
              ComponentA={
                <>
                  <SearchList />
                </>
              }
              ComponentB={
                <>
                  <div className="w-full h-[133px]">
                    <ProductGallery onOpenChange={onOpenChange} />
                  </div>
                  <Divider className="my-2" />
                  <div className="">
                    <StyledCardGrid onOpenChange={onOpenChange} />
                  </div>
                </>
              }
            />
          </div>
        </div>
      </ModalBody>
    </>
  );
}
