import React, { PropsWithChildren } from "react";
import { Card, CardBody, CardHeader, CardProps } from "@nextui-org/react";
import ConditionalRender from "@/src/components/_shared/Conditional/ConditionalRender";

type PROPS = {
  content?: string | React.ReactNode
  leftSideComponent?: React.ReactNode[];
};

export default function GridItem(props: PropsWithChildren<PROPS & CardProps>) {
  const { children, content, leftSideComponent, ...others } = props;
  return (
    <Card radius="sm" shadow="sm" className="h-full w-full" {...others}>
      <ConditionalRender
        condition={!!content}
        Component={
          <CardHeader>
            <div className="flex items-center justify-between w-full">
              <p className="capitalize">{content}</p>
              <div className="flex items-center gap-3">
                {leftSideComponent?.map((component, index) => (
                  <div key={index} className="flex items-center gap-3">
                    {component}
                  </div>
                ))}
              </div>
            </div>
          </CardHeader>
        }
      />
      <CardBody>{children}</CardBody>
    </Card>
  );
}
