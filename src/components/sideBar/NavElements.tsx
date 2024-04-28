"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { IconWrapper } from "../_shared/IconWrapper";
import { type DashboardLinks } from "@/src/utils/dashboardLinks";

const NavElements = ({
  linkData,
  isSub,
}: DashboardLinks & { isSub?: boolean }) => {
  const pathName = usePathname();

  return (
    <Listbox
      aria-label="User Menu"
      className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 max-w-full overflow-visible shadow-none"
      itemClasses={{
        base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-medium gap-3 h-12 data-[hover=true]:bg-secondary-100/80",
      }}
    >
      {linkData.map((item) => {
        const Icon = item.icon;
        const isActive = getActiveLink(item.path, pathName, isSub);

        return (
          <ListboxItem
            key={item.path}
            as={Link}
            href={item.path}
            startContent={
              <IconWrapper
                className={`bg-secondary/10 text-secondary ${
                  isActive ? "bg-secondary-100" : ""
                }`}
              >
                {Icon}
              </IconWrapper>
            }
            className={`${isActive ? "bg-secondary-100" : ""}`}
          >
            {item.name}
          </ListboxItem>
        );
      })}
    </Listbox>
  );
};

const getActiveLink = (path: string, pathName: string, isSub?: boolean) => {
  const isDetail = pathName.includes("/detail");
  if (isDetail)
    return path.split("/detail")[0] === pathName.split("/detail")[0];
  if (pathName.split("/").includes("ads") && isSub) {
    return pathName === path;
  }
  if (pathName.split("/").filter(Boolean).length >= 3) {
    return pathName.split("/").slice(0, 3).join("/") === path;
  }
  return pathName === path;
};

export default NavElements;
