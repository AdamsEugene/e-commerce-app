"use client";

import { useParams, usePathname } from "next/navigation";
import ConditionalRender from "@/src/components/_shared/Conditional/ConditionalRender";
import HomeSwiper from "@/src/components/_shared/swiper/HomeSwiper";
import { TProduct } from "@/src/types";

type PROPS = {
  products: TProduct[];
  total: number;
};

export default function GalleryComponent({ products, total }: PROPS) {
  const params = useParams<{ page: string }>();
  const pathName = usePathname();

  return (
    <ConditionalRender
      condition={!!params.page || pathName === "/"}
      Component={
        <section className="flex flex-col items-center justify-center !gap-8 pb-8 home">
          <div className="xs:h-[min(25rem,60vh)] h-[34rem] w-full max-w-[1780px]">
            <HomeSwiper products={products} total={total} />
          </div>
        </section>
      }
    />
  );
}
