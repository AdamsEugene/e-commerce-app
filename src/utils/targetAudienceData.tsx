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
  age: {
    label: "Age",
    icon: <FaUserFriends />,
    description: "Target audience based on age group.",
  },
  location: {
    label: "Location",
    icon: <FaGlobe />,
    description: "Target audience based on geographic location.",
  },
  income: {
    label: "Income Level",
    icon: <FaDollarSign />,
    description: "Target audience based on income level.",
  },
  lifestyle: {
    label: "Lifestyle",
    icon: <FaHeart />,
    description: "Target audience based on lifestyle preferences.",
  },
  purchaseBehavior: {
    label: "Purchase Behavior",
    icon: <FaShoppingCart />,
    description: "Target audience based on purchase behavior.",
  },
  gender: {
    label: "Gender",
    icon: <FaUsers />,
    description: "Target audience based on gender identity.",
  },
  geography: {
    label: "Geography",
    icon: <FaMapMarkerAlt />,
    description: "Target audience based on geographical regions.",
  },
  occupation: {
    label: "Occupation",
    icon: <FaBriefcase />,
    description: "Target audience based on occupation or profession.",
  },
  interests: {
    label: "Interests",
    icon: <FaBook />,
    description: "Target audience based on their interests and hobbies.",
  },
  device: {
    label: "Device Usage",
    icon: <FaMobileAlt />,
    description:
      "Target audience based on device usage (e.g., mobile, desktop).",
  },
  platform: {
    label: "Platform",
    icon: <FaDesktop />,
    description:
      "Target audience based on the platform they use (e.g., iOS, Android).",
  },
  cameraUsage: {
    label: "Camera Usage",
    icon: <FaCamera />,
    description:
      "Target audience based on their usage of cameras (e.g., photography enthusiasts).",
  },
  foodPreferences: {
    label: "Food Preferences",
    icon: <FaUtensils />,
    description: "Target audience based on their food preferences.",
  },
  musicTaste: {
    label: "Music Taste",
    icon: <FaMusic />,
    description: "Target audience based on their music preferences.",
  },
  movieGenres: {
    label: "Movie Genres",
    icon: <FaFilm />,
    description: "Target audience based on their preferred movie genres.",
  },
  gamingPreferences: {
    label: "Gaming Preferences",
    icon: <FaGamepad />,
    description: "Target audience based on their gaming preferences.",
  },
  travelInterests: {
    label: "Travel Interests",
    icon: <FaPlane />,
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

function convertToTargetAudienceData(
  obj: Record<string, { label: string; description?: string }>
): TargetAudience[] {
  return Object.entries(obj).map(([key, value]) => ({
    label: value.label,
    value: key,
    description: value.description || "",
  }));
}

const targetAudienceData: TargetAudience[] =
  convertToTargetAudienceData(targetAudiences);

export { targetAudiences, targetAudienceData };
