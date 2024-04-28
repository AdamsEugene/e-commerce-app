import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Budget",
};

export default function Budget() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Budget</h1>
      <div className="h-16"></div>
    </div>
  );
}
