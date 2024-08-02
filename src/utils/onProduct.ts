import { FaCoins, FaInfinity, FaHeadset, FaCrown } from "react-icons/fa";
import {
  FaHandHoldingUsd,
  FaCogs,
  FaSyncAlt,
  FaShieldAlt,
} from "react-icons/fa";

export const productDetailOptions = [
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

export const purchasePlan = {
  label: "Choose Your Payment Plan",
  description:
    "Select the best payment plan that suits your needs. You can switch plans anytime.",
  icon: FaHandHoldingUsd,
  data: [
    {
      description: "Flexible payment option for up to 20 items per month.",
      value: "default",
      label: "Pay As You Go",
      icon: FaCoins,
    },
    {
      description: "Enjoy unlimited items for a flat rate of $10 per month.",
      value: "leasing",
      label: "Lease",
      icon: FaInfinity,
    },
    {
      description:
        "Rent items with 24/7 support included. Contact us for personalized pricing.",
      value: "rent",
      label: "Item Rental",
      icon: FaHeadset,
    },
    {
      description:
        "Make a one-time payment for lifetime access to all items and premium support.",
      value: "high_purchase",
      label: "High Purchase",
      icon: FaCrown,
    },
  ] as const,
};
