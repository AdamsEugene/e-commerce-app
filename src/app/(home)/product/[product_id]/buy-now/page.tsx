import { Metadata, ResolvingMetadata } from "next/types";

import "../../../home.css";
import CheckingOut from "../../components/CheckingOut";
import cartItems from "@/src/utils/cartItem";

type Props = {
  params: { product_id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const productId = params.product_id;

  // fetch data
  const getCurrentItem = cartItems.find((item) => item.productId === productId);

  // const product = await fetch(`https://.../${id}`).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: getCurrentItem?.itemName,
    openGraph: {
      images: ["/some-specific-page-image.jpg", ...previousImages],
    },
  };
}

export default function BuyNow() {
  return (
    <section className="w-full home">
      <CheckingOut buyNow />
    </section>
  );
}
