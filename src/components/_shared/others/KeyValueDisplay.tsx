"use client";

import React, { useState } from "react";
import { Button, Divider, Switch, cn } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";

export default function KeyValueDisplay() {
  const [showDetails, setShowDetails] = useState(false);

  const variants = {
    open: { height: "auto", opacity: 1 },
    closed: { height: 0, opacity: 0 },
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-4 w-full">
        <p className="min-w-[300px] text-xl font-bold">key</p>
        <div className="flex items-center justify-between w-full">
          <p className="text-end font-light">value</p>
          <div className="flex items-center gap-4">
            <Button
              variant="light"
              onClick={() => setShowDetails((prev) => !prev)}
            >
              {showDetails ? "Hide" : "Show"} details
            </Button>
            <StyledSwitch />
          </div>
        </div>
      </div>
      <Divider />
      <AnimatePresence>
        {showDetails && (
          <motion.div
            variants={variants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <p>descriptions</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const StyledSwitch = () => {
  return (
    <Switch
      color="secondary"
      classNames={{
        wrapper: "p-0 h-4 overflow-visible",
        thumb: cn(
          "w-6 h-6 border-2 shadow-lg",
          "group-data-[hover=true]:border-secondary",
          //selected
          "group-data-[selected=true]:ml-6",
          // pressed
          "group-data-[pressed=true]:w-7",
          "group-data-[selected]:group-data-[pressed]:ml-4"
        ),
      }}
    ></Switch>
  );
};
