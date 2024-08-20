import { Card, Skeleton } from "@nextui-org/react";

export default function FallbackBestSelling({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-3">
      {Array.from({ length: count }, (_, i) => i).map((_) => (
        <Card key={_} className="w-[160px] flex flex-col gap-2 p-1" radius="lg">
          <Skeleton className="rounded-lg">
            <div className="h-20 rounded-lg bg-default-300"></div>
          </Skeleton>
          <div className="flex gap-2">
            <Skeleton className="w-4/5 rounded-lg">
              <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-1/5 rounded-lg">
              <div className="h-3 w-1/5 rounded-lg bg-default-200"></div>
            </Skeleton>
          </div>
        </Card>
      ))}
    </div>
  );
}
