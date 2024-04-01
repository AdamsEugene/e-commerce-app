"use client";

import React, { useEffect, useRef } from "react";
import Ratings from "./Ratings";
import StyledInput from "./_shared/StyledInput";
import StyledTextarea from "./_shared/StyledTextarea";
import StyledButton from "./_shared/StyledButton";
import StyledFileUpload from "./StyledFileUpload";
import { Divider } from "@nextui-org/react";

type PROPS = {
  isReviewVisible: boolean;
  cancelReview: () => void;
};

export default function ReviewForm(props: PROPS) {
  const { isReviewVisible, cancelReview } = props;

  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isReviewVisible && formRef.current) {
      // Scroll the form into view when isReviewVisible is true
      formRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  }, [isReviewVisible]);

  return (
    <>
      <div
        ref={formRef}
        className={`flex flex-col items-center gap-4 w-full overflow-hidden transition-all duration-500 ${
          isReviewVisible ? "opacity-100 visible" : "hidden opacity-0"
        }`}
      >
        <div className="w-full">
          <h3 className="text-3xl font-bold mb-4">Write a review</h3>
        </div>
        <p className="text-lg">Rating</p>
        <Ratings noComment size={4} initRating={5} isPressable />
        <div className="flex flex-col items-center gap-4 lg:w-[80%] md:w-[80%] sm:w-[90%]">
          <StyledInput
            label="Review Title"
            placeholder="Give your review a title"
            autoFocus
          />
          <StyledTextarea
            label="Review"
            placeholder="Write your comment here"
            minRows={8}
            maxRows={8}
          />
          <h4 className="text-lg font-bold">Picture/Video (optional)</h4>
          <StyledFileUpload />
          <StyledInput
            label="Name (displayed publicly like John Smith)"
            placeholder="Enter your name (public)"
          />
          <StyledInput label="Email" placeholder="Enter your email (private)" />
          <p className="text-base italic max-w-xl text-center">
            How we use your data: We’ll only contact you about the review you
            left, and only if necessary. By submitting your review, you agree to
            Judge.me’s terms and conditions and privacy policy.
          </p>
          <div className="flex gap-4">
            <StyledButton
              content="Cancel Review"
              variant="ghost"
              color="secondary"
              onClick={cancelReview}
            />
            <StyledButton content="Submit Review" color="secondary" />
          </div>
        </div>
        <Divider className="mt-6" />
      </div>
    </>
  );
}
