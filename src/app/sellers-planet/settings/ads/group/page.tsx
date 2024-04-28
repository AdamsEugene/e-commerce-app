import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add Group",
};

export default function AddGroup() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Add Group</h1>
      <div className="h-16"></div>
    </div>
  );
}
