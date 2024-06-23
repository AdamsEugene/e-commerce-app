import { Options } from "@/src/types";
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
] as const;

type PROPS = {
  optionChanged: (option: Options) => void;
};

export default function OptionsOnProduct(props: PROPS) {
  const { optionChanged } = props;

  return (
    <div className="grid xs:grid-cols-2 grid-cols-4 gap-4">
      {options.map((option) => {
        const Icon = option.icon;

        return (
          <Tooltip
            key={option.key}
            showArrow={true}
            content={option.description}
            color="foreground"
          >
            <Card
              id={option.key}
              isPressable
              fullWidth
              className="h-full"
              onClick={() => {
                optionChanged(option.key);
              }}
            >
              <CardBody>
                <div className="flex flex-col gap-2 items-center justify-center relative text-center h-full">
                  {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <Icon className="text-[40px] text-secondary-500/30" />
                  </div> */}
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
