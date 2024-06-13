import { Metadata } from "next/types";

import "../home.css";
import CheckingOut from "../product/components/CheckingOut";

export const metadata: Metadata = {
  title: "Checkout",
};

export default function Checkout() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 pb-8">
      <div className="container flex flex-col items-center justify-center gap-8 min-h-full">
        <CheckingOut />
      </div>
    </section>
  );
}
