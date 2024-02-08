import { Metadata } from "next/types";
import AuthWrapper from "../components/AuthWrapper";
import Forms from "../components/Forms";
import { INPUT_PROPS } from "@/_shared/components/StyledInput";
import { MdMail, MdOutlineSecurity } from "react-icons/md";

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
        forWhat="Login"
        message="Great to have you back! Log in and pick up where you left off."
      />
    </AuthWrapper>
  );
}
