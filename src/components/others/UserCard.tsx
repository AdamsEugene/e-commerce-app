import React from "react";
import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import { getDisplayName } from "@/src/utils/functions";
import { useAppStore } from "@/src/providers/AppStoreProvider";

export const UserCard = () => {
  const user = useAppStore((state) => state.user);

  return (
    <Card shadow="none" className="max-w-[300px] border-none bg-transparent">
      <CardHeader className="justify-between">
        <div className="flex gap-3">
          <Avatar isBordered radius="full" size="md" src={user?.image} />
          <div className="flex flex-col items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {getDisplayName(user)}
            </h4>
            <h5 className="text-small tracking-tight text-default-500">
              {user?.email}
            </h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0">
        <p className="text-small pl-px text-default-500">
          {user?.university}
          <span aria-label="confetti" role="img">
            🎉
          </span>
        </p>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          {/* <p className="font-semibold text-default-600 text-small">4</p> */}
          <p className=" text-default-500 text-small">{user?.company.name}</p>
        </div>
        <div className="flex gap-1">
          {/* <p className="font-semibold text-default-600 text-small">97.1K</p> */}
          <p className="text-default-500 text-small">{user?.company.title}</p>
        </div>
      </CardFooter>
    </Card>
  );
};
