import { Metadata } from "next/types";

import "../../home.css";
import GridCard from "@/src/components/GridCard";

export const metadata: Metadata = {
  title: "Products categories",
};

export default function Products() {
  return (
    <section className="w-full home">
      <div className="main flex flex-col justify-center items-center">
        <div className="w-full">
          <h3 className="text-3xl font-bold mb-4">Products categories</h3>
        </div>
        <GridCard />
      </div>
    </section>
  );
}
