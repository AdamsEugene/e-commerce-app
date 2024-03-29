"use client";

import { useParams } from "next/navigation";
import Ratings from "@/src/components/Ratings";
import StyledDropdown from "@/src/components/Dropdown";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/react";
import { FiMoreHorizontal } from "react-icons/fi";
import BackButton from "@/src/components/button/BackButton";
import GridItem from "../../../dashboard/components/GridItem";
import PlacedSideBySide from "../../../dashboard/components/PlacedSideBySide";
import ImageGalleryEditable from "../../../dashboard/components/ImageGalleryEditable";
import cartItems from "@/src/utils/cartItem";

const options = [
  { key: "share", label: "Share this product" },
  { key: "more", label: "See more of this" },
  { key: "favorite", label: "Add to favorite" },
  { key: "later", label: "Save to buy later" },
] as const;
type DropdownItemsType = (typeof options)[number]["key"];

export default function RenderItemDetail() {
  const params = useParams();
  const productId = params.product_id as string;

  const handleSelect = (key: any) => {
    const currentKey = key.currentKey as DropdownItemsType;
  };

  const getCurrentItem = cartItems.find((item) => item.productId === productId);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <BackButton />
        <Button color="warning" variant="ghost">
          Edit
        </Button>
      </div>
      <GridItem>
        <PlacedSideBySide
          oneThird
          firstComponent={
            <div>
              <ImageGalleryEditable />
            </div>
          }
          secondComponent={
            <div className="flex flex-col gap-4">
              <div>
                <div className="flex justify-between">
                  <Ratings rating={2.5} numberOfReviews={8} />
                  <StyledDropdown
                    Trigger={
                      <Button
                        isIconOnly
                        color="default"
                        aria-label="Like"
                        radius="full"
                        variant="light"
                        size="sm"
                      >
                        <FiMoreHorizontal className="text-lg" />
                      </Button>
                    }
                    dropdownItems={options as any}
                    handleSelect={handleSelect}
                    selectedKeys={""}
                  />
                </div>
                <h1 className="text-4xl font-bold mt-4">
                  {getCurrentItem?.itemName}
                </h1>
              </div>
              <div className="pr-16 flex flex-col gap-4">
                <p className="mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus minima soluta ullam repellendus delectus! Molestias
                  aspernatur omnis, veritatis accusantium veniam voluptate
                  saepe, molestiae dolorem quisquam, nemo similique vitae maxime
                  reprehenderit.
                </p>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus minima soluta ullam repellendus delectus! Molestias
                  aspernatur omnis, veritatis accusantium veniam voluptate
                  saepe, molestiae dolorem quisquam, nemo similique vitae maxime
                  reprehenderit.
                </p>
              </div>
              <Divider className="my-4" />
            </div>
          }
        />
      </GridItem>
    </div>
  );
}
