import { Metadata } from "next/types";

import "../../../(home)/home.css";
import Details from "../components/Details";
import GridCard from "@/components/GridCard";
import ImageGallery from "@/components/swiper/ImageGallery";
import AddReview from "@/components/AddReview";
import ReviewList from "@/components/Reviews";
import StyledFAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Products Name",
};

export default function Products() {
  return (
    <section className="w-full home">
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
    </section>
  );
}
