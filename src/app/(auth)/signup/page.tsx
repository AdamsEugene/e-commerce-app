import { Metadata } from "next/types";
import AuthWrapper from "../components/AuthWrapper";
import Forms from "../components/Forms";
import {
  MdMail,
  MdOutlineSecurity,
  MdPerson,
  MdLocalPhone,
} from "react-icons/md";
import { INPUT_PROPS } from "@/src/components/StyledInput";

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

export default function Signup() {
  return (
    <AuthWrapper>
      <Forms
        formData={formData}
        forWhat="Signup"
        message="Exciting opportunities await! Create your account and dive in."
      />
    </AuthWrapper>
  );
}
