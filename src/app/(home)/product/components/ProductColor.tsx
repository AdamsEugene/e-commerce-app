"use client";

import { useEffect, useRef, useState } from "react";
import { getProductColors } from "@/src/utils/productList";
import { Button, Card, CardBody } from "@nextui-org/react";
import StyledImage from "@/src/components/_shared/Styled/StyledImage";
import imageByIndex from "@/src/utils/imageByIndex";
import ConditionalRenderAB from "@/src/components/_shared/Conditional/ConditionalRenderAB";

export default function ProductColor() {
  const [showAll, setShowAll] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("90px");
  const [selected, setSelected] = useState<string>();
  const [shouldShowButton, setShouldShowButton] = useState(false);

  useEffect(() => {
    if (contentRef.current) {
      setShouldShowButton(contentRef.current.scrollHeight > 80);
    }
  }, []);

  useEffect(() => {
    if (showAll) {
      setMaxHeight(`${(contentRef?.current?.scrollHeight || 0) + 500}px`);
    } else {
      setMaxHeight("90px");
    }
  }, [showAll]);

  const handleShowMore = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <p>Color: {selected}</p>
        <ConditionalRenderAB
          condition={shouldShowButton}
          ComponentA={
            <Button variant="light" onClick={handleShowMore}>
              {showAll ? "Show Less" : "Show More"}
            </Button>
          }
          ComponentB={null}
        />
      </div>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-500 ease-in-out`}
        style={{ maxHeight }}
      >
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 gap-2">
          {getProductColors(1)?.map((color, index) => (
            <Card
              shadow="none"
              key={index}
              isPressable
              onClick={() => {
                setSelected(color);
              }}
              className={`h-full w-full border-4 transition-border duration-500 ease-in-out ${
                color === selected ? "border-secondary" : "border-transparent"
              }`}
            >
              <CardBody className="overflow-visible p-0 h-full">
                <StyledImage
                  shadow="none"
                  radius="lg"
                  width={300}
                  height={300}
                  alt={color}
                  className="object-cover product_image xs:w-full !w-full !h-[82px]"
                  src={imageByIndex(index)}
                  isZoomed
                />
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
