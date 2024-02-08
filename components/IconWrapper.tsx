import React from "react";
import { cn } from "@nextui-org/react";

type PROPS = {
  children: React.ReactNode;
  className?: string;
};

export const IconWrapper = ({ children, className }: PROPS) => (
  <div
    className={cn(
      className,
      "flex items-center rounded-small justify-center w-7 h-7"
    )}
  >
    {children}
  </div>
);
