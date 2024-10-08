"use client";

import { useEffect, useRef, useState } from "react";
import {
  getProductVariant,
  productVariants as productVariants,
} from "@/src/utils/productList";
import { Button, Chip } from "@nextui-org/react";
import { FaCircleCheck } from "react-icons/fa6";
import ConditionalRenderAB from "@/src/components/_shared/Conditional/ConditionalRenderAB";
import { capitalizeFirstLetter } from "@/src/utils/functions";

type PROPS = {
  field: keyof (typeof productVariants)[number];
  label?: string;
};

export default function ProductVariant({ field, label }: PROPS) {
  const [showAll, setShowAll] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("80px");
  const [selected, setSelected] = useState<string>();
  const [shouldShowButton, setShouldShowButton] = useState(false);

  useEffect(() => {
    if (contentRef.current) {
      setShouldShowButton(contentRef.current.scrollHeight > 80);
    }
  }, []);

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
        <p>
          {label ? capitalizeFirstLetter(label) : capitalizeFirstLetter(field)}:{" "}
          {selected}
        </p>
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
        <div className="flex gap-3 items-center flex-wrap">
          {getProductVariant(field)?.map((variant) => (
            <Chip
              key={String(variant)}
              startContent={
                <ConditionalRenderAB
                  condition={selected === variant}
                  ComponentA={<FaCircleCheck />}
                  ComponentB={""}
                />
              }
              color={selected === variant ? "secondary" : "default"}
              size="lg"
              variant="bordered"
              radius="sm"
              className="cursor-pointer"
              onClick={() => setSelected(String(variant))}
            >
              {variant}
            </Chip>
          ))}
        </div>
      </div>
    </div>
  );
}
