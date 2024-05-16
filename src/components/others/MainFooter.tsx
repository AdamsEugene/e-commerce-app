import Image from "next/image";
import React from "react";

export default function MainFooter() {
  const backgroundImages = [
    "/assets/images/image13.jpg",
    "/assets/images/image12.jpg",
    "/assets/images/image11.jpg",
    "/assets/images/image10.jpg",
    // ... add more image URLs
  ];

  return (
    <div className="flex justify-center items-center w-full mt-8">
      <div className="h-[34rem] w-full max-w-[1780px] relative overflow-hidden">
        <div className="absolute inset-0 z-10 bg-black dark:bg-opacity-80 bg-opacity-20"></div>
        <div className="w-full h-full flex flex-wrap">
          {backgroundImages.map((imageUrl, index) => (
            <div key={index} className="h-full w-[25%]">
              <Image
                src={imageUrl}
                alt={"bg image"}
                width={100}
                height={100}
                className="w-full h-full"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
        {/* Your content goes here */}
      </div>
    </div>
  );
}
