import { Skeleton } from "@nextui-org/react";
import React from "react";

export default function FallbackItemInCart() {
  return (
    <div className="w-full flex gap-3">
      <div>
        <Skeleton className="flex rounded-sm w-20 h-12" />
      </div>
      <div className="w-full flex flex-col gap-2">
        <Skeleton className="h-3 w-3/5 rounded-lg" />
        <Skeleton className="h-3 w-4/5 rounded-lg" />
        <div className="w-full flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <Skeleton className="h-3 w-1/5 rounded-lg" />
            <Skeleton className="h-7 w-3/5 rounded-lg" />
            <Skeleton className="h-3 w-1/5 rounded-lg" />
          </div>
          <div className="flex items-center gap-3">
            <Skeleton className="h-3 w-1/5 rounded-lg" />
            <Skeleton className="h-7 w-3/5 rounded-lg" />
            <Skeleton className="h-3 w-1/5 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
