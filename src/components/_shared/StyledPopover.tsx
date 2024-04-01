"use client";

import React, { PropsWithChildren } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Input,
} from "@nextui-org/react";

type PROPS = {
  title?: string;
  content?: React.ReactNode;
};

export default function StyledPopover(props: PropsWithChildren<PROPS>) {
  const { title, children, content } = props;

  return (
    <Popover placement="bottom" showArrow offset={10} backdrop="blur">
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent className="w-[240px]">
        {(titleProps) => (
          <div className="px-1 py-2 w-full">
            <p className="text-small font-bold text-foreground" {...titleProps}>
              {title}
            </p>
            <div className="mt-2 flex flex-col gap-2 w-full">{content}</div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}
