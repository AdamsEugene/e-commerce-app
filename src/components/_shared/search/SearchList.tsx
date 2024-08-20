import React from "react";
import { Avatar, Listbox, ListboxItem } from "@nextui-org/react";
import { TProduct } from "@/src/types";
import Ratings from "../../others/Ratings";
import StyledImage from "../Styled/StyledImage";
import ConditionalRenderAB from "../Conditional/ConditionalRenderAB";

type PROPS = {
  deferredValue: string;
  searchResults?: TProduct[];
  myRef: (node?: Element | null | undefined) => void;
};

export default function SearchList({
  searchResults,
  deferredValue,
  myRef,
}: PROPS) {
  const formattedData = searchResults?.map((product, index) => ({
    ...product,
    key: index,
    label: product.title,
  }));

  if (!formattedData) return;

  return (
    <Listbox
      items={formattedData}
      aria-label="User Menu"
      emptyContent={
        <div className="w-full h-full flex items-center justify-center flex-col lg:h-[620px] gap-4">
          <StyledImage
            src="/assets/svgs/empty.svg"
            alt=" Couldn't find any match"
            height={320}
            width={300}
          />
          <p className="text-lg font-semibold text-gray-600">
            Couldn't find any match for "{deferredValue}" try something else
          </p>
        </div>
      }
      onAction={(key) => alert(key)}
      className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 overflow-visible rounded-medium"
      itemClasses={{
        base: "px-3 first:rounded-t-medium last:rounded-b-medium gap-3 h-16 xs:p-0",
        wrapper: "flex flex-col gap-4",
      }}
    >
      {(product) => (
        <ListboxItem
          key={product.id}
          endContent={
            <span className="text-small text-default-400">
              ${product.price}
            </span>
          }
          startContent={
            <Avatar
              alt={product.title}
              className="flex-shrink-0 bg-transparent"
              size="lg"
              radius="sm"
              src={product.thumbnail}
            />
          }
          textValue={product.title}
        >
          <div className="flex flex-col gap-1 w-max">
            <span>{product.title}</span>
            <div className="px-2 py-1 rounded-small bg-default-100 group-data-[hover=true]:bg-default-200 max-w-[33rem]">
              <div className="flex gap-2 text-tiny">
                <ConditionalRenderAB
                  condition={product.key + 4 === searchResults?.length}
                  ComponentA={
                    <span ref={myRef} className="text-default-500 truncate">
                      {product.description}
                    </span>
                  }
                  ComponentB={
                    <span className="text-default-500 truncate">
                      {product.description}
                    </span>
                  }
                />

                {/* {product.tags.map((tag) => (
                  <span key={tag} className="text-success">
                    {tag}
                  </span>
                ))} */}
                <Ratings rating={product.rating} size={1} noComment />
              </div>
            </div>
          </div>
        </ListboxItem>
      )}
    </Listbox>
  );
}
