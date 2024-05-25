"use client";

import React, { useState } from "react";
import { Divider, Progress } from "@nextui-org/react";
import StyledButton from "../_shared/Styled/StyledButton";
import Ratings from "./Ratings";
import ReviewForm from "./ReviewForm";
import ConditionalRender from "../_shared/Conditional/ConditionalRender";

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
    <div className="flex items-center gap-3 mt-3">
      <Ratings rating={rating} noComment />
      <Progress
        color="warning"
        aria-label="Loading..."
        value={progressValue}
        className="w-[80%]"
      />
      <p className="text-lg text-gray-500 w-48">{reviewCount} reviews</p>
    </div>
  );
};

export default function AddReview({ addReview = true }) {
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
      <div
        className={`flex justify-evenly lg:flex-row lg:w-full xs:flex-col xs:w-full ${
          !addReview ? "!flex-col" : ""
        }`}
      >
        <div
          className={`flex flex-col justify-center items-center xs:flex-row xs:w-full ${
            !addReview ? "" : "w-[25%]"
          }`}
        >
          <div className="flex flex-col gap-3 sm:mb-4 xs:items-center">
            <Ratings rating={4.5} col={!addReview} />
            <p className="text-sm text-gray-500 mt-2">Based on 1441 reviews</p>
          </div>
        </div>
        {/* <Divider orientation="vertical" className="mx-4" /> */}
        <div
          className={`flex flex-col justify-center items-center xs:w-full w-[${
            addReview ? "50%" : "100%"
          }]`}
        >
          <div className={`${!addReview ? "w-full" : "xs:w-full w-[560px]"}`}>
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
        {/* <Divider orientation="vertical" className="mx-4" /> */}
        <ConditionalRender
          condition={addReview}
          Component={
            <div className="flex flex-col justify-center items-center xs:w-full w-[25%]">
              <StyledButton
                content="Write a Review"
                className="w-60"
                color="secondary"
                onClick={() => setReviewVisible(!isReviewVisible)}
              />
            </div>
          }
        />
      </div>
      <ConditionalRender
        condition={addReview}
        Component={
          <>
            <Divider />
            <ReviewForm
              isReviewVisible={isReviewVisible}
              cancelReview={cancelReview}
            />
          </>
        }
      />
    </>
  );
}
