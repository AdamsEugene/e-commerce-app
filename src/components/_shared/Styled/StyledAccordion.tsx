import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { productDetailOptions, purchasePlan } from "@/src/utils/onProduct";
import StyledTab from "../tabs/StyledTab";

export default function StyledAccordion() {
  const { data, description, label, icon } = purchasePlan;

  const planOptions = data.map((item) => ({
    id: item.label,
    label: item.label,
    icon: <item.icon />,
    content: (
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita fuga
        reprehenderit neque, a omnis porro mollitia harum, alias molestiae
        voluptatum odit explicabo. Ipsam itaque excepturi, eos blanditiis
        possimus soluta sapiente? Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Quas suscipit eum cupiditate accusantium error dicta
        mollitia repellendus, laudantium, modi, fuga harum aliquam iusto tenetur
        repellat sint. Impedit obcaecati deserunt provident!
      </div>
    ),
  }));

  return (
    <Accordion variant="splitted" className="!shadow-none !px-0">
      {productDetailOptions.map((item) => {
        const Icon = item.icon;
        return (
          <AccordionItem
            key={item.key}
            aria-label="Accordion 1"
            title={item.name}
            subtitle={item.description}
            className="!shadow-md h-max"
            startContent={<Icon className="text-2xl text-default-500" />}
          >
            <div>
              <StyledTab data={planOptions} color="secondary" placement="top" />
            </div>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
