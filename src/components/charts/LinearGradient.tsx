import React from "react";

export default function LinearGradient() {
  return (
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#9454D4" stopOpacity={0.8} />
      <stop offset="95%" stopColor="#9454D4" stopOpacity={0} />
    </linearGradient>
  );
}
