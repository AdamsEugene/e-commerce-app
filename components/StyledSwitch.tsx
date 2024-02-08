import React from "react";
import { Switch } from "@nextui-org/react";
import { SunIcon } from "../assets/svgs/SunIcon";
import { MoonIcon } from "../assets/svgs/MoonIcon";

export default function StyledSwitch() {
  return (
    <Switch
      //   defaultSelected
      size="md"
      color="secondary"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
    ></Switch>
  );
}
