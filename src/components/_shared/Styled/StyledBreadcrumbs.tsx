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
    if (path.toLowerCase() === modeOfImport) {
      return currentLinks.children?.find((child) =>
        child.path.includes(modeOfImport)
      )?.icon;
    }
    return dashboardLinks.find((link) => link?.path.includes(path))?.icon;
  };

  const isAdmin = pathName.includes("/sellers-planet");
  const dashboardLinks = isAdmin ? adminDashboardLinks : userDashboardLinks;

  const getCurrentLinks = (path: string) =>
    dashboardLinks.filter((link) => link?.path === path)[0];

  const hasProductId =
    pathName.includes("my-product") &&
    pathName.split("/").filter(Boolean).length > 2;
  const productId = pathName.split("/")[3];

  const isAds =
    pathName.includes("settings") &&
    pathName.split("/").filter(Boolean).length > 2;
  const ads = pathName.split("/")[3];

  const importMethod =
    pathName.includes("add-product") &&
    pathName.split("/").filter(Boolean).length > 2;
  const modeOfImport = pathName.split("/")[3];

  let currentLinks = getCurrentLinks(
    importMethod || hasProductId || isAds
      ? pathName.split("/").slice(0, 3).join("/")
      : pathName
  );

  let links = "";

  if (isDetailedPage) {
    const [_mainPath, _detailPath] = pathName.split("/detail");
    detailPath = _detailPath?.split("/")?.[1];
    currentLinks = getCurrentLinks(_mainPath);
    if (currentLinks?.path) links = currentLinks.path + "/detail" + _detailPath;
    mainPath = _mainPath;
  }

  // const getCorrectIconAndPath = (path: string) => {
  //   if (isAdmin && path === "dashboard") {
  //     return "sellers-planet";
  //   }
  //   return path;
  // };

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

  if (importMethod) {
    formatPathName.path = [...formatPathName.path, modeOfImport]?.filter(
      Boolean
    );
  }

  if (isAds) {
    formatPathName.path = [...formatPathName.path, ads]?.filter(Boolean);
  }

  const linksToDisplay = formatPathName?.path?.map((path) => ({
    path: capitalizeFirstLetter(path),
    icon: returnIcon(path),
  }));

  const basePaths = [
    "activities",
    "analytics",
    "settings",
    "my-product",
    "add-product",
  ];

  const constructPath = (path: string) =>
    basePaths.includes(path)
      ? `${isAdmin ? "sellers-planet/" : "dashboard"}/${path}`
      : path;

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
