import { fetchProducts } from "@/src/api/apiCalles";
import CustomSuspense from "@/src/components/_shared/Conditional/CustomSuspense";
import MyStopwatch from "@/src/components/_shared/others/MyStopwatch";
import FallbackBestSelling from "@/src/components/_shared/search/FallbackBestSelling";
import ProductGallery from "@/src/components/_shared/swiper/ProductGallery";
import { useCountdown } from "@/src/hooks/useCountdown";
import useScreenSize from "@/src/hooks/useScreenSize";
import { useAppStore } from "@/src/providers/AppStoreProvider";
import { TFetchedProduct } from "@/src/types";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";

type PROPS = {
  index: number;
};

const fiveDaysInMillis = 5 * 24 * 60 * 60 * 1000; // 5 days in milliseconds

export default function Promotions({ index }: PROPS) {
  const queryClient = useAppStore((state) => state.queryClient);
  const screenSize = useScreenSize();

  const { data: bestSelling, isFetching: isFetchingBestSelling } = useQuery({
    queryKey: ["bestSelling"],
    queryFn: () => {
      return fetchProducts({ limit: 20, skip: 60 });
    },
    staleTime: Infinity,
    initialData: () =>
      queryClient?.getQueryData<TFetchedProduct>(["bestSelling"]),
    initialDataUpdatedAt: () =>
      queryClient?.getQueryState(["bestSelling"])?.dataUpdatedAt,
  });

  const { CountdownComponent, isCompleted } = useCountdown({
    date: Date.now() + fiveDaysInMillis,
    onComplete: () => console.log("done"),
  });

  return (
    <Card
      shadow="sm"
      className={`h-full ${index % 2 === 0 ? "bg-lime-500" : "bg-teal-500"} `}
      fullWidth
    >
      <div className="absolute inset-0 bg-default-50 bg-opacity-80 flex flex-col items-center justify-center text-center rounded-lg" />
      <CardHeader
        className={`${index % 2 === 0 ? "bg-lime-500" : "bg-teal-500"}  justify-between before:bg-white/10 overflow-hidden py-1 before:rounded-xl rounded-large w-[calc(100%_-_8px)] shadow-small ml-1 z-10`}
      >
        <div className="flex items-center justify-between w-full">
          <p className="text-lg font-semibold max-w-[70%] truncate">hello</p>
          <CountdownComponent />
          {isCompleted && <p>The countdown has completed.</p>}
          <MyStopwatch />
        </div>
      </CardHeader>
      <CardBody>
        <CustomSuspense
          condition={!!bestSelling}
          fallback={<FallbackBestSelling count={6} />}
        >
          <ProductGallery
            bestSelling={bestSelling?.products}
            slidesPerView={screenSize === "xs" ? 2 : 6}
            // autoplay={false}
            forHome
            textColor={index % 2 === 0 ? "lime" : "teal"}
          />
        </CustomSuspense>
      </CardBody>
    </Card>
  );
}
