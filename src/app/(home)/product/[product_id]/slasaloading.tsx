import React from "react";
import { Card, Skeleton, Divider } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="home flex w-[100vw] h-[100vh] py-16">
      <div className="flex main flex-col w-full gap-8 max-w-[1180px]">
        <div className="flex xs:flex-col w-full gap-12">
          <Card
            className="gallery_wrapper xs:w-full w-[500px] xs:h-[min(60vh,520px)] h-[min(60vh,600px)] space-y-5"
            radius="lg"
            shadow="none"
          >
            <Skeleton className="rounded-lg">
              <div className="xs:h-[min(60vh,520px)] h-[min(60vh,600px)] rounded-lg bg-default-300"></div>
            </Skeleton>
          </Card>
          <div className="w-[calc(100%-500px)]">
            <div className="space-y-3">
              <div className="flex gap-2">
                <Skeleton className="flex rounded-full w-8 h-8" />
                <Skeleton className="flex rounded-full w-8 h-8" />
                <Skeleton className="flex rounded-full w-8 h-8" />
                <Skeleton className="flex rounded-full w-8 h-8" />
                <Skeleton className="flex rounded-full w-8 h-8" />
              </div>
              <Skeleton className="h-7 w-3/5 rounded-lg" />
              <Skeleton className="w-[100%] rounded-lg">
                <div className="h-32 w-[100%] rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="h-7 w-[100%] rounded-lg" />
              <Skeleton className="w-[100%] rounded-lg">
                <div className="h-32 w-[100%] rounded-lg bg-default-300"></div>
              </Skeleton>
              <Divider />
              <Skeleton className="w-[100%] rounded-lg">
                <div className="h-14 w-[100%] rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-[100%] rounded-lg">
                <div className="h-14 w-[100%] rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-[100%] rounded-lg">
                <div className="h-14 w-[100%] rounded-lg bg-default-300"></div>
              </Skeleton>
              <Skeleton className="h-7 w-3/5 rounded-lg" />
              <div className="flex gap-2">
                <Skeleton className="w-[100%] rounded-lg">
                  <div className="h-14 w-[100%] rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-[100%] rounded-lg">
                  <div className="h-14 w-[100%] rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-[100%] rounded-lg">
                  <div className="h-14 w-[100%] rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-[100%] rounded-lg">
                  <div className="h-14 w-[100%] rounded-lg bg-default-200"></div>
                </Skeleton>
              </div>
            </div>
          </div>
        </div>
        <Skeleton className="w-[100%] rounded-lg">
          <div className="h-96 w-[100%] rounded-lg bg-default-200"></div>
        </Skeleton>
        <div className="flex items-center gap-4">
          <Skeleton className="w-[100%] rounded-lg">
            <div className="h-72 w-[100%] rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-[100%] rounded-lg">
            <div className="h-72 w-[100%] rounded-lg bg-default-200"></div>
          </Skeleton>
        </div>
        <div className="flex items-center gap-4">
          <Skeleton className="w-[100%] rounded-lg">
            <div className="h-72 w-[100%] rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-[100%] rounded-lg">
            <div className="h-72 w-[100%] rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-[100%] rounded-lg">
            <div className="h-72 w-[100%] rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-[100%] rounded-lg">
            <div className="h-72 w-[100%] rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-[100%] rounded-lg">
            <div className="h-72 w-[100%] rounded-lg bg-default-200"></div>
          </Skeleton>
        </div>
      </div>
    </div>
  );
}
