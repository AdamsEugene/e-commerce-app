import { apiGet } from "@/src/api/apiCalles";
import { TProduct } from "@/src/types";
import ModalComponent from "./_ModalComponent";

type PROPS = {
  params: { product_id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default async function Preview({ params }: PROPS) {
  const product = await apiGet<TProduct>(`products/${params.product_id}`);

  return <ModalComponent images={product.images} />;
}
