"use client";

import { useDeferredValue, useEffect, useMemo, useState } from "react";
import {
  Badge,
  ModalContent,
  Popover,
  PopoverContent,
  PopoverTrigger,
  User,
  useDisclosure,
} from "@nextui-org/react";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
// import { Link } from "@nextui-org/link";

import { link as linkStyles } from "@nextui-org/theme";
import useKeyboardShortcut from "use-keyboard-shortcut";

import { siteConfig } from "@/src/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/src/components/others/theme-switch";
import {
  CartIcon,
  NotificationIcon,
} from "@/src/components/_shared/others/icons";

import { Logo } from "@/src/components/_shared/others/icons";
import StyledInput from "../_shared/Styled/StyledInput";
import { FiSearch } from "react-icons/fi";
import { UserCard } from "./UserCard";
import SignupOrLogin from "./SignupOrLogin";
import StyledModal from "../_shared/Styled/StyledModal";
import SearchResults from "../_shared/search/SearchResults";
import { useAppStore } from "../../providers/AppStoreProvider";
import SideDrawer from "./SideDrawer";
import { usePathname } from "next/navigation";
import {
  _adminDashboardLinks,
  adminDashboardLinks,
  userDashboardLinks,
} from "@/src/utils/dashboardLinks";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import Notifications from "./Notifications";
import { UserData } from "@/src/types/@user";
import { CartResponse } from "@/src/types/@carts";

type PROPS = {
  user: UserData;
  carts: CartResponse;
};

export const Navbar = (props: PROPS) => {
  const { user, carts } = props;
  const [isInvisible, setIsInvisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const deferredValue = useDeferredValue(searchTerm.trim());

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const toggleDrawer = useAppStore((state) => state.toggleDrawer);
  const itemsInCart = useAppStore((state) => state.itemsInCart);
  const setUser = useAppStore((state) => state.setUser);
  const setCartData = useAppStore((state) => state.setCartData);

  const pathName = usePathname();
  let linksToRender = userDashboardLinks;

  if (_adminDashboardLinks.some((link) => pathName.includes(link.id))) {
    linksToRender = adminDashboardLinks;
  }

  useKeyboardShortcut(["Meta", "K"], (shortcutKeys) => onOpen(), {
    overrideSystem: false,
    ignoreInputFields: false,
    repeatOnHold: false,
  });

  useEffect(() => {
    if (user) setUser(user);
    if (carts) setCartData(carts);
  }, []);

  useEffect(() => {
    if (deferredValue) onOpen();
  }, [deferredValue]);

  const randomIntFromInterval = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const convertLink = useMemo(() => {
    return linksToRender.map((l) => ({ label: l.name, href: l.path }));
  }, [linksToRender]);

  return (
    <>
      <NextUINavbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="xl"
        position="sticky"
        className="mt-2"
      >
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink
              className="flex justify-start items-center gap-1"
              href="/"
            >
              <Logo />
              <p className="font-bold text-inherit">E-BUY</p>
            </NextLink>
          </NavbarBrand>
          <ul className="hidden lg:flex gap-4 justify-start ml-2">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          </ul>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex basis-1/5 sm:basis-full !w-[900px]"
          justify="end"
        >
          <NavbarItem className="hidden sm:flex gap-2">
            {/* <Link
              isExternal
              href={siteConfig.links.twitter}
              aria-label="Twitter"
            >
              <TwitterIcon className="text-default-500" />
            </Link> */}
            <ThemeSwitch />
          </NavbarItem>
          <NavbarItem className="lg:flex">
            <StyledInput
              iconStart
              both
              Icon={FiSearch}
              onClick={onOpen}
              onChange={({ target }) => setSearchTerm(target.value)}
              className="lg:w-[400px] md:w-[340px] sm:w-[200px]"
            />
          </NavbarItem>
          <NavbarItem className="hidden sm:flex md:flex gap-4 ml-4">
            <Popover showArrow placement="bottom" backdrop="blur">
              <PopoverTrigger>
                <User
                  as="button"
                  name=""
                  // description="Product Designer"
                  className="transition-transform"
                  avatarProps={{ src: user?.image }}
                />
              </PopoverTrigger>
              <PopoverContent className="p-1">
                {randomIntFromInterval(1, 6) <= 3 ? (
                  <UserCard />
                ) : (
                  <SignupOrLogin />
                )}
              </PopoverContent>
            </Popover>
            <Badge
              color="secondary"
              content={itemsInCart}
              isInvisible={!Boolean(itemsInCart)}
              shape="circle"
              size="lg"
              onClick={() => toggleDrawer(true)}
            >
              <Button isIconOnly variant="light">
                <CartIcon
                  size={32}
                  className="cursor-pointer"
                  onClick={() => toggleDrawer(true)}
                />
              </Button>
            </Badge>
            <Popover showArrow placement="bottom" backdrop="blur">
              <PopoverTrigger>
                <Button isIconOnly variant="light">
                  <Badge
                    color="warning"
                    content={5}
                    isInvisible={isInvisible}
                    shape="circle"
                    size="lg"
                  >
                    <NotificationIcon
                      className="fill-current cursor-pointer"
                      size={32}
                    />
                  </Badge>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-1">
                <Notifications />
              </PopoverContent>
            </Popover>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
          {/* <Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
            <TwitterIcon className="text-default-500" />
          </Link> */}
          <ThemeSwitch />
          <Badge
            color="secondary"
            content={itemsInCart}
            isInvisible={!Boolean(itemsInCart)}
            shape="circle"
            size="lg"
            onClick={() => toggleDrawer(true)}
          >
            <CartIcon
              size={32}
              className="cursor-pointer"
              onClick={() => toggleDrawer(true)}
            />
          </Badge>
          <Badge
            color="warning"
            content={5}
            isInvisible={isInvisible}
            shape="circle"
          >
            <NotificationIcon className="fill-current" size={32} />
          </Badge>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
        </NavbarContent>

        <NavbarMenu>
          <StyledInput
            iconStart
            both
            Icon={FiSearch}
            onClick={() => {
              setIsMenuOpen(false);
              onOpen();
            }}
          />
          <div className="mx-4 mt-2 flex flex-col gap-2">
            {[...siteConfig.navMenuItems, ...convertLink].map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  onClick={() => setIsMenuOpen(false)}
                  color={
                    index === 2
                      ? "primary"
                      : index === siteConfig.navMenuItems.length - 1
                        ? "danger"
                        : "foreground"
                  }
                  href={item.href}
                  // size="lg"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
          </div>
        </NavbarMenu>
        <StyledModal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="top"
          backdrop="blur"
          size="5xl"
          className="search_result"
          scrollBehavior="inside"
        >
          <ModalContent>
            {(onClose) => (
              <SearchResults
                onOpenChange={onOpenChange}
                initialSearchTerm={deferredValue}
                onClose={onClose}
              />
            )}
          </ModalContent>
        </StyledModal>
      </NextUINavbar>
      <SideDrawer />
    </>
  );
};
