import { Metadata } from "next";
import GridCard from "@/src/components/GridCard";

export const metadata: Metadata = {
  title: "My Products",
};

export default function MyProducts() {
  return (
    <div className="flex flex-col gap-4">
      <GridCard baseLink="my-product" />
      <div className="h-16"></div>
    </div>
  );
}
