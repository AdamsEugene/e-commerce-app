import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reporting",
};

export default function Reporting() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Reporting</h1>
      <div className="h-16"></div>
    </div>
  );
}
