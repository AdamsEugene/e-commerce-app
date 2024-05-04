"use client";

import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useAppStore } from "../../../providers/AppStoreProvider";
import { useEffect } from "react";

type PROPS = {
  steps: {
    component: React.ReactNode;
  }[];
};

const StyledStepper = ({ steps }: PROPS) => {
  const activeStep = useAppStore((state) => state.activeStep);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1 });
  }, [activeStep, controls]);

  return (
    <div className="w-full home flex items-center justify-center">
      <div className="main flex flex-col w-full">
        <div className="max-w-full w-full flex flex-row-reverse justify-center items-center mx-auto">
          <AnimatePresence>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: activeStep === index ? 1 : 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`transition-opacity duration-300 ${
                  activeStep === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className={activeStep === index ? "block" : "hidden"}>
                  {step.component}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default StyledStepper;
