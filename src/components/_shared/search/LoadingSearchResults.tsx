import { Skeleton } from "@nextui-org/react";

export default function LoadingSearchResults({
  count = 10,
  className
}: {
  count?: number;
  className?:string
}) {
  return (
    <div className={`flex flex-col gap-4 w-full ${className}`}>
      {Array.from({ length: count }, (_, i) => i).map((_) => (
        <div key={_} className="w-full flex items-center gap-3">
          <div>
            <Skeleton className="flex rounded-lg w-12 h-12" />
          </div>
          <div className="w-full flex flex-col gap-2">
            <Skeleton className="h-3 w-3/5 rounded-lg" />
            <div className="w-[90%] flex gap-2">
              <Skeleton className="h-3 w-4/5 rounded-lg" />
              <Skeleton className="h-3 w-1/5 rounded-lg" />
            </div>
          </div>
          <div className="w-12 flex flex-col gap-2">
            <Skeleton className="h-3 w-full rounded-lg" />
          </div>
        </div>
      ))}
    </div>
  );
}
