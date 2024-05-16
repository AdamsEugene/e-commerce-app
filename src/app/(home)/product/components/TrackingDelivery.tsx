// pages/index.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import Stepper from "@/src/components/others/Stepper";

const steps = [
  {
    title: "Package Dispatched",
    date: "2024-03-01",
    time: "10:00 AM",
    location: "Warehouse",
    activities: ["Package picked up", "Dispatched for delivery"],
  },
  {
    title: "In Transit",
    date: "2024-03-01",
    time: "11:30 AM",
    location: "En Route",
    activities: ["Out for delivery"],
  },
  {
    title: "Delivered",
    date: "2024-03-01",
    time: "01:30 PM",
    location: "Recipient Address",
    activities: ["Delivered successfully"],
  },
];

const TrackingDelivery: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div>
      <motion.div
        className="flex items-center justify-center w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Stepper steps={steps} currentStep={currentStep} />
      </motion.div>
    </div>
  );
};

export default TrackingDelivery;
