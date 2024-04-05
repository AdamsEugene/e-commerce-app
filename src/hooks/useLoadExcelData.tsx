"use client";

import { useState, useEffect, useCallback } from "react";
import { read, utils } from "xlsx";

interface MyDataInterface {
  [key: string]: string | number;
}

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

  const transformData = useCallback((arr: any[], points?: string[]) => {
    console.log(points, arr);

    const keys = arr[0];
    return arr.slice(1).map((obj) => {
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
          raw: false,
        });
        console.log(parsedData);

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

  // useEffect(() => {
  //   _startLoading && loadData();
  // }, [filePath, loadData, _startLoading]);

  const startLoading = (points?: string[]) => {
    setStartLoading(true);
    loadData(points);
  };

  return { data, isLoading, error, startLoading };
}

export default useLoadExcelData;
