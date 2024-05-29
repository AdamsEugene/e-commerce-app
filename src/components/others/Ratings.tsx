"use client";

import { useState } from "react";
import { IoStar, IoStarHalf } from "react-icons/io5";
import { IoMdStarOutline } from "react-icons/io";

type PROPS = {
  rating?: number;
  initRating?: number;
  numberOfReviews?: number;
  noComment?: boolean;
  isPressable?: boolean;
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  col?: boolean;
  className?: string;
};

export default function Ratings(props: PROPS) {
  const {
    numberOfReviews,
    rating = 0,
    noComment,
    isPressable,
    size,
    initRating = 0,
    col = false,
    className,
  } = props;
  const starRating = rating || initRating;

  const [hoveredStar, setHoveredStar] = useState<number>(5);
  const [selectedStar, setSelectedStar] = useState<number>(5);

  // Function to handle star hover
  const handleStarHover = (index: number) => {
    setHoveredStar(index);
  };

  // Function to handle star leave
  const handleStarLeave = () => {
    setHoveredStar(selectedStar);
  };

  // Function to generate star icons based on the rating
  const generateStars = () => {
    const stars = [];
    const fullStars = Math.floor(starRating || 0); // Number of full stars
    const hasHalfStar = starRating % 1 !== 0; // Check if there's a half star

    // Generate full star icons
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <IoStar
          key={i}
          className={`text-${size || 2}xl ${
            isPressable
              ? i >= hoveredStar
                ? "hover:text-gray-500 text-gray-500"
                : " cursor-pointer text-yellow-500"
              : "text-yellow-500"
          } ${className} `}
          onMouseEnter={() =>
            isPressable ? handleStarHover(i + 1) : undefined
          }
          onMouseLeave={isPressable ? handleStarLeave : undefined}
          onClick={() => (isPressable ? setSelectedStar(i + 1) : undefined)}
        />
      );
    }

    // Generate half star icon if needed
    if (hasHalfStar) {
      stars.push(
        <IoStarHalf
          key="half"
          className={`text-${size || 2}xl ${
            isPressable
              ? hoveredStar >= fullStars
                ? "hover:text-gray-500 text-gray-500"
                : " cursor-pointer text-yellow-500"
              : "text-yellow-500"
          } ${className}`}
          onMouseEnter={() =>
            isPressable ? handleStarHover(fullStars + 1) : undefined
          }
          onMouseLeave={isPressable ? handleStarLeave : undefined}
        />
      );
    }

    // Fill the rest with outline stars
    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <IoMdStarOutline
          key={`outline-${i}`}
          className={`text-${size || 2}xl ${
            isPressable
              ? i + fullStars >= hoveredStar
                ? "hover:text-gray-500 text-gray-500"
                : " cursor-pointer text-yellow-500"
              : "text-yellow-500"
          } ${className}`}
          onMouseEnter={() =>
            isPressable ? handleStarHover(i + fullStars + 1) : undefined
          }
          onMouseLeave={isPressable ? handleStarLeave : undefined}
        />
      );
    }

    return stars;
  };

  return (
    <div className={`flex items-center ${col ? "flex-col gap-2" : "flex-row"}`}>
      <div className={`flex ${isPressable ? "cursor-pointer" : ""}`}>
        {generateStars()}
      </div>
      {!noComment ? (
        numberOfReviews ? (
          <p className="ml-2 text-gray-600">{numberOfReviews || 0} Reviews</p>
        ) : (
          <p className="ml-2 text-gray-600">{starRating || 0} out of 5</p>
        )
      ) : (
        ""
      )}
    </div>
  );
}
