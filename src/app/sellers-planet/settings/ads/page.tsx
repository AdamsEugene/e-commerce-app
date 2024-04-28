import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ads",
};

export default function ADS() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">ADS</h1>
      <div className="h-16"></div>
    </div>
  );
}
