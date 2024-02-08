import { Metadata } from "next/types";

import "../../../(home)/home.css";
import Details from "../components/Details";
import GridCard from "@/components/GridCard";
import ImageGallery from "@/components/swiper/ImageGallery";
import AddReview from "@/components/AddReview";
import ReviewList from "@/components/Reviews";

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
        use cases
      </div>
      <div className="main flex flex-col justify-center items-center">
        <AddReview />
      </div>
      <div className="main flex flex-col justify-center items-center">
        <ReviewList />
      </div>
      <div className="main products">
        <GridCard />
      </div>
    </section>
  );
}
