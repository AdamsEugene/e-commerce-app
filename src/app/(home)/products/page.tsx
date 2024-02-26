import { Metadata } from "next/types";

import "../../(home)/home.css";
import StyledCardGrid from "@/src/components/swiper/StyledCardGrid";

export const metadata: Metadata = {
  title: "Products categories",
};

export default function Products() {
  return (
    <section className="w-full home">
      <div className="main flex flex-col justify-center items-center">
        <div className="w-full">
          <h3 className="text-3xl font-bold my-2">Products categories</h3>
        </div>
        <StyledCardGrid />
      </div>
    </section>
  );
}
