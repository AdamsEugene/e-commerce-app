import { ModalType } from "./Details";
import MoreOnProduct from "@/src/components/others/MoreOnProduct";
import Customization from "./Customization";
import Protection from "./Protection";
import SelectPlan from "./SelectPlan";
import Subscription from "./Subscription";

type PROPS = {
  onCopy: () => void;
  productName?: string;
  modalType?: ModalType;
};

export default function DetailsModalContent(props: PROPS) {
  const { modalType, onCopy, productName } = props;

   switch (modalType) {
    case "customization":
      return <Customization />;
    case "protection":
      return <Protection />;
    case "selectPlan":
      return <SelectPlan />;
    case "subscription":
      return <Subscription />;
    case "share":
      return <MoreOnProduct onCopy={onCopy} productName={productName} />;
    default:
      return (
        <div className="flex w-full h-[50vh] justify-center items-center p-8 text-center">
          <h1 className="text-7xl text-default-300">
            How did you get here?...
          </h1>
        </div>
      );
  }
}
