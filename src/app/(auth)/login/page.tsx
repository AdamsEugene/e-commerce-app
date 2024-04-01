import { Metadata } from "next/types";
import AuthWrapper from "../components/AuthWrapper";
import Forms from "../components/Forms";
import { MdMail, MdOutlineSecurity } from "react-icons/md";
import { INPUT_PROPS } from "@/src/components/_shared/StyledInput";

export const metadata: Metadata = {
  title: "Login",
};

const formData: INPUT_PROPS[] = [
  {
    label: "Email",
    placeholder: "adams@gmail.com",
    type: "email",
    Icon: MdMail,
  },
  {
    label: "Password",
    placeholder: "",
    type: "password",
    Icon: MdOutlineSecurity,
  },
];

export default function Login() {
  return (
    <AuthWrapper>
      <Forms
        formData={formData}
        title="Login"
        message="Great to have you back! Log in and pick up where you left off."
      />
    </AuthWrapper>
  );
}
