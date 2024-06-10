"use client";

import { useEffect, useRef, useState } from "react";
import { productVariants as productVariants } from "@/src/utils/productList";
import { Button, Chip } from "@nextui-org/react";
import { FaCircleCheck } from "react-icons/fa6";
import ConditionalRenderAB from "@/src/components/_shared/Conditional/ConditionalRenderAB";

export default function ProductVariant() {
  const [showAll, setShowAll] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("80px");
  const [selected, setSelected] = useState<number>();

  useEffect(() => {
    if (showAll) {
      setMaxHeight(`${(contentRef?.current?.scrollHeight || 0) + 300}px`);
    } else {
      setMaxHeight("80px");
    }
  }, [showAll]);

  const handleShowMore = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <p>Material: For 13 Pro Max</p>
        <Button variant="light" onClick={handleShowMore}>
          {showAll ? "Show Less" : "Show More"}
        </Button>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out`}
        style={{ maxHeight }}
      >
        <div className="flex gap-3 items-center flex-wrap">
          {productVariants.map((variant) => (
            <Chip
              startContent={
                <ConditionalRenderAB
                  condition={selected === variant.id}
                  ComponentA={<FaCircleCheck />}
                  ComponentB={""}
                />
              }
              color={selected === variant.id ? "secondary" : "default"}
              size="lg"
              variant="bordered"
              radius="sm"
              className="cursor-pointer"
              onClick={() => setSelected(variant.id)}
            >
              {variant.compatibility}
            </Chip>
          ))}
        </div>
      </div>
    </div>
  );
}
