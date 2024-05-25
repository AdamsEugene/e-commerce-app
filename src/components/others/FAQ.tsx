"use client";

import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function StyledFAQ() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion defaultExpandedKeys={["theme"]}>
      <AccordionItem key="theme" aria-label="Theme" title="Theme">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="anchor" aria-label="Anchor" title="Anchor">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="sun" aria-label="Sun" title="Sun">
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
}
