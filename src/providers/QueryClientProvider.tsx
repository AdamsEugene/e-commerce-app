import {
  QueryClient,
  QueryClientProvider as Provider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useAppStore } from "./AppStoreProvider";
import { PropsWithChildren, useEffect } from "react";

export default function QueryClientProvider({ children }: PropsWithChildren) {
  const queryClient = new QueryClient();
  const setQueryClient = useAppStore((state) => state.setQueryClient);

  useEffect(() => {
    queryClient && setQueryClient(queryClient);
  }, []);

  return (
    <Provider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </Provider>
  );
}
