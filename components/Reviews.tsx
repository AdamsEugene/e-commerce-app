"use client";

import { Avatar, Button, Card, Divider } from "@nextui-org/react";
import React, { useEffect, useRef, useState } from "react";
import { Pagination } from "@nextui-org/react";
import { FiSearch } from "react-icons/fi";
import Ratings from "./Ratings";
import reviewData from "@/utils/reviews";
import StyledInput from "./StyledInput";
import StyledDropdown from "./Dropdown";

type ReviewProps = {
  rating: number;
  date: string;
  userImg: string;
  userName: string;
  verified: boolean;
  reviewTitle: string;
  review: string;
};

function Reviews(props: ReviewProps) {
  const { date, rating, review, reviewTitle, userImg, userName, verified } =
    props;

  const [showReadMore, setShowReadMore] = useState(false);
  const [showFullContent, setShowFullContent] = useState(false);
  const reviewRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (reviewRef.current) {
      const lineHeight = parseInt(
        window.getComputedStyle(reviewRef.current).lineHeight
      );
      const maxHeight = 4 * lineHeight;

      if (reviewRef.current.clientHeight > maxHeight) {
        setShowReadMore(true);
      }
    }
  }, [review]);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <>
      <Divider className="my-4" />
      <Card className="p-6 rounded-lg shadow-md w-full">
        <div className="flex items-center justify-between space-x-4 pt-4">
          <Ratings noComment rating={rating} />
          <p className="text-gray-500">{date}</p>
        </div>
        <div className="flex items-center space-x-4 mt-4">
          <Avatar isBordered radius="sm" src={userImg} />
          <div>
            <p className="font-bold text-lg">{userName}</p>
            <span className={`text-${verified ? "green" : "red"}-500`}>
              {verified ? "Verified" : "Not Verified"}
            </span>
          </div>
        </div>
        <p className="font-bold text-xl mt-4">{reviewTitle}</p>
        <p
          ref={reviewRef}
          className={`text-gray-500 mt-2 overflow-hidden ${
            showReadMore
              ? showFullContent
                ? "max-h-none"
                : "max-h-[100%]"
              : "max-h-none"
          } line-clamp-4`}
        >
          {review}
        </p>
        {showReadMore && (
          <span
            className="text-blue-500 underline mt-2 cursor-pointer"
            onClick={toggleContent}
          >
            {showFullContent ? "Show Less" : "Read More"}
          </span>
        )}
      </Card>
    </>
  );
}

const languages = [
  { key: "english", label: "English" },
  { key: "french", label: "French" },
];

export default function ReviewList() {
  const [selectedKeys, setSelectedKeys] = useState<string>("english");

  const handleSelect = (key: any) => {
    setSelectedKeys(key);
  };

  return (
    <div className="space-y-6 flex flex-col items-center">
      <div className="flex w-[80%]">
        <div className="w-[80%] p-4">
          <StyledInput
            placeholder="Search for a review"
            iconStart
            both
            Icon={FiSearch}
          />
        </div>
        <div className="w-[20%] p-4 ml-4">
          <StyledDropdown
            Trigger={
              <Button
                variant="solid"
                color="secondary"
                className="capitalize"
                fullWidth
              >
                {selectedKeys}
              </Button>
            }
            dropdownItems={languages}
            handleSelect={handleSelect}
            selectedKeys={selectedKeys}
          />
        </div>
      </div>

      {reviewData.map((review, index) => (
        <Reviews key={index} {...review} />
      ))}
      <Pagination showControls total={10} initialPage={1} color="secondary" />
    </div>
  );
}
