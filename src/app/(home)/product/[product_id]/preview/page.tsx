import { apiGet } from "@/src/api/apiCalles";
import BackButton from "@/src/components/_shared/button/BackButton";
import ImageGallery from "@/src/components/_shared/swiper/ImageGallery";
import { TProduct } from "@/src/types";

type PROPS = {
  params: { product_id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default async function Preview({ params }: PROPS) {
  const product = await apiGet<TProduct>(`products/${params.product_id}`);

  return (
    <section className="w-full home pb-8">
      <div className="w-full flex flex-col justify-center items-center max-w-[1180px]">
        <BackButton />
        <div className="mt-2">
          <ImageGallery images={product?.images} preview="lg" />
        </div>
      </div>
    </section>
  );
}
