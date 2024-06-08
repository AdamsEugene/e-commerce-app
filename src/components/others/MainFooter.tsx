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
    <footer className="flex justify-center items-center w-full">
      <div className="h-[544px] w-full xs:max-h-full max-w-[1780px] relative overflow-hidden">
        <div className="absolute inset-0 z-10 bg-black dark:bg-opacity-80 bg-opacity-20"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 h-full">
          {backgroundImages.map((imageUrl, index) => (
            <div key={index} className="xs:h-[272px] h-full w-full">
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
    </footer>
  );
}
