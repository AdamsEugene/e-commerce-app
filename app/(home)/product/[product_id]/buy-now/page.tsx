import { Metadata } from "next/types";

import ImageGallery from "@/components/swiper/ImageGallery";
import "../../../../(home)/home.css";

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
        buy now
      </div>
    </section>
  );
}
