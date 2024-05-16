"use client";

import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

import { IoAddSharp } from "react-icons/io5";
import { GoDash } from "react-icons/go";

export default function StyledFAQ() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion defaultExpandedKeys={["theme"]}>
      <AccordionItem
        key="theme"
        aria-label="Theme"
        indicator={({ isOpen }) =>
          isOpen ? (
            <IoAddSharp className="text-2xl" />
          ) : (
            <GoDash className="text-2xl" />
          )
        }
        title="Theme"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="anchor"
        aria-label="Anchor"
        indicator={({ isOpen }) =>
          isOpen ? (
            <IoAddSharp className="text-2xl" />
          ) : (
            <GoDash className="text-2xl" />
          )
        }
        title="Anchor"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="sun"
        aria-label="Sun"
        indicator={({ isOpen }) =>
          isOpen ? (
            <IoAddSharp className="text-2xl" />
          ) : (
            <GoDash className="text-2xl" />
          )
        }
        title="Sun"
      >
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
}
