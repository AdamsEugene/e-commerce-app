import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React, { PropsWithChildren } from "react";

type PROPS = {
  title: string;
  leftSideComponent?: React.ReactNode[];
};

export default function GridItem({
  children,
  title,
  leftSideComponent,
}: PropsWithChildren<PROPS>) {
  return (
    <Card radius="sm" shadow="sm" className="h-full w-full">
      <CardHeader>
        <div className="flex items-center justify-between w-full">
          <p>{title}</p>
          <div className="flex items-center gap-3">
            {leftSideComponent?.map((component, index) => (
              <div key={index} className="flex items-center gap-3">
                {component}
              </div>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardBody>{children}</CardBody>
    </Card>
  );
}
