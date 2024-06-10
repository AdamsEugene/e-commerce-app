"use client";

import { productSpecifications } from "@/src/utils/productList";
import { Button } from "@nextui-org/button";
import React, { useState, useRef, useEffect } from "react";
import ConditionalRender from "../_shared/Conditional/ConditionalRender";

export default function Specifications() {
  const [showAll, setShowAll] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("180px");
  const [shouldShowButton, setShouldShowButton] = useState(false);

  useEffect(() => {
    if (contentRef.current) {
      setShouldShowButton(contentRef.current.scrollHeight > 180);
    }
  }, []);

  useEffect(() => {
    if (showAll) {
      setMaxHeight(`${(contentRef?.current?.scrollHeight || 0) + 300}px`);
    } else {
      setMaxHeight("180px");
    }
  }, [showAll]);

  const handleShowMore = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="w-full">
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out`}
        style={{ maxHeight }}
      >
        <ConditionalRender
          condition={showAll && shouldShowButton}
          Component={
            <div className="flex justify-end mb-4">
              <Button variant="light" onClick={handleShowMore}>
                {showAll ? "Show Less" : "Show More"}
              </Button>
            </div>
          }
        />
        <div
          ref={contentRef}
          className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-3 gap-y-1"
        >
          {productSpecifications.map((specification, index) => (
            <div key={index} className="grid grid-cols-5 gap-0">
              <div className="col-span-2 bg-default-50 border border-default-50 p-4">
                {specification.name}
              </div>
              <div className="col-span-3 bg-default-100 border border-default-50 p-4">
                {specification.value}
              </div>
            </div>
          ))}
        </div>
      </div>
      <ConditionalRender
        condition={shouldShowButton}
        Component={
          <div className="flex justify-end mb-4">
            <Button variant="light" onClick={handleShowMore}>
              {showAll ? "Show Less" : "Show More"}
            </Button>
          </div>
        }
      />
    </div>
  );
}
