"use client";

import { useState } from "react";
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
import { Link } from "@nextui-org/link";

import { link as linkStyles } from "@nextui-org/theme";
import useKeyboardShortcut from "use-keyboard-shortcut";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import { TwitterIcon, CartIcon, NotificationIcon } from "@/components/icons";

import { Logo } from "@/components/icons";
import StyledInput from "./StyledInput";
import { FiSearch } from "react-icons/fi";
import { UserCard } from "./UserCard";
import SignupOrLogin from "./SignupOrLogin";
import StyledModal from "./StyledModal";
import SearchResults from "./search/SearchResults";

export const Navbar = () => {
  const [isInvisible, setIsInvisible] = useState(true);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { flushHeldKeys } = useKeyboardShortcut(
    ["Meta", "K"],
    (shortcutKeys) => onOpen(),
    {
      overrideSystem: false,
      ignoreInputFields: false,
      repeatOnHold: false,
    }
  );

  const randomIntFromInterval = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  return (
    <NextUINavbar maxWidth="xl" position="sticky" className="mt-2">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">ACME</p>
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
          <Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
            <TwitterIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="lg:flex">
          <StyledInput
            iconStart
            both
            Icon={FiSearch}
            onClick={onOpen}
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
                avatarProps={{
                  src: "https://avatars.githubusercontent.com/u/30373425?v=4",
                }}
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
            content={50}
            isInvisible={isInvisible}
            shape="circle"
          >
            <CartIcon size={32} />
          </Badge>
          <Badge
            color="warning"
            content={5}
            isInvisible={isInvisible}
            shape="circle"
          >
            <NotificationIcon className="fill-current" size={32} />
          </Badge>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
          <TwitterIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <Badge
          color="secondary"
          content={50}
          isInvisible={isInvisible}
          shape="circle"
        >
          <CartIcon size={32} />
        </Badge>
        <Badge
          color="warning"
          content={5}
          isInvisible={isInvisible}
          shape="circle"
        >
          <NotificationIcon className="fill-current" size={32} />
        </Badge>
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <StyledInput iconStart both Icon={FiSearch} onClick={onOpen} />
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href="#"
                size="lg"
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
        <ModalContent>{(onClose) => <SearchResults />}</ModalContent>
      </StyledModal>
    </NextUINavbar>
  );
};
