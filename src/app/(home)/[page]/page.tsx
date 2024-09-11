import { Suspense } from "react";
import { Spinner } from "@nextui-org/react";
import { siteConfig } from "@/src/config/site";
import HomeSwiper from "@/src/components/_shared/swiper/HomeSwiper";
import ProductTiles from "@/src/components/others/ProductTiles";
import { fetchProducts } from "@/src/api/apiCalles";

type PROPS = {
  params: { page: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default async function Home({ params }: PROPS) {
  return (
    <section className="flex flex-col items-center justify-center !gap-8 pb-8 home">
      <div className="container main flex flex-col items-center justify-center !gap-8 min-h-52">
        <Suspense
          fallback={
            <div className="h-52 flex justify-center items-center">
              <Spinner label="Loading..." color="secondary" size="lg" />
            </div>
          }
        >
          <ProductTiles showGrid params={params} />
        </Suspense>
      </div>
    </section>
  );
}
