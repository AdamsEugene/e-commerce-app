import React from "react";
import { Avatar, Listbox, ListboxItem } from "@nextui-org/react";
import { IconWrapper } from "../IconWrapper";
import { ItemCounter } from "../ItemCounter";
import imageByIndex from "@/src/utils/imageByIndex";

export default function SearchList() {
  return (
    <Listbox
      aria-label="User Menu"
      onAction={(key) => alert(key)}
      className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 overflow-visible rounded-medium"
      itemClasses={{
        base: "px-3 first:rounded-t-medium last:rounded-b-medium gap-3 h-12",
      }}
    >
      <ListboxItem
        key="issues"
        endContent={<ItemCounter number={13} />}
        startContent={
          <IconWrapper className="bg-success/10 text-success">
            <Avatar
              alt={imageByIndex(1)}
              className="flex-shrink-0"
              size="sm"
              src={"item.avatar"}
            />
          </IconWrapper>
        }
      >
        Issues
      </ListboxItem>
      <ListboxItem
        key="pull_requests"
        endContent={<ItemCounter number={6} />}
        startContent={
          <IconWrapper className="bg-primary/10 text-primary">
            <Avatar
              alt={"item.name"}
              className="flex-shrink-0"
              size="sm"
              src={"item.avatar"}
            />
          </IconWrapper>
        }
      >
        Pull Requests
      </ListboxItem>
      <ListboxItem
        key="discussions"
        endContent={<ItemCounter number={293} />}
        startContent={
          <IconWrapper className="bg-secondary/10 text-secondary">
            <Avatar
              alt={"item.name"}
              className="flex-shrink-0"
              size="sm"
              src={"item.avatar"}
            />
          </IconWrapper>
        }
      >
        Discussions
      </ListboxItem>
      <ListboxItem
        key="actions"
        endContent={<ItemCounter number={2} />}
        startContent={
          <IconWrapper className="bg-warning/10 text-warning">
            <Avatar
              alt={"item.name"}
              className="flex-shrink-0"
              size="sm"
              src={"item.avatar"}
            />
          </IconWrapper>
        }
      >
        Actions
      </ListboxItem>
      <ListboxItem
        key="projects"
        endContent={<ItemCounter number={4} />}
        startContent={
          <IconWrapper className="bg-default/50 text-foreground">
            <Avatar
              alt={"item.name"}
              className="flex-shrink-0"
              size="sm"
              src={"item.avatar"}
            />
          </IconWrapper>
        }
      >
        Projects
      </ListboxItem>
      <ListboxItem
        key="releases"
        className="group h-auto py-3"
        endContent={<ItemCounter number={399} />}
        startContent={
          <IconWrapper className="bg-primary/10 text-primary">
            <Avatar
              alt={"item.name"}
              className="flex-shrink-0"
              size="sm"
              src={"item.avatar"}
            />
          </IconWrapper>
        }
        textValue="Releases"
      >
        <div className="flex flex-col gap-1">
          <span>Releases</span>
          <div className="px-2 py-1 rounded-small bg-default-100 group-data-[hover=true]:bg-default-200">
            <span className="text-tiny text-default-600">
              @nextui-org/react@2.0.10
            </span>
            <div className="flex gap-2 text-tiny">
              <span className="text-default-500">49 minutes ago</span>
              <span className="text-success">Latest</span>
            </div>
          </div>
        </div>
      </ListboxItem>
      <ListboxItem
        key="contributors"
        endContent={<ItemCounter number={79} />}
        startContent={
          <IconWrapper className="bg-warning/10 text-warning">
            <Avatar
              alt={"item.name"}
              className="flex-shrink-0"
              size="sm"
              src={"item.avatar"}
            />
          </IconWrapper>
        }
      >
        Contributors
      </ListboxItem>
      <ListboxItem
        key="watchers"
        endContent={<ItemCounter number={82} />}
        startContent={
          <IconWrapper className="bg-default/50 text-foreground">
            <Avatar
              alt={"item.name"}
              className="flex-shrink-0"
              size="sm"
              src={"item.avatar"}
            />
          </IconWrapper>
        }
      >
        Watchers
      </ListboxItem>
      <ListboxItem
        key="license"
        endContent={<span className="text-small text-default-400">MIT</span>}
        startContent={
          <IconWrapper className="bg-danger/10 text-danger dark:text-danger-500">
            <Avatar
              alt={"item.name"}
              className="flex-shrink-0"
              size="sm"
              src={"item.avatar"}
            />
          </IconWrapper>
        }
      >
        License
      </ListboxItem>
    </Listbox>
  );
}
