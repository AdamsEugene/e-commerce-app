"use client";

import { Pagination } from "@nextui-org/react";
import { useRouter, useParams } from "next/navigation";
import ConditionalRender from "../Conditional/ConditionalRender";

type PROPS = {
  total: number;
  page: number;
};

export default function StyledPagination({ total, page = 1 }: PROPS) {
  const router = useRouter();
  const params = useParams<{ page: string }>();

  return (
    <ConditionalRender
      condition={!!params.page}
      Component={
        <div className="flex justify-center items-center w-full bg-default-50 fixed z-50 bottom-0">
          <div className="flex items-center gap-5 w-full justify-between max-w-[1780px]">
            <p className="text-small text-default-500">
              Selected Page: {params.page || 1}
            </p>
            <Pagination
              total={total}
              color="secondary"
              page={+params.page || 1}
              onChange={(page) => {
                router.push(`${page}`);
              }}
            />
          </div>
        </div>
      }
    />
  );
}
