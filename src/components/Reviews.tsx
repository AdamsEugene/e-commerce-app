"use client";

import { useDeferredValue, useEffect, useMemo, useRef, useState } from "react";
import { Avatar, Card, Divider, Pagination, Button } from "@nextui-org/react";
import { FiSearch } from "react-icons/fi";
import useKeyboardShortcut from "use-keyboard-shortcut";

import StyledInput from "./StyledInput";
import StyledDropdown from "./Dropdown";
import reviewData from "@/src/utils/reviews";
import Ratings from "./Ratings";
import ConditionalRender from "./ConditionalRender";

type ReviewProps = {
  rating: number;
  date: string;
  userImg: string;
  userName: string;
  verified: boolean;
  reviewTitle: string;
  review: string;
};

const reviewsFilter = [
  { key: "all", label: "All" },
  { key: "5stars", label: "5 Stars" },
  { key: "4stars", label: "4 Stars" },
  { key: "3stars", label: "3 Stars" },
  { key: "2stars", label: "2 Stars" },
  { key: "1star", label: "1 Star" },
  { key: "recent", label: "Recent" },
  { key: "oldest", label: "Oldest" },
  { key: "positive", label: "Positive" },
  { key: "negative", label: "Negative" },
];

const ReviewList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedKeys, setSelectedKeys] = useState<string>("all");
  const [enableSearch, setEnableSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [allData, setAllData] = useState<ReviewProps[]>(reviewData);
  const deferredSearchTerm = useDeferredValue(searchTerm);

  const reviewRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);

  const itemsPerPage = 5;

  const filteredReviews = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    if (deferredSearchTerm) {
      const data = reviewData.filter((review) =>
        review.reviewTitle
          .toLowerCase()
          .includes(deferredSearchTerm.toLowerCase())
      );
      setAllData(data);
      return data.slice(startIndex, endIndex);
    } else return reviewData.slice(startIndex, endIndex);
  }, [currentPage, deferredSearchTerm]);

  const handleSelect = (key: any) => {
    setSelectedKeys(key);
    const currentKey = key.currentKey;

    // Create a copy of the original reviews data
    let filteredData = [...reviewData];

    // Apply filter based on selectedKeys
    if (currentKey !== "all") {
      if (currentKey === "recent") {
        filteredData.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
      } else if (currentKey === "oldest") {
        filteredData.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );
      } else if (currentKey === "positive") {
        filteredData = filteredData.filter((review) => review.rating >= 3);
      } else if (currentKey === "negative") {
        filteredData = filteredData.filter((review) => review.rating < 3);
      } else {
        const ratingFilter = parseInt(currentKey.charAt(0));
        filteredData = filteredData.filter(
          (review) => review.rating === ratingFilter
        );
      }
    }

    // Apply search term filter
    if (deferredSearchTerm) {
      filteredData = filteredData.filter((review) =>
        review.reviewTitle
          .toLowerCase()
          .includes(deferredSearchTerm.toLowerCase())
      );
    }

    setAllData(filteredData);
    setCurrentPage(1); // Reset to the first page when changing filters
  };

  const handleSearchClick = () => {
    setEnableSearch(true);
    inputRef.current?.focus();
    // setSearchTerm("");
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    !value && setAllData(reviewData);
  };

  const { flushHeldKeys } = useKeyboardShortcut(
    ["Meta", "J"],
    (shortcutKeys) => handleSearchClick(),
    {
      overrideSystem: false,
      ignoreInputFields: false,
      repeatOnHold: false,
    }
  );

  useEffect(() => {
    const scrollOptions: ScrollIntoViewOptions = {
      behavior: "smooth",
      block: "center",
      inline: "end",
    };

    const handleScrollIntoView = () => {
      if (enableSearch && reviewRef.current) {
        reviewRef.current.scrollIntoView(scrollOptions);
        setEnableSearch(false);
      }
    };

    const timeoutId = setTimeout(handleScrollIntoView, 0);

    return () => clearTimeout(timeoutId);
  }, [enableSearch, reviewRef]);

  return (
    <div className="space-y-6 flex flex-col items-center w-full">
      <div className="flex w-[80%]">
        <div ref={reviewRef} className="w-[80%] p-4">
          <StyledInput
            baseRef={inputRef}
            placeholder="Search for a review"
            iconStart
            both
            keys="J"
            Icon={FiSearch}
            onClick={handleSearchClick}
            onChange={({ target }) => handleSearchChange(target.value)}
          />
        </div>
        <Divider orientation="vertical" className="mx-4 h-[100]" />
        <div className="flex items-center gap-4 w-[20%] p-4">
          <p className="text-2xl font-bold text-gray-400">Filter</p>
          <StyledDropdown
            Trigger={
              <Button
                variant="solid"
                color="secondary"
                className="capitalize min-w-[150px]"
                fullWidth
              >
                {selectedKeys}
              </Button>
            }
            dropdownItems={reviewsFilter}
            handleSelect={handleSelect}
            selectedKeys={selectedKeys}
          />
        </div>
      </div>

      {filteredReviews.map((review, index) => (
        <Reviews key={index} {...review} />
      ))}
      <ConditionalRender
        Component={
          <Pagination
            showControls
            total={Math.ceil(allData.length / itemsPerPage)}
            initialPage={1}
            color="secondary"
            page={currentPage}
            onChange={setCurrentPage}
          />
        }
        condition={allData.length > itemsPerPage}
      />
      <Divider className="my-4" />
    </div>
  );
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
      <Card className="p-6 rounded-lg shadow-md w-full" shadow="sm">
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

export default ReviewList;
