import { FaCoins, FaInfinity, FaHeadset, FaCrown } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";

export const purchasePlan = {
  label: "Choose Your Payment Plan",
  description:
    "Select the best payment plan that suits your needs. You can switch plans anytime.",
  icon: MdOutlinePayments,
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
      label: "Monthly Subscription",
      icon: FaInfinity,
    },
    {
      description:
        "Rent items with 24/7 support included. Contact us for personalized pricing.",
      value: "rent",
      label: "Item Rental Plan",
      icon: FaHeadset,
    },
    {
      description:
        "Make a one-time payment for lifetime access to all items and premium support.",
      value: "high_purchase",
      label: "High Purchase Plan",
      icon: FaCrown,
    },
  ] as const,
};
