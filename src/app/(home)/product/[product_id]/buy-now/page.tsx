import { Metadata } from "next/types";

import "../../../home.css";
import CheckingOut from "../../components/CheckingOut";

export const metadata: Metadata = {
  title: "Products Name",
};

export default function BuyNow() {
  return (
    <section className="w-full home">
      <CheckingOut buyNow />
    </section>
  );
}
