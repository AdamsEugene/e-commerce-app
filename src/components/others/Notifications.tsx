import React from "react";
import {
  Tabs,
  Tab,
  Accordion,
  AccordionItem,
  Card,
  CardBody,
} from "@nextui-org/react";
import { IoInformationCircleSharp, IoSettings } from "react-icons/io5";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";

import StyledImage from "../_shared/Styled/StyledImage";
import imageByIndex from "@/src/utils/imageByIndex";
import ConditionalRenderAB from "../_shared/Conditional/ConditionalRenderAB";

export default function Notifications() {
  const [selected, setSelected] = React.useState("recent");

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="flex flex-col w-[440px]">
      <Card className="max-w-full w-[440px] min-h-[400px] max-h-[600px]">
        <CardBody className="">
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={(key) => setSelected(key.toLocaleString())}
          >
            <Tab key="recent" title="Recent">
              <div className="flex flex-col gap-4 h-[510px] overflow-y-auto">
                <ConditionalRenderAB
                  condition={false}
                  ComponentA={
                    <div className="flex flex-col items-center justify-center gap-6">
                      <StyledImage
                        src="/assets/svgs/notification.svg"
                        alt="You do not have any new notifications"
                        height={400}
                        width={300}
                      />
                      <p className="text-lg font-semibold text-gray-600">
                        You do not have any new notifications
                      </p>
                    </div>
                  }
                  ComponentB={
                    <div className="flex flex-col gap-4 h-[510px] overflow-y-auto">
                      <Accordion
                        variant="splitted"
                        defaultExpandedKeys={["1", "2"]}
                      >
                        <AccordionItem
                          key="1"
                          aria-label="Accordion 1"
                          title="Accordion 1"
                          startContent={
                            <IoInformationCircleSharp className="text-secondary text-2xl" />
                          }
                        >
                          {defaultContent}
                        </AccordionItem>
                        <AccordionItem
                          key="2"
                          aria-label="Accordion 2"
                          title="Purchase info"
                          startContent={
                            <BiSolidPurchaseTag className="text-secondary text-2xl" />
                          }
                        >
                          <div className="flex flex-col gap-2 mb-2">
                            <div className="flex gap-2">
                              <div className="w-full">
                                <StyledImage
                                  src={imageByIndex(4)}
                                  width={120}
                                  height={120}
                                />
                              </div>
                              <div className="flex flex-col gap-2 items-end text-right w-full">
                                <p className="font-bold text-xl text-default-900">
                                  Product Name
                                </p>
                                <p className="text-gray-600">Order completed</p>
                                <p className="text-gray-500">02:32:34</p>
                              </div>
                            </div>
                          </div>
                          {defaultContent}
                        </AccordionItem>
                        <AccordionItem
                          key="3"
                          aria-label="System 2"
                          title="System info"
                          startContent={
                            <IoSettings className="text-secondary text-2xl" />
                          }
                        >
                          <div className="flex flex-col gap-2">
                            <div className="flex gap-2">
                              <p className="font-bold text-xl text-default-900">
                                System info name
                              </p>
                            </div>
                          </div>
                          {defaultContent}
                        </AccordionItem>
                        <AccordionItem
                          key="4"
                          aria-label="delivery 2"
                          title="Delivery info"
                          startContent={
                            <TbTruckDelivery className="text-secondary text-2xl" />
                          }
                        >
                          <div className="flex flex-col gap-2">
                            <div className="flex gap-2"></div>
                          </div>
                          {defaultContent}
                          <div className="flex flex-col gap-2 items-end text-right w-full">
                            <p className="text-gray-500">02:32:34</p>
                          </div>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  }
                />
              </div>
            </Tab>
            <Tab key="old" title="Achieved">
              <ConditionalRenderAB
                condition={true}
                ComponentA={
                  <div className="flex flex-col items-center justify-center gap-6">
                    <StyledImage
                      src="/assets/svgs/notification.svg"
                      alt="You do not have any new notifications"
                      height={400}
                      width={300}
                    />
                    <p className="text-lg font-semibold text-gray-600">
                      You do not have any new notifications
                    </p>
                  </div>
                }
                ComponentB={
                  <div className="flex flex-col gap-4 h-[510px] overflow-y-auto">
                    <Accordion variant="splitted">
                      <AccordionItem
                        key="1"
                        aria-label="Accordion 1"
                        title="Accordion 1"
                        startContent={
                          <IoInformationCircleSharp className="text-secondary text-2xl" />
                        }
                      >
                        {defaultContent}
                      </AccordionItem>
                      <AccordionItem
                        key="2"
                        aria-label="Accordion 2"
                        title="Purchase info"
                        startContent={
                          <BiSolidPurchaseTag className="text-secondary text-2xl" />
                        }
                      >
                        <div className="flex flex-col gap-2">
                          <div className="flex gap-2">
                            <div className="w-full">
                              <StyledImage
                                src={imageByIndex(4)}
                                width={120}
                                height={120}
                              />
                            </div>
                            <div className="flex flex-col gap-2 items-end text-right w-full">
                              <p className="font-bold text-xl text-default-900">
                                Product Name
                              </p>
                              <p className="text-gray-600">Order completed</p>
                              <p className="text-gray-500">02:32:34</p>
                            </div>
                          </div>
                        </div>
                        {defaultContent}
                      </AccordionItem>
                      <AccordionItem
                        key="3"
                        aria-label="System 2"
                        title="System info"
                        startContent={
                          <IoSettings className="text-secondary text-2xl" />
                        }
                      >
                        <div className="flex flex-col gap-2">
                          <div className="flex gap-2">
                            <p className="font-bold text-xl text-default-900">
                              System info name
                            </p>
                          </div>
                        </div>
                        {defaultContent}
                      </AccordionItem>
                      <AccordionItem
                        key="4"
                        aria-label="delivery 2"
                        title="Delivery info"
                        startContent={
                          <TbTruckDelivery className="text-secondary text-2xl" />
                        }
                      >
                        <div className="flex flex-col gap-2">
                          <div className="flex gap-2"></div>
                        </div>
                        {defaultContent}
                        <div className="flex flex-col gap-2 items-end text-right w-full">
                          <p className="text-gray-500">02:32:34</p>
                        </div>
                      </AccordionItem>
                    </Accordion>
                  </div>
                }
              />
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}
