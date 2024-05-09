import React from "react";
import { Tabs, Tab, Card, CardBody, TabsProps } from "@nextui-org/react";

import ConditionalRender from "../Conditional/ConditionalRender";

type PROPS = {
  data: {
    id: string;
    label: string;
    icon?: React.JSX.Element;
    content: React.JSX.Element;
  }[];
};

export default function StyledTab({ data, color }: PROPS & TabsProps) {
  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Dynamic tabs"
        items={data}
        fullWidth
        color={color || "primary"}
      >
        {(item) => (
          <Tab
            key={item.id}
            title={
              <div className="flex items-center space-x-2">
                <ConditionalRender
                  condition={!!item?.icon}
                  Component={item?.icon}
                />
                <span>{item.label}</span>
              </div>
            }
          >
            <Card>
              <CardBody>{item.content}</CardBody>
            </Card>
          </Tab>
        )}
      </Tabs>
    </div>
  );
}
