import { useEffect, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";

type UrlChangeCallback = (url?: string) => void;

export function useUrlChangeListener(callback?: UrlChangeCallback) {
  const pathname = usePathname();
  const previousPathnameRef = useRef<string | null>(null);
  const isInitialRender = useRef(true);

  const handleRouteChange = useCallback(
    (url: string) => {
      if (!isInitialRender.current && previousPathnameRef.current !== url) {
        callback && callback(url);
      }
      previousPathnameRef.current = url;
      isInitialRender.current = false;
    },
    [callback]
  );

  useEffect(() => {
    handleRouteChange(pathname);
  }, [pathname, handleRouteChange]);
}
