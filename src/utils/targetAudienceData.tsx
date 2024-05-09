import {
  FaUserFriends,
  FaGlobe,
  FaDollarSign,
  FaHeart,
  FaShoppingCart,
  FaUsers,
  FaMapMarkerAlt,
  FaBriefcase,
  FaBook,
} from "react-icons/fa";

const targetAudiences = {
  all: {
    label: "All Users",
    icon: <FaUserFriends style={{ color: "blue" }} />,
    description: "Target all users.",
  },
  age: {
    label: "Age Ranges",
    icon: <FaUserFriends style={{ color: "green" }} />,
    description: "Target audience based on age group.",
  },
  gender: {
    label: "Gender",
    icon: <FaUsers style={{ color: "pink" }} />,
    description: "Target audience based on gender identity.",
  },
  income: {
    label: "Income Level",
    icon: <FaDollarSign style={{ color: "red" }} />,
    description: "Target audience based on income level.",
  },
  location: {
    label: "Location",
    icon: <FaGlobe style={{ color: "yellow" }} />,
    description: "Target audience based on geographic location.",
  },
  geography: {
    label: "Geography",
    icon: <FaMapMarkerAlt style={{ color: "teal" }} />,
    description: "Target audience based on geographical regions.",
  },
  lifestyle: {
    label: "Lifestyle",
    icon: <FaHeart style={{ color: "purple" }} />,
    description: "Target audience based on lifestyle preferences.",
  },
  interests: {
    label: "Interests",
    icon: <FaBook style={{ color: "gray" }} />,
    description: "Target audience based on their interests and hobbies.",
  },
  purchaseBehavior: {
    label: "Purchase Behavior",
    icon: <FaShoppingCart style={{ color: "indigo" }} />,
    description: "Target audience based on purchase behavior.",
  },
  occupation: {
    label: "Occupation",
    icon: <FaBriefcase style={{ color: "orange" }} />,
    description: "Target audience based on occupation or profession.",
  },
  productCategory: {
    label: "Product Category",
    icon: <FaShoppingCart style={{ color: "blue" }} />,
    description: "Target audience based on product category preferences.",
  },
  // Add more target audiences as needed
};

type TargetAudience = {
  label: string;
  value: string;
  description?: string;
};

export type TargetAudienceIcon = {
  label: string;
  value: string;
  icon: JSX.Element;
  description?: string;
};

function convertToTargetAudienceData(
  obj: Record<string, { label: string; description?: string }>
): TargetAudience[] {
  return Object.entries(obj).map(([key, value]) => ({
    label: value.label,
    value: key,
    description: value.description || "",
  }));
}

function convertToTargetAudience(
  obj: Record<
    string,
    { label: string; icon: JSX.Element; description?: string }
  >
): TargetAudienceIcon[] {
  return Object.entries(obj).map(([key, value]) => ({
    label: value.label,
    value: key,
    icon: value.icon,
    description: value.description || "",
  }));
}

const targetAudienceData: TargetAudience[] =
  convertToTargetAudienceData(targetAudiences);

const audienceData: TargetAudienceIcon[] =
  convertToTargetAudience(targetAudiences);

export { audienceData, targetAudienceData };
