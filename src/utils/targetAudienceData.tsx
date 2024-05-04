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

const targetAudienceData = {
  age: { label: "Age", icon: <FaUserFriends /> },
  location: { label: "Location", icon: <FaGlobe /> },
  income: { label: "Income Level", icon: <FaDollarSign /> },
  lifestyle: { label: "Lifestyle", icon: <FaHeart /> },
  purchaseBehavior: { label: "Purchase Behavior", icon: <FaShoppingCart /> },
  gender: { label: "Gender", icon: <FaUsers /> },
  geography: { label: "Geography", icon: <FaMapMarkerAlt /> },
  occupation: { label: "Occupation", icon: <FaBriefcase /> },
  interests: { label: "Interests", icon: <FaBook /> },
  device: { label: "Device Usage", icon: <FaMobileAlt /> },
  platform: { label: "Platform", icon: <FaDesktop /> },
  cameraUsage: { label: "Camera Usage", icon: <FaCamera /> },
  foodPreferences: { label: "Food Preferences", icon: <FaUtensils /> },
  musicTaste: { label: "Music Taste", icon: <FaMusic /> },
  movieGenres: { label: "Movie Genres", icon: <FaFilm /> },
  gamingPreferences: { label: "Gaming Preferences", icon: <FaGamepad /> },
  travelInterests: { label: "Travel Interests", icon: <FaPlane /> },
  // Add more target audiences as needed
};

export default targetAudienceData;
