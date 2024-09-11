import { Spinner } from "@nextui-org/react";
import React from "react";

export default function Loading() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Spinner label="Loading..." color="secondary" size="lg" />
    </div>
  );
}
