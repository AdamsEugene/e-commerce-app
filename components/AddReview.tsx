"use client";

import React, { useState } from "react";
import { Divider, Progress } from "@nextui-org/react";
import StyledButton from "./StyledButton";
import Ratings from "./Ratings";
import StyledInput from "./StyledInput";
import StyledTextarea from "./StyledTextarea";
import ReviewForm from "./ReviewForm";

interface ReviewSectionProps {
  rating: number;
  progressValue: number;
  reviewCount: number;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({
  rating,
  progressValue,
  reviewCount,
}) => {
  return (
    <div className="flex flex-col items-center mb-4">
      <Ratings rating={rating} noComment />
      <Progress
        color="warning"
        aria-label="Loading..."
        value={progressValue}
        className="w-full mt-2"
      />
      <p className="text-sm text-gray-500 mt-2">{reviewCount} reviews</p>
    </div>
  );
};

export default function AddReview() {
  const [isReviewVisible, setReviewVisible] = useState(false);

  const reviewSections: ReviewSectionProps[] = [
    { rating: 5, progressValue: 98, reviewCount: 3218 },
    { rating: 4, progressValue: 80, reviewCount: 1000 },
    { rating: 3, progressValue: 60, reviewCount: 987 },
    { rating: 2, progressValue: 40, reviewCount: 432 },
    { rating: 1, progressValue: 20, reviewCount: 132 },
  ];

  const cancelReview = () => {
    setReviewVisible(false);
  };

  return (
    <>
      <div className="flex justify-evenly lg:flex-row lg:w-full sm:flex-col sm:w-[90%]">
        <div className="flex flex-col flex-1 justify-center items-center w-full">
          <div className="flex flex-col gap-3 sm:mb-4 sm:items-center">
            <Ratings rating={4.5} />
            <p className="text-sm text-gray-500 mt-2">Based on 1441 reviews</p>
          </div>
        </div>
        <Divider orientation="vertical" className="mx-4" />
        <div className="flex flex-col flex-1 justify-center items-center w-full">
          <div className="w-full">
            {reviewSections.map((section, index) => (
              <ReviewSection
                key={index}
                rating={section.rating}
                progressValue={section.progressValue}
                reviewCount={section.reviewCount}
              />
            ))}
          </div>
        </div>
        <Divider orientation="vertical" className="mx-4" />
        <div className="flex flex-col flex-1 justify-center items-center w-full">
          {/* Button to toggle visibility of the review input section */}
          <StyledButton
            content="Write a Review"
            className="w-60"
            color="secondary"
            onClick={() => setReviewVisible(!isReviewVisible)}
          />
        </div>
      </div>
      <Divider />
      <ReviewForm
        isReviewVisible={isReviewVisible}
        cancelReview={cancelReview}
      />
      {/* Review input section */}
    </>
  );
}
