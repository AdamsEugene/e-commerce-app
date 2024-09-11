"use client";

import { useState, useEffect } from "react";

type ScreenSize = "xs" | "sm" | "md" | "lg" | "xl";

const useScreenSize = (): ScreenSize => {
  const [screenSize, setScreenSize] = useState<ScreenSize>(() => {
    // Initial screen size based on window width

    const width = window.innerWidth || 1200;
    if (width < 576) return "xs"; // Extra small devices (phones)
    if (width < 768) return "sm"; // Small devices (tablets)
    if (width < 992) return "md"; // Medium devices (small laptops)
    if (width < 1200) return "lg"; // Large devices (desktops)
    return "xl"; // Extra large devices (large desktops)
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 576) setScreenSize("xs");
      else if (width < 768) setScreenSize("sm");
      else if (width < 992) setScreenSize("md");
      else if (width < 1200) setScreenSize("lg");
      else setScreenSize("xl");
    };

    // Add event listener for window resize
    if (window) window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => {
      if (window) window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
