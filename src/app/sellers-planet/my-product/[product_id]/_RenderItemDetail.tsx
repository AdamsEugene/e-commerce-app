"use client";

import { useParams } from "next/navigation";
import { Button } from "@nextui-org/button";
import { Divider, Chip } from "@nextui-org/react";
import { FiMoreHorizontal } from "react-icons/fi";
import { IoCheckmarkCircle } from "react-icons/io5";

import Ratings from "@/src/components/Ratings";
import StyledDropdown from "@/src/components/_shared/Dropdown";
import BackButton from "@/src/components/_shared/button/BackButton";
import GridItem from "@/src/components/GridItem";
import PlacedSideBySide from "@/src/components/_shared/PlacedSideBySide";
import ImageGalleryEditable from "@/src/components/ImageGalleryEditable";
import cartItems from "@/src/utils/cartItem";
import AddReview from "@/src/components/AddReview";
import PriceCard from "@/src/components/PriceCard";
import RenderSizeAndColor from "@/src/components/RenderSizeAndColor";
import StyledLineChart from "@/src/components/_shared/charts/StyledLineChart";
import {
  chartData,
  filterNameUVandPV,
} from "@/src/utils/generateDataForSelect";
import StyledTable from "@/src/components/_shared/StyledTable";
import AddPriceInfo from "@/src/components/AddPriceInfo";

const options = [
  { key: "share", label: "Share this product" },
  { key: "more", label: "See more of this" },
  { key: "favorite", label: "Add to favorite" },
  { key: "later", label: "Save to buy later" },
] as const;

const plans = [
  { key: "default", label: "Default" },
  { key: "leasing", label: "Lease" },
  { key: "rent", label: "Rent" },
] as const;

type DropdownItemsType = (typeof options)[number]["key"];
type DropdownPlanType = (typeof plans)[number]["key"];

const colors = [
  { text: "Large", bg: "#4F46E580" },
  { text: "Large", bg: "#EF444480" },
  { text: "Large", bg: "#F9731680" },
  { text: "Large", bg: "#10B98180" },
  { text: "+" },
];

const sizes = [
  { text: "sm" },
  { text: "md" },
  { text: "lg" },
  { text: "xxl" },
  { text: "+" },
];

const quantity = [{ text: "21" }, { text: "+" }];
const availability = [{ text: "Available" }, { text: "+" }];
const productStatus = [{ text: "Not Approved" }, { text: "+" }];
const supportedPlane = [
  { text: "Leasing" },
  { text: "Renting" },
  { text: "+" },
];

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
      <div>
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
                    saepe, molestiae dolorem quisquam, nemo similique vitae
                    maxime reprehenderit.
                  </p>
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus minima soluta ullam repellendus delectus! Molestias
                    aspernatur omnis, veritatis accusantium veniam voluptate
                    saepe, molestiae dolorem quisquam, nemo similique vitae
                    maxime reprehenderit.
                  </p>
                </div>
                <Divider className="my-4" />
                <div className="flex flex-row gap-3">
                  <RenderSizeAndColor data={colors} title="Colors" />
                  <RenderSizeAndColor
                    data={sizes}
                    variant="bordered"
                    title="Sizes"
                  />
                </div>
                <div className="flex flex-row gap-3">
                  <RenderSizeAndColor
                    data={quantity}
                    title="Available Quantity"
                  />
                  <RenderSizeAndColor
                    data={availability}
                    variant="dot"
                    title="Availability"
                    color="success"
                  />
                  <RenderSizeAndColor
                    data={productStatus}
                    variant="dot"
                    title="Status"
                    color="danger"
                  />
                </div>
                <div className="flex flex-row gap-3">
                  <RenderSizeAndColor
                    data={supportedPlane}
                    variant="dot"
                    title="Supported Plane"
                    color="success"
                  />
                </div>
              </div>
            }
          />
        </GridItem>
      </div>
      <PlacedSideBySide
        oneThird
        firstComponent={
          <GridItem
            title="Current Price"
            leftSideComponent={[
              <StyledDropdown
                key={"change plane to see price"}
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
                dropdownItems={plans as any}
                handleSelect={handleSelect}
                selectedKeys={""}
              />,
            ]}
          >
            <PriceCard currency="GHS" value={14.12} label="cedis" />
          </GridItem>
        }
        secondComponent={
          <GridItem
            title="Current Ratings"
            leftSideComponent={[
              <Chip
                key={"check"}
                startContent={<IoCheckmarkCircle />}
                variant="faded"
                color="warning"
              >
                Default
              </Chip>,
              <Chip
                key={"check"}
                startContent={<IoCheckmarkCircle />}
                variant="faded"
                color="success"
              >
                Renting
              </Chip>,
              <Chip
                key={"check"}
                startContent={<IoCheckmarkCircle />}
                variant="faded"
                color="warning"
              >
                Leasing
              </Chip>,
            ]}
          >
            <AddReview addReview={false} />
          </GridItem>
        }
      />
      <PlacedSideBySide
        oneThird
        reverse
        className="min-h-[400px]"
        firstComponent={
          <GridItem
            title="Total Sales"
            leftSideComponent={[
              <StyledDropdown
                key={"change plane to see total sales"}
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
                dropdownItems={plans as any}
                handleSelect={handleSelect}
                selectedKeys={""}
              />,
            ]}
          >
            <PriceCard currency="GHS" value={54.32} label="cedis" />
          </GridItem>
        }
        secondComponent={
          <GridItem
            title="Sales Chart"
            leftSideComponent={[
              <Chip
                key={"check"}
                startContent={<IoCheckmarkCircle />}
                variant="faded"
                color="warning"
              >
                Default
              </Chip>,
              <Chip
                key={"check"}
                startContent={<IoCheckmarkCircle />}
                variant="faded"
                color="success"
              >
                Renting
              </Chip>,
              <Chip
                key={"check"}
                startContent={<IoCheckmarkCircle />}
                variant="faded"
                color="warning"
              >
                Leasing
              </Chip>,
            ]}
          >
            <StyledLineChart data={chartData} />
          </GridItem>
        }
      />
      <PlacedSideBySide
        className="min-h-[400px]"
        firstComponent={
          <GridItem
            title="Pay as you go"
            leftSideComponent={[<Dot key={"dot"} active />]}
          >
            <AddPriceInfo type="default" />
          </GridItem>
        }
        secondComponent={
          <GridItem
            title="Lease"
            leftSideComponent={[<Dot key={"dot"} active />]}
          >
            <AddPriceInfo type="lease" />
          </GridItem>
        }
        thirdComponent={
          <GridItem title="Rent" leftSideComponent={[<Dot key={"dot"} />]}>
            <AddPriceInfo type="rent" />
          </GridItem>
        }
      />
      <PlacedSideBySide
        oneThird
        reverse
        className="min-h-[400px]"
        firstComponent={
          <GridItem
            title="Shipping fee"
            leftSideComponent={[
              <StyledDropdown
                key={"change plane to see Shipping fee"}
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
                dropdownItems={plans as any}
                handleSelect={handleSelect}
                selectedKeys={""}
              />,
            ]}
          >
            <PriceCard value={"FREE"} />
          </GridItem>
        }
        secondComponent={
          <GridItem
            title="Shipping options"
            leftSideComponent={[
              <Chip
                key={"check"}
                startContent={<IoCheckmarkCircle />}
                variant="faded"
                color="warning"
              >
                Default
              </Chip>,
              <Chip
                key={"check"}
                startContent={<IoCheckmarkCircle />}
                variant="faded"
                color="success"
              >
                Renting
              </Chip>,
              <Chip
                key={"check"}
                startContent={<IoCheckmarkCircle />}
                variant="faded"
                color="warning"
              >
                Leasing
              </Chip>,
            ]}
          ></GridItem>
        }
      />
      <PlacedSideBySide
        oneThird
        className="min-h-[400px]"
        firstComponent={
          <GridItem
            title="Customers"
            leftSideComponent={[
              <StyledDropdown
                key={"change plane to see customers"}
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
                dropdownItems={plans as any}
                handleSelect={handleSelect}
                selectedKeys={""}
              />,
            ]}
          >
            <StyledTable />
          </GridItem>
        }
        secondComponent={
          <GridItem
            title="Performance On The Market"
            leftSideComponent={[
              <Chip
                key={"check"}
                startContent={<IoCheckmarkCircle />}
                variant="faded"
                color="warning"
              >
                Default
              </Chip>,
              <Chip
                key={"check"}
                startContent={<IoCheckmarkCircle />}
                variant="faded"
                color="success"
              >
                Renting
              </Chip>,
              <Chip
                key={"check"}
                startContent={<IoCheckmarkCircle />}
                variant="faded"
                color="warning"
              >
                Leasing
              </Chip>,
            ]}
          >
            <StyledLineChart data={filterNameUVandPV(chartData)} />
          </GridItem>
        }
      />
    </div>
  );
}

const Dot = ({ active = false }) => (
  <div
    className={`h-4 w-4 rounded-full ${
      active ? "bg-secondary-500" : "bg-default-500"
    }`}
  />
);
