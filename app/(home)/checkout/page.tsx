import { Metadata } from "next/types";

import "../../(home)/home.css";
import CheckingOut from "../product/components/CheckingOut";

export const metadata: Metadata = {
  title: "Products Name",
};

export default function Checkout() {
  return (
    <section className="w-full home">
      <CheckingOut />
    </section>
  );
}
