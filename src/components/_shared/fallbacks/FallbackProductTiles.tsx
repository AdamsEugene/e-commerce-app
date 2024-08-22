import { Card, Skeleton } from "@nextui-org/react";

export default function FallbackProductTiles() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center gap-4">
      {Array.from({ length: 4 }, (_, i) => i).map((_) => (
        <div
          key={_}
          className="mx-auto flex flex-col justify-center items-center gap-4 w-full"
        >
          <div className="grid xs:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-4 w-full">
            <div className={`col-span-3 xs:col-span-2 h-full`}>
              <Card className="w-full space-y-5 p-2" radius="lg">
                <Skeleton className="justify-between overflow-hidden py-1 before:rounded-xl rounded-large w-[calc(100%_-_2px)] shadow-small">
                  <div className="h-7 rounded-lg bg-default-300"></div>
                </Skeleton>
                <div
                  className={`grid xs:grid-cols-2 ${"md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3"} gap-4 w-full`}
                >
                  {Array.from({ length: 6 }, (_, i) => i).map((_) => (
                    <div key={_} className="flex flex-col gap-2">
                      <Skeleton className="rounded-lg">
                        <div className="h-36 rounded-lg bg-default-300"></div>
                      </Skeleton>
                      <div className="space-y-3 w-full flex items-center justify-center">
                        <Skeleton className="w-3/5 rounded-lg">
                          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                        </Skeleton>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
            <div className={`col-span-2 xs:col-span-2 h-full`}>
              <Card className="w-full space-y-5 p-2" radius="lg">
                <Skeleton className="justify-between overflow-hidden py-1 before:rounded-xl rounded-large w-[calc(100%_-_2px)] shadow-small">
                  <div className="h-7 rounded-lg bg-default-300"></div>
                </Skeleton>
                <div
                  className={`grid xs:grid-cols-2 ${"md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"} gap-4 w-full`}
                >
                  {Array.from({ length: 4 }, (_, i) => i).map((_) => (
                    <div key={_} className="flex flex-col gap-2">
                      <Skeleton className="rounded-lg">
                        <div className="h-36 rounded-lg bg-default-300"></div>
                      </Skeleton>
                      <div className="space-y-3 w-full flex items-center justify-center">
                        <Skeleton className="w-3/5 rounded-lg">
                          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                        </Skeleton>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
          <div className="grid xs:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-4 w-full">
            {Array.from({ length: 10 }, (_, i) => i).map((_) => (
              <Card
                key={_}
                className="product_image xs:w-full w-full xs:!h-[200px] !h-[280px] space-y-2 p-2"
                radius="lg"
              >
                <Skeleton className="rounded-lg">
                  <div className="h-56 rounded-lg bg-default-300"></div>
                </Skeleton>
                <div className="flex items-center justify-between gap-2">
                  <Skeleton className="w-3/5 rounded-lg">
                    <div className="h-8 w-3/5 rounded-lg bg-default-200"></div>
                  </Skeleton>
                  <Skeleton className="w-1/5 rounded-lg">
                    <div className="h-8 w-1/5 rounded-lg bg-default-200"></div>
                  </Skeleton>
                </div>
              </Card>
            ))}
          </div>
          <Card
            className="product_image xs:w-full w-full xs:!h-20 !h-36 p-2"
            radius="lg"
          >
            <Skeleton className="rounded-lg">
              <div className="h-36 rounded-lg bg-default-300"></div>
            </Skeleton>
          </Card>
        </div>
      ))}
    </div>
  );
}
