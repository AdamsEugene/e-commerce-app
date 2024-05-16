// components/Stepper.tsx
import {
  Progress,
  Avatar,
  Card,
  Spacer,
  Badge,
  Button,
  Slider,
} from "@nextui-org/react";
import { motion } from "framer-motion";

interface Step {
  title: string;
  date: string;
  time: string;
  location: string;
  activities: string[];
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="w-full relative">
        {steps.map((step, index) => (
          <div key={index} className="relative flex items-start space-x-4 py-4">
            <div
              className={`absolute top-0 left-8 -ml-px w-2 h-full ${
                index <= currentStep ? "bg-green-200" : "bg-gray-200"
              } `}
            />
            <motion.div
              className={`flex items-center z-10 ${
                index <= currentStep ? "text-primary" : "text-gray-300"
              }`}
            >
              {index <= currentStep ? (
                <Button
                  isIconOnly
                  color="success"
                  radius="full"
                  aria-label="Like"
                >
                  ✔
                </Button>
              ) : (
                <Button
                  isIconOnly
                  color="default"
                  radius="full"
                  aria-label="Like"
                >
                  {index + 1}
                </Button>
              )}
            </motion.div>
            <div className="flex flex-col space-y-2">
              <p className="font-bold">{step.title}</p>
              <p>
                {step.date} - {step.time}
              </p>
              <p>{step.location}</p>
              <Spacer y={1} />
              <Card shadow="md">
                <div className="flex items-start space-x-4 p-4">
                  <Avatar
                    src="https://i.pravatar.cc/50"
                    alt="Activity"
                    size="sm"
                  />
                  <div>
                    {step.activities.map((activity, activityIndex) => (
                      <div key={activityIndex}>
                        <p>{activity}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        ))}
        {/* <div className="absolute top-[25px] left-6 h-[calc(100%)] rotate-180">
          <Slider
            size="md"
            step={1}
            color="foreground"
            showSteps={true}
            maxValue={4}
            minValue={1}
            defaultValue={1}
            value={currentStep + 1}
            className="max-w-md"
            orientation="vertical"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Stepper;
