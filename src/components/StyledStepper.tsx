"use client";

import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { AiOutlineHome, AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { Button } from "@nextui-org/button";
import BackButton from "./button/BackButton";
import { useAppStore } from "../providers/AppStoreProvider";

type PROPS = {
  steps: {
    label: string;
    icon?: JSX.Element;
    visited: boolean;
    component: React.ReactNode;
  }[];
};

const StyledStepper = ({ steps }: PROPS) => {
  const [activeStep, setActiveStep] = useState(0);
  const [visitedSteps, setVisitedSteps] = useState([0]);
  const [errorSteps, setErrorSteps] = useState<number[]>([]); // Keep track of steps with errors
  const controls = useAnimation();

  const updateAccountType = useAppStore((state) => state.updateAccountType);

  //   const steps = [
  //     { label: "Step 1", icon: <AiOutlineHome />, visited: true, component: "" },
  //     { label: "Step 2", icon: <AiOutlineUser />, visited: false, component: "" },
  //     { label: "Step 3", icon: <AiOutlineMail />, visited: false, component: "" },
  //   ];

  const isStepValid = (index: number): boolean => {
    // Implement your validation logic here
    // For example, check if the step is valid based on some conditions
    // Return true if the step is valid, false otherwise
    return index === 1; // Replace this with your actual validation
  };

  const handleStepChange = async (index: number) => {
    // Check if the current step has errors
    if (!isStepValid(activeStep)) {
      setErrorSteps((prevErrors: number[]) => [...prevErrors, activeStep]);
    }

    // Reset errors for the current step
    setErrorSteps((prevErrors) =>
      prevErrors.filter((step) => step !== activeStep)
    );

    // Perform the transition animation
    controls.start({
      opacity: 0,
    });

    setTimeout(() => {
      setActiveStep(index);
      controls.start({ opacity: 1 });
    }, 300);

    // Update visited steps when a non-visited step is clicked
    if (!visitedSteps.includes(index)) {
      setVisitedSteps([...visitedSteps, index]);
    }
  };

  return (
    <div className="w-full home">
      <div className="main flex flex-col w-full items-center">
        <BackButton func={() => updateAccountType(undefined)} />
        <div className="max-w-full w-full flex flex-row-reverse justify-center items-center mx-auto -mt-4 p-0">
          <div className="flex flex-col items-end space-y-8 w-56 h-max justify-between -mr-56">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-end space-y-2 cursor-pointer w-full"
              >
                <Button
                  isIconOnly
                  color={
                    (visitedSteps.includes(index) || index <= activeStep) &&
                    !errorSteps.includes(index)
                      ? "secondary"
                      : errorSteps.includes(index)
                      ? "danger"
                      : "default"
                  }
                  radius="full"
                  aria-label="Like"
                  onClick={() => handleStepChange(index)}
                >
                  {step.icon || index + 1}
                </Button>
                <span
                  className={`text-center text-xl ${
                    (visitedSteps.includes(index) || index <= activeStep) &&
                    !errorSteps.includes(index)
                      ? "text-secondary"
                      : errorSteps.includes(index)
                      ? "text-danger"
                      : "text-default"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 1 }}
            animate={controls}
            transition={{ type: "tween", duration: 0.3 }}
            className="mt-4"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className={activeStep === index ? "block" : "hidden"}>
                  {step.component}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StyledStepper;
