"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { TbListDetails } from "react-icons/tb";
import { TbZoomScan } from "react-icons/tb";

import {
  adminDashboardLinks,
  userDashboardLinks,
} from "@/src/utils/dashboardLinks";
import { capitalizeFirstLetter, getProductName } from "@/src/utils/functions";

const DetailIcon = <TbListDetails className="text-xl" />;
const ProductIcon = <TbZoomScan className="text-xl" />;

export default function StyledBreadcrumbs() {
  const pathName = usePathname();

  const isDetailedPage = pathName.includes("/detail");

  let mainPath = "";
  let detailPath = "";

  const returnIcon = (path: string) => {
    if (path === "dashboard")
      return dashboardLinks.find((link) => link?.path === `/${path}`)?.icon;
    if (path === "detail") return DetailIcon;
    if (path === detailPath) {
      return dashboardLinks
        .find((lnk) => lnk.path.includes(mainPath))
        ?.children?.find((ch) => ch.path.includes(detailPath))?.icon;
    }
    if (path?.toLowerCase() === getProductName(productId)?.toLowerCase())
      return ProductIcon;
    return dashboardLinks.find((link) => link?.path.includes(path))?.icon;
  };

  const isAdmin = pathName.includes("/dashboard/admin");
  const dashboardLinks = isAdmin ? adminDashboardLinks : userDashboardLinks;

  const getCurrentLinks = (path: string) =>
    dashboardLinks.filter((link) => link?.path === path)[0];

  const hasProductId =
    pathName.includes("my_product") &&
    pathName.split("/").filter(Boolean).length > 3;
  const productId = pathName.split("/")[4];

  let currentLinks = getCurrentLinks(
    hasProductId ? pathName.split("/").slice(0, 4).join("/") : pathName
  );

  let links = "";

  if (isDetailedPage) {
    const [_mainPath, _detailPath] = pathName.split("/detail");
    detailPath = _detailPath?.split("/")?.[1];
    currentLinks = getCurrentLinks(_mainPath);
    if (currentLinks?.path) links = currentLinks.path + "/detail" + _detailPath;
    mainPath = _mainPath;
  }

  const getCorrectIconAndPath = (path: string) => {
    if (isAdmin && path === "dashboard") {
      return "dashboard/admin";
    }
    return path;
  };

  const formatPathName = {
    ...currentLinks,
    path: (links || currentLinks?.path)?.split("/")?.filter(Boolean),
  };

  if (hasProductId) {
    formatPathName.path = [
      ...formatPathName.path,
      getProductName(productId) || "",
    ]?.filter(Boolean);
  }

  const linksToDisplay = formatPathName?.path
    ?.filter((path) => path !== "admin")
    .map((path) => ({
      path: capitalizeFirstLetter(path),
      icon: returnIcon(getCorrectIconAndPath(path)),
    }));

  const basePaths = [
    "activities",
    "analytics",
    "settings",
    "my_product",
    "add_product",
  ];

  const constructPath = (path: string) =>
    basePaths.includes(path)
      ? `dashboard/${isAdmin ? "admin/" : ""}${path}`
      : getCorrectIconAndPath(path);

  return (
    <Breadcrumbs>
      {linksToDisplay?.map((link, index) => (
        <BreadcrumbItem
          href={`${
            link?.path.toLowerCase() === "detail"
              ? `${mainPath}/detail`
              : `/${constructPath(link?.path.toLowerCase())}`
          }`}
          key={index}
          startContent={link.icon}
        >
          {link?.path}
        </BreadcrumbItem>
      ))}
    </Breadcrumbs>
  );
}
