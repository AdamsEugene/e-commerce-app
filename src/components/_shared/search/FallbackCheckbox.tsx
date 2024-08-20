import { Skeleton } from "@nextui-org/react";

export default function FallbackCheckbox({ count = 3 }: { count?: number }) {
  return (
    <div className="w-full flex flex-col gap-8">
      {Array.from({ length: count }, (_, i) => i).map((_) => (
        <div key={_} className="w-full flex-col flex gap-2">
          <Skeleton className="h-3 w-3/5 rounded-lg" />
          <div className="w-full flex items-center gap-2">
            <Skeleton className="flex rounded-full w-5 h-5" />
            <Skeleton className="h-3 w-4/5 rounded-lg" />
          </div>
          <div className="w-full flex items-center gap-2">
            <Skeleton className="flex rounded-full w-5 h-5" />
            <Skeleton className="h-3 w-3/5 rounded-lg" />
          </div>
          <div className="w-full flex items-center gap-2">
            <Skeleton className="flex rounded-full w-5 h-5" />
            <Skeleton className="h-3 w-4/5 rounded-lg" />
          </div>
          <div className="w-full flex items-center gap-2">
            <Skeleton className="flex rounded-full w-5 h-5" />
            <Skeleton className="h-3 w-3/5 rounded-lg" />
          </div>
          <div className="w-full flex items-center gap-2">
            <Skeleton className="flex rounded-full w-5 h-5" />
            <Skeleton className="h-3 w-4/5 rounded-lg" />
          </div>
        </div>
      ))}
    </div>
  );
}
