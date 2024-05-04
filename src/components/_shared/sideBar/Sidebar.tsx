"use client";

import { usePathname } from "next/navigation";
import { Card, CardBody } from "@nextui-org/react";
import {
  _adminDashboardLinks,
  adminDashboardLinks,
  userDashboardLinks,
} from "@/src/utils/dashboardLinks";
import NavElements from "./NavElements";

export default function Sidebar() {
  const pathName = usePathname();
  let linksToRender = userDashboardLinks;

  if (_adminDashboardLinks.some((link) => pathName.includes(link.id))) {
    linksToRender = adminDashboardLinks;
  }

  return (
    <Card
      radius="none"
      shadow="none"
      className="h-[calc(100vh-72px)] bg-transparent sticky top-16 z-10"
    >
      <CardBody>
        <NavElements linkData={linksToRender} />
      </CardBody>
    </Card>
  );
}
