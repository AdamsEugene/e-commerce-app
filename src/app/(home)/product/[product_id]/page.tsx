import Link from "next/link";
import { Button } from "@nextui-org/button";
import type { Metadata, ResolvingMetadata } from "next";
import Details from "../components/Details";
import ImageGallery from "@/src/components/_shared/swiper/ImageGallery";
import AddReview from "@/src/components/others/AddReview";
import ReviewList from "@/src/components/others/Reviews";
import StyledFAQ from "@/src/components/others/FAQ";
import cartItems from "@/src/utils/cartItem";
import "../../home.css";
import BackButton from "@/src/components/_shared/button/BackButton";
import { siteConfig } from "@/src/config/site";
import Specifications from "@/src/components/others/Specifications";
import BannerAdsDisplay from "@/src/components/_shared/advertisement/BannerAdsDisplay";
import UseCases from "../components/UseCases";
import { adsPreview } from "@/src/utils/adsData";
import RecommendedProducts from "../components/RecommendedProducts";
import RecommendedAds from "../components/RecommendedAds";
import { apiGet } from "@/src/api/apiCalles";
import { TProduct } from "@/src/types";

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
      images: [getCurrentItem?.image as any, ...previousImages],
    },
  };
}

type PROPS = {
  params: { product_id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default async function Products({ params }: PROPS) {
  const product = await apiGet<TProduct>(`products/${params.product_id}`);

  return (
    <section className="w-full home pb-8">
      <div className="flex flex-col w-full items-center gap-8 max-w-[1180px] relative">
        <BackButton />
        <div className="main flex xs:flex-col">
          <div className="gallery_wrapper xs:w-full w-[500px] xs:h-[min(60vh,520px)] h-[min(60vh,600px)] xs:static sticky top-[90px]">
            <ImageGallery images={product?.images} />
          </div>
          <div className="product_details">
            <Details product={product} />
          </div>
        </div>
        <div className="main flex flex-col justify-center items-center">
          <div className="w-full">
            <h3 className="text-3xl font-bold mb-4">Use cases</h3>
            <UseCases />
          </div>
        </div>
        <div className="main flex flex-col justify-center items-center">
          <div className="w-full flex justify-between items-baseline">
            <h3 className="text-3xl font-bold mb-4">Recommendations</h3>
            <Button as={Link} href={siteConfig.pages.products} variant="light">
              See more
            </Button>
          </div>
          <RecommendedAds />
        </div>
        <div className="main flex flex-col justify-center items-center">
          <BannerAdsDisplay ads={adsPreview} />
        </div>
        <div className="main flex flex-col justify-center items-center">
          <div className="w-full flex justify-between items-baseline">
            <h3 className="text-3xl font-bold mb-4">You may also like</h3>
            <Button as={Link} href={siteConfig.pages.products} variant="light">
              See more
            </Button>
          </div>
          <RecommendedProducts />
          <RecommendedProducts />
        </div>
        <div className="main flex flex-col justify-center items-center">
          <div className="w-full">
            <h3 className="text-3xl font-bold mb-4">Specifications</h3>
          </div>
          <Specifications />
        </div>
        <div className="main flex flex-col justify-center items-center">
          <div className="w-full">
            <h3 className="text-3xl font-bold mb-4">What our customers say</h3>
          </div>
          <AddReview />
        </div>
        <div className="main flex flex-col justify-center items-center">
          <div className="w-full">
            <h3 className="text-3xl font-bold mb-4">Reviews</h3>
          </div>
          <ReviewList reviews={product.reviews} />
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
