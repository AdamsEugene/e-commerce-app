"use client";

import { AiOutlineHome, AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import Forms from "../components/Forms";

import StyledStepper from "@/src/components/StyledStepper";
import AccountType from "../components/AccountType";
import { useAppStore } from "@/src/providers/AppStoreProvider";
import ConditionalRenderAB from "@/src/components/_shared/Conditional/ConditionalRenderAB";
import { generalFormData } from "@/src/utils/generalFormData";
import { employeeStepsData } from "@/src/utils/employeeFormSteps";

const steps = [
  {
    component: (
      <Forms
        formData={generalFormData}
        title="Login"
        message="Exciting opportunities await! Create your account and dive in."
      />
    ),
  },
  {
    component: (
      <Forms
        formData={generalFormData}
        title="Signup"
        message="Exciting opportunities await! Create your account and dive in."
      />
    ),
  },
  {
    component: (
      <Forms
        formData={generalFormData}
        title="Login"
        message="Exciting opportunities await! Create your account and dive in."
      />
    ),
  },
  {
    component: (
      <Forms
        formData={generalFormData}
        title="Signup"
        message="Exciting opportunities await! Create your account and dive in."
      />
    ),
  },
  {
    component: (
      <Forms
        formData={generalFormData}
        title="Login"
        message="Exciting opportunities await! Create your account and dive in."
      />
    ),
  },
];

export default function RenderSignup() {
  const accountType = useAppStore((state) => state.accountType);

  const stepsFormData =
    accountType === "employee"
      ? employeeStepsData
      : accountType === "association"
      ? employeeStepsData
      : employeeStepsData;

  return (
    <>
      <ConditionalRenderAB
        condition={Boolean(accountType)}
        ComponentA={<StyledStepper steps={stepsFormData} />}
        ComponentB={<AccountType />}
      />
    </>
  );
}
