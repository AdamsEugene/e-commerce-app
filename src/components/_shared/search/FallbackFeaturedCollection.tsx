import { Card, Skeleton } from "@nextui-org/react";

export default function FallbackFeaturedCollection({
  onOpenChange,
  count = 8,
}: {
  count?: number;
  onOpenChange?: () => void;
}) {
  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-${
        onOpenChange ? 4 : 5
      } md:grid-cols-${onOpenChange ? 4 : 5} lg:grid-cols-${
        onOpenChange ? 4 : 5
      } xl:grid-cols-${onOpenChange ? 4 : 5} gap-${onOpenChange ? 3 : 4}`}
    >
      {Array.from({ length: count }, (_, i) => i).map((_) => (
        <Card
          key={_}
          className="w-[178px] h-[192px] space-y-5 p-0 relative"
          radius="lg"
        >
          <Skeleton className="rounded-lg">
            <div className="h-[192px] rounded-lg bg-default-300"></div>
          </Skeleton>
          <div className="space-y-3 absolute bg-default-50 z-10 bottom-0 h-12 w-full flex items-center justify-center">
            <Skeleton className="w-4/5 rounded-lg">
              <div className="h-8 w-4/5 rounded-lg bg-default-200"></div>
            </Skeleton>
          </div>
        </Card>
      ))}
    </div>
  );
}
