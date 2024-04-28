import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campaigns",
};

export default function Campaigns() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Campaigns</h1>
      <div className="h-16"></div>
    </div>
  );
}
