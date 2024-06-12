import React from "react";
import { cn } from "@nextui-org/react";

type PROPS = {
  children: React.ReactNode;
  className?: string;
  onClick?: (n: any) => void;
};

export const IconWrapper = ({ children, className, ...others }: PROPS) => (
  <div
    className={cn(
      "flex items-center rounded-small justify-center w-7 h-7",
      className
    )}
    {...others}
  >
    {children}
  </div>
);
