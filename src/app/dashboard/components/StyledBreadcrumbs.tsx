"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { TbListDetails } from "react-icons/tb";

import {
  adminDashboardLinks,
  userDashboardLinks,
} from "@/src/utils/dashboardLinks";
import { capitalizeFirstLetter } from "@/src/utils/functions";

const DetailIcon = <TbListDetails className="text-xl" />;

export default function StyledBreadcrumbs() {
  const pathName = usePathname();

  const formatPath = (path: string) => {
    return path.includes("/admin/") ? path.replace("/admin/", "/") : path;
  };

  const isDetailedPage = pathName.includes("/detail");

  let mainPath = "";
  let detailPath = "";

  const returnIcon = (path: string) => {
    if (path === "dashboard") {
      return dashboardLinks.find((link) => link?.path === `/${path}`)?.icon;
    }
    if (path === "detail") {
      return DetailIcon;
    }
    if (path === detailPath) {
      return dashboardLinks
        .find((lnk) => lnk.path.includes(mainPath))
        ?.children?.find((ch) => ch.path.includes(detailPath))?.icon;
    }
    return dashboardLinks.find((link) => link?.path.includes(path))?.icon;
  };

  const getRoutes = (path: string) =>
    pathName.includes(path) ? adminDashboardLinks : userDashboardLinks;

  const dashboardLinks = pathName.includes("/dashboard/admin")
    ? adminDashboardLinks
    : userDashboardLinks;

  const getCurrentLinks = (path: string) =>
    dashboardLinks.filter((link) => link?.path === path)[0];

  let currentLinks = getCurrentLinks(pathName);
  let links = "";

  if (isDetailedPage) {
    const [_mainPath, _detailPath] = pathName.split("/detail");
    detailPath = _detailPath?.split("/")?.[1];
    currentLinks = getCurrentLinks(_mainPath);
    if (currentLinks?.path) links = currentLinks.path + "/detail" + _detailPath;
    mainPath = _mainPath;
  }

  const formatPathName = {
    ...currentLinks,
    path: (links || currentLinks?.path)?.split("/")?.filter(Boolean),
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
