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
  FaMobileAlt,
  FaDesktop,
  FaCamera,
  FaUtensils,
  FaMusic,
  FaFilm,
  FaGamepad,
  FaPlane,
} from "react-icons/fa";

const targetAudiences = {
  all: {
    label: "All Users",
    icon: <FaUserFriends style={{ color: "blue" }} />,
    description: "Target all users.",
  },
  age: {
    label: "Age",
    icon: <FaUserFriends style={{ color: "green" }} />,
    description: "Target audience based on age group.",
  },
  location: {
    label: "Location",
    icon: <FaGlobe style={{ color: "yellow" }} />,
    description: "Target audience based on geographic location.",
  },
  income: {
    label: "Income Level",
    icon: <FaDollarSign style={{ color: "red" }} />,
    description: "Target audience based on income level.",
  },
  lifestyle: {
    label: "Lifestyle",
    icon: <FaHeart style={{ color: "purple" }} />,
    description: "Target audience based on lifestyle preferences.",
  },
  purchaseBehavior: {
    label: "Purchase Behavior",
    icon: <FaShoppingCart style={{ color: "indigo" }} />,
    description: "Target audience based on purchase behavior.",
  },
  gender: {
    label: "Gender",
    icon: <FaUsers style={{ color: "pink" }} />,
    description: "Target audience based on gender identity.",
  },
  geography: {
    label: "Geography",
    icon: <FaMapMarkerAlt style={{ color: "teal" }} />,
    description: "Target audience based on geographical regions.",
  },
  occupation: {
    label: "Occupation",
    icon: <FaBriefcase style={{ color: "orange" }} />,
    description: "Target audience based on occupation or profession.",
  },
  interests: {
    label: "Interests",
    icon: <FaBook style={{ color: "gray" }} />,
    description: "Target audience based on their interests and hobbies.",
  },
  device: {
    label: "Device Usage",
    icon: <FaMobileAlt style={{ color: "cyan" }} />,
    description:
      "Target audience based on device usage (e.g., mobile, desktop).",
  },
  platform: {
    label: "Platform",
    icon: <FaDesktop style={{ color: "yellow" }} />,
    description:
      "Target audience based on the platform they use (e.g., iOS, Android).",
  },
  cameraUsage: {
    label: "Camera Usage",
    icon: <FaCamera style={{ color: "blue" }} />,
    description:
      "Target audience based on their usage of cameras (e.g., photography enthusiasts).",
  },
  foodPreferences: {
    label: "Food Preferences",
    icon: <FaUtensils style={{ color: "green" }} />,
    description: "Target audience based on their food preferences.",
  },
  musicTaste: {
    label: "Music Taste",
    icon: <FaMusic style={{ color: "red" }} />,
    description: "Target audience based on their music preferences.",
  },
  movieGenres: {
    label: "Movie Genres",
    icon: <FaFilm style={{ color: "purple" }} />,
    description: "Target audience based on their preferred movie genres.",
  },
  gamingPreferences: {
    label: "Gaming Preferences",
    icon: <FaGamepad style={{ color: "indigo" }} />,
    description: "Target audience based on their gaming preferences.",
  },
  travelInterests: {
    label: "Travel Interests",
    icon: <FaPlane style={{ color: "pink" }} />,
    description:
      "Target audience based on their interests in travel and exploration.",
  },
  // Add more target audiences as needed
};

type TargetAudience = {
  label: string;
  value: string;
  description?: string;
};

type TargetAudienceIcon = {
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
