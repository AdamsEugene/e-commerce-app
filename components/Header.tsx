"use client";

import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import useKeyboardShortcut from "use-keyboard-shortcut";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  User,
} from "@nextui-org/react";

import StyledInput from "./StyledInput";
import { Badge, ModalContent, useDisclosure } from "@nextui-org/react";
import { CartIcon } from "../assets/svgs/CartIcon";
import { NotificationIcon } from "../assets/svgs/NotificationIcon";
import StyledModal from "./StyledModal";
import SearchResults from "./search/SearchResults";
import StyledSwitch from "./StyledSwitch";
import StyledPopover from "./StyledPopover";
import { UserCard } from "./UserCard";
import SignupOrLogin from "./SignupOrLogin";

export default function Header() {
  const [isInvisible, setIsInvisible] = useState(false);
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

  return (
    <div className="h-full flex items-center w-full py-4 gap-4 main">
      <h1 className="logo text-3xl font-bold text-indigo-700">header</h1>
      <StyledInput iconStart both Icon={FiSearch} onClick={onOpen} />
      <StyledSwitch />
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
          {(Math.random() * 10) % 2 === 0 ? <UserCard /> : <SignupOrLogin />}
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
          {(onClose) => <SearchResults onClose={onClose} />}
        </ModalContent>
      </StyledModal>
    </div>
  );
}
