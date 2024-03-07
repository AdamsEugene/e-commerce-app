"use client";

import Forms from "../components/Forms";
import {
  MdMail,
  MdOutlineSecurity,
  MdPerson,
  MdLocalPhone,
} from "react-icons/md";
import { AiOutlineHome, AiOutlineUser, AiOutlineMail } from "react-icons/ai";

import { INPUT_PROPS } from "@/src/components/StyledInput";
import StyledStepper from "@/src/components/StyledStepper";
import AccountType from "../components/AccountType";
import { useAppStore } from "@/src/providers/AppStoreProvider";
import ConditionalRenderAB from "@/src/components/ConditionalRenderAB";

const formData: INPUT_PROPS[] = [
  {
    label: "Email",
    placeholder: "adams@gmail.com",
    type: "email",
    Icon: MdMail,
  },
  {
    label: "Name",
    placeholder: "Adams Eugene",
    type: "text",
    Icon: MdPerson,
  },
  {
    label: "Phone",
    placeholder: "0 244 22 44 55",
    type: "phone",
    Icon: MdLocalPhone,
  },
  {
    label: "Password",
    placeholder: "",
    type: "password",
    Icon: MdOutlineSecurity,
  },
  {
    label: "Confirm Password",
    placeholder: "",
    type: "password",
    Icon: MdOutlineSecurity,
  },
];

const steps = [
  {
    label: "Basic info",
    // icon: <AiOutlineHome />,
    visited: true,
    component: (
      <Forms
        formData={formData}
        forWhat="Signup"
        message="Exciting opportunities await! Create your account and dive in."
      />
    ),
  },
  {
    label: "Step 2",
    icon: <AiOutlineUser />,
    visited: false,
    component: (
      <Forms
        formData={formData}
        forWhat="Signup"
        message="Exciting opportunities await! Create your account and dive in."
      />
    ),
  },
  {
    label: "Step 3",
    icon: <AiOutlineMail />,
    visited: false,
    component: (
      <Forms
        formData={formData}
        forWhat="Signup"
        message="Exciting opportunities await! Create your account and dive in."
      />
    ),
  },
  {
    label: "Step 4",
    // icon: <AiOutlineMail />,
    visited: false,
    component: (
      <Forms
        formData={formData}
        forWhat="Signup"
        message="Exciting opportunities await! Create your account and dive in."
      />
    ),
  },
  {
    label: "Step 5",
    icon: <AiOutlineMail />,
    visited: false,
    component: (
      <Forms
        formData={formData}
        forWhat="Signup"
        message="Exciting opportunities await! Create your account and dive in."
      />
    ),
  },
];

export default function RenderSignup() {
  const accountType = useAppStore((state) => state.accountType);

  return (
    <>
      <ConditionalRenderAB
        condition={Boolean(accountType)}
        ComponentA={<StyledStepper steps={steps} />}
        ComponentB={<AccountType />}
      />
    </>
  );
}
