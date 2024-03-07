import { Metadata } from "next/types";

import AuthWrapper from "../components/AuthWrapper";
import RenderSignup from "./_RenderSignup";

export const metadata: Metadata = {
  title: "Signup",
};

export default function Signup() {
  return (
    <AuthWrapper>
      <RenderSignup />
    </AuthWrapper>
  );
}
