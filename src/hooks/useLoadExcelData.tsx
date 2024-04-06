"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { read, utils } from "xlsx";
import { siteConfig } from "../config/site";
import useIndexedDB from "./useIndexedDB";
const {
  stores: { excelData },
} = siteConfig;

interface MyDataInterface {
  name: string;
  description: string;
  price: string;
  stock: number;
  active: boolean;
  categories: string;
  images: string[];
  brand: string;
  sku: string;
  lowStockThreshold: string;
  variants: string;
  slug: string;
  metaDescription: string;
  weight: number;
  dimensions: string;
  size: number;
  colors: string[];
  [key: string]: string | number | boolean | string[];
}

const requiredKeys = [
  "name",
  "description",
  "price",
  "stock",
  "categories",
  "brand",
  "sku",
  "active",
];

function useLoadExcelData(filePath: string): {
  data: MyDataInterface[];
  isLoading: boolean;
  error: Error | null;
  startLoading: (points?: string[]) => void;
} {
  const [data, setData] = useState<MyDataInterface[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [_startLoading, setStartLoading] = useState(false);

  const { loading, setValueInDB } = useIndexedDB<string>(excelData);

  const index = useRef(0);

  const transformData = useCallback((arr: any[], points = requiredKeys) => {
    const firstMatchingObj = arr.find((obj, indx) => {
      index.current = indx;
      return (
        Object.values(obj).filter((value: any) => points.includes(value))
          .length >= 4
      );
    });

    const keys = firstMatchingObj;
    return arr.slice(index.current + 1).map((obj) => {
      const newObj: any = {};
      for (const key in obj) {
        if (key !== "__EMPTY" && keys.hasOwnProperty(key)) {
          newObj[keys[key] || key] = obj[key];
        }
      }
      return newObj;
    });
  }, []);

  const loadData = useCallback(
    async (points?: string[]) => {
      console.log("loading...");
      try {
        setIsLoading(true);
        const f = await fetch(filePath);
        const ab = await f.arrayBuffer();
        const wb = read(ab);

        const ws = wb.Sheets[wb.SheetNames[0]];
        const parsedData = utils.sheet_to_json<MyDataInterface>(ws, {
          defval: undefined,
          blankrows: false,
          skipHidden: true,
          // raw: false,
          // header: points,
        });
        const filteredData = parsedData.filter((row: MyDataInterface) =>
          Object.keys(row).some((key) => key !== "__EMPTY")
        );

        setData(transformData(filteredData, points));
      } catch (err: any) {
        console.error("Error fetching or parsing Excel data:", err);
        setError(err);
      } finally {
        setStartLoading(false);
        setIsLoading(false);
      }
    },
    [filePath, transformData]
  );

  useEffect(() => {
    data && setValueInDB(JSON.stringify({ data }));
  }, [data, setValueInDB]);

  const startLoading = (points?: string[]) => {
    setStartLoading(true);
    loadData(points);
    console.log(data);
  };

  return { data, isLoading, error, startLoading };
}

export default useLoadExcelData;
