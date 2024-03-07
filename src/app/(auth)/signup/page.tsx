import { Metadata } from "next/types";
import AuthWrapper from "../components/AuthWrapper";
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

export const metadata: Metadata = {
  title: "Signup",
};

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
    label: "Step 1",
    icon: <AiOutlineHome />,
    visited: true,
    component: (
      <Forms
        formData={formData}
        forWhat="Signup"
        message="Exciting opportunities await! Create your account and dive in."
      />
    ),
  },
  { label: "Step 2", icon: <AiOutlineUser />, visited: false, component: "" },
  { label: "Step 3", icon: <AiOutlineMail />, visited: false, component: "" },
];

export default function Signup() {
  return (
    <AuthWrapper>
      <StyledStepper steps={steps} />
    </AuthWrapper>
  );
}
