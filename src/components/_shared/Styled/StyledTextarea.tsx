import React from "react";
import { TextAreaProps, Textarea } from "@nextui-org/react";

export default function StyledTextarea(props: TextAreaProps) {
  return (
    <Textarea
      variant="flat"
      labelPlacement="outside"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      {...props}
    />
  );
}
