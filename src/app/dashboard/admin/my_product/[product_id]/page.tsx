import BackButton from "@/src/components/button/BackButton";
import GridItem from "../../../components/GridItem";
import ImageGallery from "@/src/components/swiper/ImageGallery";
import PlacedSideBySide from "../../../components/PlacedSideBySide";

export default function ProductInfo() {
  return (
    <div className="flex flex-col gap-4">
      <BackButton />
      <GridItem>
        <PlacedSideBySide
          oneThird
          firstComponent={
            <div>
              <ImageGallery />
            </div>
          }
          secondComponent={<div>hello</div>}
        />
      </GridItem>
    </div>
  );
}
