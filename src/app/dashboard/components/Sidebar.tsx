'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Card, CardBody, Listbox, ListboxItem } from "@nextui-org/react";
import { IconWrapper } from "@/src/components/IconWrapper";
import {
  DashboardLinks,
  _adminDashboardLinks,
  adminDashboardLinks,
  userDashboardLinks,
} from "@/src/utils/dashboardLinks";

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
        <NavElements linkData={linksToRender} activePath={pathName} />
      </CardBody>
    </Card>
  );
}

const NavElements = ({
  linkData,
  activePath,
}: DashboardLinks & { activePath: string }) => {
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
        const isActive = activePath.includes("/detail")
          ? item.path === "/dashboard"
          : pathName === item.path;

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
