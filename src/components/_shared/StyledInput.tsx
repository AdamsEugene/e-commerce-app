import { Input, InputProps } from "@nextui-org/react";
import { IconType } from "react-icons";
import { Kbd } from "@nextui-org/react";

export type INPUT_PROPS = {
  Icon?: IconType;
  iconStart?: boolean;
  both?: boolean;
  keys?: string;
} & InputProps;

export default function StyledInput(props: INPUT_PROPS) {
  const { Icon, iconStart, both, keys, ...others } = props;

  if (both && Icon) {
    return (
      <Input
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm",
        }}
        {...others}
        labelPlacement="outside"
        endContent={<Kbd keys={["command"]}>{keys || "K"}</Kbd>}
        startContent={
          <Icon className="text-lg text-default-400 pointer-events-none flex-shrink-0" />
        }
      />
    );
  }

  if (Icon) {
    if (iconStart)
      return (
        <Input
          classNames={{
            inputWrapper: "bg-default-100",
            input: "text-sm",
          }}
          {...others}
          labelPlacement="outside"
          startContent={
            <Icon className="text-lg text-default-400 pointer-events-none flex-shrink-0" />
          }
        />
      );
    else
      return (
        <Input
          classNames={{
            inputWrapper: "bg-default-100",
            input: "text-sm",
          }}
          {...others}
          labelPlacement="outside"
          endContent={
            <Icon className="text-lg text-default-400 pointer-events-none flex-shrink-0" />
          }
        />
      );
  }
  return (
    <Input
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      {...others}
      labelPlacement="outside"
    />
  );
}
