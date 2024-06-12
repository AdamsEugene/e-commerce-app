import React from "react";
import { As, Button, ButtonGroup, ButtonGroupProps } from "@nextui-org/react";
import StyledPopover from "../Styled/StyledPopover";
import { IconType } from "react-icons";

type PROPS = {
  data: {
    name: string;
    icon?: IconType;
    as?: As<any>;
    href?: string;
    isIconOnly?: boolean;
    variant?:
      | "solid"
      | "bordered"
      | "light"
      | "flat"
      | "faded"
      | "shadow"
      | "ghost";
    onClick?: () => void;
    popOverData?: {
      title: string;
      content: React.JSX.Element;
    };
  }[];
};

export default function StyledButtonGroup(props: PROPS & ButtonGroupProps) {
  const { data, ...other } = props;
  return (
    <ButtonGroup fullWidth {...other}>
      {data?.map((data) => {
        const Icon = data.icon;
        if (data.popOverData) {
          const { content, title } = data.popOverData;
          return (
            <StyledPopover key={data.name} title={title} content={content}>
              <Button
                onClick={data.onClick}
                variant={data.variant}
                as={data.as}
                href={data.href}
              >
                {data.name}
              </Button>
            </StyledPopover>
          );
        }
        return (
          <Button
            key={data.name}
            onClick={data.onClick}
            variant={data.variant}
            as={data.as}
            href={data.href}
            isIconOnly={data.isIconOnly}
          >
            {Icon ? <Icon /> : data.name}
          </Button>
        );
      })}
    </ButtonGroup>
  );
}
