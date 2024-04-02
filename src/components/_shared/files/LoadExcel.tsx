"use client";

import React from "react";
import useLoadExcelData from "@/src/hooks/useLoadExcelData";

interface President {
  // Replace with your actual data structure if fetching presidents' data
  id: number;
  name: string;
}

function LoadExcel() {
  const { data, isLoading, error } = useLoadExcelData(
    "https://docs.google.com/spreadsheets/d/1JtlsJtL04X8bytqpKJ1UAV4uveup5br2PE8PrKKXU5E/edit#gid=0"
  );

  console.log(data);

  if (isLoading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>; // Handle error display
  }

  return <div>Use the fetched data here</div>;
}

export default LoadExcel;
