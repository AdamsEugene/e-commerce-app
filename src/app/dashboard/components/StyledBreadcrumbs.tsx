"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import {
  adminDashboardLinks,
  userDashboardLinks,
} from "@/src/utils/dashboardLinks";
import { capitalizeFirstLetter } from "@/src/utils/functions";

export default function StyledBreadcrumbs() {
  const pathName = usePathname();

  const formatPath = (path: string) => {
    return path.includes("/admin/") ? path.replace("/admin/", "/") : path;
  };

  const returnIcon = (path: string) => {
    if (path === "dashboard") {
      return dashboardLinks.find((link) => link?.path === `/${path}`)?.icon;
    }
    return dashboardLinks.find((link) => link?.path.includes(path))?.icon;
  };

  const dashboardLinks = pathName.includes("/dashboard/admin")
    ? adminDashboardLinks
    : userDashboardLinks;

  const currentLinks = dashboardLinks.filter(
    (link) => link?.path === pathName
  )[0];

  const formatPathName = {
    ...currentLinks,
    path: currentLinks?.path.split("/").filter(Boolean),
  };

  const linksToDisplay = formatPathName?.path?.map((path) => ({
    path: capitalizeFirstLetter(path),
    icon: returnIcon(path),
  }));

  return (
    <Breadcrumbs>
      {linksToDisplay?.map((link, index) => (
        <BreadcrumbItem
          href={`/${link?.path.toLowerCase()}`}
          key={index}
          startContent={link.icon}
        >
          {link?.path}
        </BreadcrumbItem>
      ))}
    </Breadcrumbs>
  );
}
