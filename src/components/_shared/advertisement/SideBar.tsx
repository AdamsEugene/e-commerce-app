"use client";

import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import NavElements from "../sideBar/NavElements";
import { adsNavLinks } from "@/src/utils/dashboardLinks";

export default function SideBar() {
  return (
    <Card
      radius="none"
      shadow="none"
      className="h-[calc(100vh-72px)] bg-transparent sticky top-16 z-10"
    >
      <CardBody>
        <NavElements linkData={adsNavLinks} isSub />
      </CardBody>
    </Card>
  );
}
