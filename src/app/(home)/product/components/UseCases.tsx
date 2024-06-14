"use client";

import VideoPlayer from "@/src/components/_shared/Styled/VideoPlayer";
import React from "react";

export default function UseCases() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
      <div>
        <VideoPlayer />
      </div>
      <div>UseCases</div>
      <div>UseCases</div>
      <div>
        <VideoPlayer />
      </div>
    </div>
  );
}
