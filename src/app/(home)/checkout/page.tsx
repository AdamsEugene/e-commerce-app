import { Metadata } from "next/types";

import "../home.css";
import CheckingOut from "../product/components/CheckingOut";

export const metadata: Metadata = {
  title: "Products Name",
};

export default function Checkout() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-10">
      <div className="container flex flex-col items-center justify-center gap-8 min-h-full">
        <CheckingOut />
      </div>
    </section>
  );
}
