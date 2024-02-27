import type { Metadata, ResolvingMetadata } from "next";
import Details from "../components/Details";
import GridCard from "@/src/components/GridCard";
import ImageGallery from "@/src/components/swiper/ImageGallery";
import AddReview from "@/src/components/AddReview";
import ReviewList from "@/src/components/Reviews";
import StyledFAQ from "@/src/components/FAQ";
import cartItems from "@/src/utils/cartItem";
import "../../home.css";
import BackButton from "@/src/components/button/BackButton";

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

export default function Products() {
  return (
    <section className="w-full home">
      <div className="main flex flex-col w-full items-center">
        <BackButton />
        <div className="main flex">
          <div className="gallery_wrapper">
            <ImageGallery />
          </div>
          <div className="product_details">
            <Details />
          </div>
        </div>
        <div className="main flex flex-col justify-center items-center">
          <div className="w-full">
            <h3 className="text-3xl font-bold mb-4">Use cases</h3>
          </div>
        </div>
        <div className="main flex flex-col justify-center items-center">
          <div className="w-full">
            <h3 className="text-3xl font-bold mb-4">You may also like</h3>
          </div>
          <GridCard numberOfItems={10} />
        </div>
        <div className="main flex flex-col justify-center items-center">
          <div className="w-full">
            <h3 className="text-3xl font-bold mb-4">What our customers say:</h3>
          </div>
          <AddReview />
        </div>
        <div className="main flex flex-col justify-center items-center">
          <div className="w-full">
            <h3 className="text-3xl font-bold mb-4">Reviews</h3>
          </div>
          <ReviewList />
        </div>
        <div className="main flex flex-col justify-center items-center">
          <div className="w-full">
            <h3 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h3>
          </div>
          <StyledFAQ />
        </div>
      </div>
    </section>
  );
}
