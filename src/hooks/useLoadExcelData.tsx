'use client'

import { useState, useEffect } from "react";
import { read, utils } from "xlsx";

interface MyDataInterface {
  // Define the structure of your expected data from the Excel sheet
  [key: string]: string | number; // Example: a key-value object with string or number values
}

function useLoadExcelData(filePath: string): {
  data: MyDataInterface[];
  isLoading: boolean;
  error: Error | null;
} {
  const [data, setData] = useState<MyDataInterface[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const f = await fetch(filePath);
        const ab = await f.arrayBuffer();
        const wb = read(ab);
        const ws = wb.Sheets[wb.SheetNames[0]];
        const parsedData = utils.sheet_to_json<MyDataInterface>(ws, {
          defval: undefined,
        });

        // Filter out rows where the key is "__EMPTY"
        const filteredData = parsedData.filter((row: MyDataInterface) =>
          Object.keys(row).some((key) => key !== "__EMPTY")
        );

        setData(filteredData);
      } catch (err: any) {
        console.error("Error fetching or parsing Excel data:", err);
        setError(err); // Handle error appropriately (e.g., display error message)
      } finally {
        setIsLoading(false);
      }
    })();
  }, [filePath]); // Re-run useEffect when filePath changes

  return { data, isLoading, error };
}

export default useLoadExcelData;
