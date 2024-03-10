"use client";

import { PropsWithChildren, useState } from "react";
import { Button } from "@nextui-org/react";
import StyledDropdown from "@/src/components/Dropdown";
import { ThemeSwitch } from "@/src/components/theme-switch";
import BackButton from "@/src/components/button/BackButton";
import { useAppStore } from "@/src/providers/AppStoreProvider";
import { useAnimation } from "framer-motion";
import ConditionalRender from "@/src/components/ConditionalRender";
import { employeeFormSteps } from "@/src/utils/employeeFormSteps";

const languages = [
  { key: "english", label: "English" },
  { key: "french", label: "French" },
];

export default function AuthWrapper({ children }: PropsWithChildren) {
  const HeaderComponent = () => {
    const [selectedKeys, setSelectedKeys] = useState("english");

    const updateAccountType = useAppStore((state) => state.updateAccountType);
    const accountType = useAppStore((state) => state.accountType);

    const handleSelect = (key: any) => {
      setSelectedKeys(key);
    };

    return (
      <header className="main flex justify-between items-center py-4 max-w-7xl w-full fixed top-4">
        <div className="flex gap-4">
          <ThemeSwitch />
          <ConditionalRender
            condition={accountType !== undefined}
            Component={<BackButton func={() => updateAccountType(undefined)} />}
          />
        </div>
        <ConditionalRender
          condition={accountType !== "default" && accountType !== undefined}
          Component={<StepsComponent />}
        />

        <StyledDropdown
          Trigger={
            <Button variant="light" className="capitalize">
              {selectedKeys}
            </Button>
          }
          dropdownItems={languages}
          handleSelect={handleSelect}
          selectedKeys={selectedKeys}
        />
      </header>
    );
  };

  return (
    <section className="h-full w-full p-4 flex flex-col justify-center items-center">
      <HeaderComponent />
      <div className="w-full min-h-[calc(100vh-120px)] relative top-14">
        {children}
      </div>
    </section>
  );
}

const StepsComponent = () => {
  const [visitedSteps, setVisitedSteps] = useState([0]);
  const [errorSteps, setErrorSteps] = useState<number[]>([]); // Keep track of steps with errors
  const controls = useAnimation();

  const updateActiveStep = useAppStore((state) => state.updateActiveStep);
  const activeStep = useAppStore((state) => state.activeStep);

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
      updateActiveStep(index);
      controls.start({ opacity: 1 });
    }, 300);

    // Update visited steps when a non-visited step is clicked
    if (!visitedSteps.includes(index)) {
      setVisitedSteps([...visitedSteps, index]);
    }
  };

  return (
    <div className="w-full flex space-x-8 justify-between max-w-[60%]">
      {employeeFormSteps.map((step, index) => (
        <div
          key={index}
          className="flex items-center space-x-2 cursor-pointer w-full"
        >
          <Button
            isIconOnly
            size="sm"
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
            className={`text-center text-sm ${
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
  );
};
