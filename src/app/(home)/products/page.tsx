import { Metadata } from "next/types";

import "../../(home)/home.css";
import StyledCardGrid from "@/src/components/_shared/swiper/StyledCardGrid";
import BackButton from "@/src/components/_shared/button/BackButton";

export const metadata: Metadata = {
  title: "Products categories",
};

export default function Products() {
  return (
    <section className="w-full home mb-8">
      <div className="main flex flex-col justify-center items-center">
        <div className="w-full">
          <BackButton />
          <h3 className="text-3xl font-bold my-2">Products categories</h3>
        </div>
        <StyledCardGrid />
      </div>
    </section>
  );
}
