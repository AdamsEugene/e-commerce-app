import React from "react";
import { Button, ButtonGroup, ButtonGroupProps } from "@nextui-org/react";
import StyledPopover from "../StyledPopover";

type PROPS = {
  data: {
    name: string;
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
    <ButtonGroup {...other}>
      {data?.map((data) => {
        if (data.popOverData) {
          const { content, title } = data.popOverData;
          return (
            <StyledPopover key={data.name} title={title} content={content}>
              <Button onClick={data.onClick}>{data.name}</Button>
            </StyledPopover>
          );
        }
        return (
          <Button key={data.name} onClick={data.onClick}>
            {data.name}
          </Button>
        );
      })}
    </ButtonGroup>
  );
}
