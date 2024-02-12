import { useCallback, useEffect, useRef, useState } from "react";
import productList, { PRODUCTS } from "@/utils/productList";

const useResizeListener = (divisor: number, numberOfItems: number) => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState<number>(0);
  const [adjustedWidth, setAdjustedWidth] = useState<number>(5);
  const [products, setProducts] = useState<PRODUCTS[][]>([]);

  const updateProducts = useCallback(
    (newWidth: number) => {
      const newProducts: PRODUCTS[][] = [];

      for (let i = 0; i <= numberOfItems / newWidth; i++) {
        newProducts.push(
          productList.slice(i * newWidth, i * newWidth + newWidth)
        );
      }

      setProducts(newProducts);
    },
    [numberOfItems]
  );

  useEffect(() => {
    const handleResize = () => {
      if (elementRef.current) {
        const newWidth = elementRef.current.clientWidth;
        setWidth(newWidth);
        setAdjustedWidth(newWidth / divisor);
        updateProducts(Math.floor(newWidth / divisor));
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);

    if (elementRef.current) {
      resizeObserver.observe(elementRef.current);
      // Initial width
      handleResize();
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [divisor, updateProducts]);

  return {
    ref: elementRef,
    width,
    adjustedWidth: Math.floor(adjustedWidth),
    products,
  };
};

export default useResizeListener;
