import { useParams } from "next/navigation";
import { ModalBody, ModalHeader } from "@nextui-org/react";
import { FaCogs, FaEnvelope, FaTools } from "react-icons/fa";
import cartItems from "@/src/utils/cartItem";
import { getRandomTitle } from "@/src/utils/functions";
import StyledTab from "@/src/components/_shared/tabs/StyledTab";
import BasicCustomization from "./BasicCustomization";
import AdvancedCustomization from "./AdvancedCustomization";
import ContactManufacturer from "./ContactManufacturer";

const title = (name: string = "Product Name") => [
  `Make it Yours: Customize Your ${name} (Focuses on personalization)`,
  `Customize Your ${name}: Design Options & Features (Hirelights customization and features)`,
  `Create Your Dream ${name}: Explore Customization (Appeals to emotional connection)`,
];

const customizationTab = [
  {
    id: "default",
    label: "Basic Customization",
    icon: <FaTools />,
    content: <BasicCustomization />,
  },
  {
    id: "advanced",
    label: "Advanced Customization",
    icon: <FaCogs />,
    content: <AdvancedCustomization />,
  },
  {
    id: "contact",
    label: "Contact Manufacturer",
    icon: <FaEnvelope />,
    content: <ContactManufacturer />,
  },
];

export default function Customization() {
  const params = useParams();
  const productId = params.product_id as string;
  const getCurrentItem = cartItems.find((item) => item.productId === productId);

  return (
    <>
      <ModalHeader>
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <FaCogs className="text-2xl" />
            <p className="text-lg font-bold">
              {getRandomTitle(title(getCurrentItem?.name))}
            </p>
          </div>
          <p className="text-sm text-default-500">
            Go beyond the ordinary and make your{" "}
            {getCurrentItem?.name || "Product Name"} truly unique. Experiment
            with our customization tools and create something you'll love.
          </p>
        </div>
      </ModalHeader>
      <ModalBody>
        <StyledTab data={customizationTab} color="secondary" />
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 xs:gap-y-4 md:gap-4"></div>
      </ModalBody>
    </>
  );
}
