import { Card, CardBody, Tooltip } from "@nextui-org/react";
import {
  FaHandHoldingUsd,
  FaCogs,
  FaSyncAlt,
  FaShieldAlt,
} from "react-icons/fa";

const options = [
  {
    name: "Select Plan",
    key: "selectPlan",
    description: "Choose from various plans like rent, lease, or purchase.",
    icon: FaHandHoldingUsd,
  },
  {
    name: "Customization",
    key: "customization",
    description:
      "Opt for customization to personalize the product according to your needs.",
    icon: FaCogs,
  },
  {
    name: "Subscription",
    key: "subscription",
    description:
      "Subscribe to receive regular product deliveries on a weekly or monthly basis.",
    icon: FaSyncAlt,
  },
  {
    name: "Protection Plan",
    key: "protection",
    description:
      "Get protection plans to safeguard your product against damages.",
    icon: FaShieldAlt,
  },
];

export default function OptionsOnProduct() {
  return (
    <div className="flex items-center gap-4">
      {options.map((option) => {
        const Icon = option.icon;

        return (
          <Tooltip showArrow={true} content={option.description}>
            <Card id={option.key} isPressable fullWidth>
              <CardBody>
                <div className="flex flex-col gap-2 items-center justify-center">
                  <Icon className="text-2xl text-default-500" />
                  <p className="text-sm font-medium">{option.name}</p>
                </div>
              </CardBody>
            </Card>
          </Tooltip>
        );
      })}
    </div>
  );
}
