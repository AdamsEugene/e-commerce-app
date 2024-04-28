import ConditionalRender from "@/src/components/_shared/Conditional/ConditionalRender";
import { Card, CardBody, CardHeader, CardProps } from "@nextui-org/react";
import React, { PropsWithChildren } from "react";

type PROPS = {
  title?: string;
  leftSideComponent?: React.ReactNode[];
};

export default function GridItem(props: PropsWithChildren<PROPS & CardProps>) {
  const { children, title, leftSideComponent, ...others } = props;
  return (
    <Card radius="sm" shadow="sm" className="h-full w-full" {...others}>
      <ConditionalRender
        condition={!!title}
        Component={
          <CardHeader>
            <div className="flex items-center justify-between w-full">
              <p className="capitalize">{title}</p>
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
