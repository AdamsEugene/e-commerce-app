"use client";

import { useDeferredValue, useEffect, useMemo, useRef, useState } from "react";
import { Avatar, Card, Divider, Pagination, Button } from "@nextui-org/react";
import { FiSearch } from "react-icons/fi";
import { FaFilter } from "react-icons/fa";
import useKeyboardShortcut from "use-keyboard-shortcut";

import StyledInput from "../_shared/Styled/StyledInput";
import StyledDropdown from "../_shared/others/Dropdown";
import reviewData from "@/src/utils/reviews";
import Ratings from "./Ratings";
import ConditionalRender from "../_shared/Conditional/ConditionalRender";

type ReviewProps = {
  rating: number;
  date: string;
  userImg: string;
  userName: string;
  verified: boolean;
  reviewTitle: string;
  review: string;
};

type DropdownItem = {
  key: string;
  label: string;
};

const dropdownItems = [
  { key: "A to Z", label: "Sort by A to Z" },
  { key: "Z to A", label: "Sort by Z to A" },
  { key: "ratings", label: "Sort by ratings" },
  { key: "recent", label: "Sort by recent" },
  { key: "oldest", label: "Sort by oldest" },
  { key: "positive", label: "Sort by positive" },
  { key: "negative", label: "Sort by negative" },
] as const;

type DropdownItemsType = (typeof dropdownItems)[number]["key"];

const ReviewList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedKeys, setSelectedKeys] = useState<string>("A to Z");
  const [enableSearch, setEnableSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [allData, setAllData] = useState<ReviewProps[]>(reviewData);
  const deferredSearchTerm = useDeferredValue(searchTerm);

  const reviewRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);

  const itemsPerPage = 3;

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
    const currentKey = key.currentKey as DropdownItemsType;

    // Create a copy of the original reviews data
    let filteredData = [...reviewData];

    // Apply filter based on selectedKeys

    switch (currentKey) {
      case "A to Z":
        filteredData.sort((a, b) => a.reviewTitle.localeCompare(b.reviewTitle));
        break;

      default:
        break;
    }

    if (currentKey === "Z to A") {
    }
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
      <div className="flex xs:w-full xs:gap-2 w-[80%]">
        <div ref={reviewRef} className="w-[80%] xs:p-0 p-4">
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
        {/* <Divider orientation="vertical" className="mx-4 h-[100]" /> */}
        <div className="flex items-center gap-4 xs:p-0 p-4">
          <StyledDropdown
            Trigger={
              <Button
                variant="solid"
                color="default"
                startContent={<FaFilter className="text-base" />}
                className="capitalize"
                fullWidth
              >
                {selectedKeys}
              </Button>
            }
            dropdownItems={dropdownItems as any}
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
          <div className="flex justify-end">
            <Pagination
              showControls
              total={Math.ceil(allData.length / itemsPerPage)}
              initialPage={1}
              color="secondary"
              page={currentPage}
              onChange={setCurrentPage}
            />
          </div>
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
