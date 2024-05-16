import KeyValueDisplay from "@/src/components/_shared/others/KeyValueDisplay";
import React from "react";

export default function SettingsView() {
  return (
    <div className="flex flex-col gap-8">
      <KeyValueDisplay />
      <KeyValueDisplay />
      <KeyValueDisplay />
      <KeyValueDisplay />
      <KeyValueDisplay />
    </div>
  );
}
