import React from "react";
import { motion, useTransform } from "framer-motion";
import ConditionalRenderAB from "../Conditional/ConditionalRenderAB";

export default function CircularProgress({
  progress,
  path,
}: {
  progress: any;
  path: "pending" | "error" | "success";
}) {
  const circleLength = useTransform(progress, [0, 100], [0, 1]);
  const cancelPathLength = useTransform(progress, [0, 95, 100], [0, 0, 1]);
  const circleColor = useTransform(
    progress,
    [0, 95, 100],
    path === "success"
      ? ["#FFCC66", "#FFCC66", "#66BB66"]
      : ["#FFCC66", "#FFCC66", "#FF6666"]
  );

  const checkmarkPathLength = useTransform(progress, [0, 95, 100], [0, 0, 1]);

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="150"
      height="150"
      viewBox="0 0 258 258"
    >
      <ConditionalRenderAB
        condition={path === "success"}
        ComponentA={
          <motion.path
            transform="translate(60 85)"
            d="M3 50L45 92L134 3"
            fill="transparent"
            stroke="#7BB86F"
            strokeWidth={12}
            style={{ pathLength: checkmarkPathLength }}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }} // Add delay property
          />
        }
        ComponentB={
          <motion.path
            transform="translate(80 85)"
            d="M10 10L90 90M10 90L90 10"
            fill="transparent"
            stroke="#FF6666"
            strokeWidth={12}
            style={{ pathLength: cancelPathLength }}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }} // Add delay property
          />
        }
      />

      {/* Circle */}
      <motion.path
        d="M 130 6 C 198.483 6 254 61.517 254 130 C 254 198.483 198.483 254 130 254 C 61.517 254 6 198.483 6 130 C 6 61.517 61.517 6 130 6 Z"
        fill="transparent"
        strokeWidth="12"
        stroke={circleColor}
        style={{
          pathLength: circleLength,
        }}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }} // Add delay property
      />
    </motion.svg>
  );
}
