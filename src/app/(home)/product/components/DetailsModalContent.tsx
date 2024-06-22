import { ReactNode, useRef } from "react";
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

  const Component = useRef<ReactNode>();

  switch (modalType) {
    case "customization":
      Component.current = <Customization />;
      break;
    case "protection":
      Component.current = <Protection />;
      break;
    case "selectPlan":
      Component.current = <SelectPlan />;
      break;
    case "subscription":
      Component.current = <Subscription />;
      break;
    case "share":
      Component.current = (
        <MoreOnProduct onCopy={onCopy} productName={productName} />
      );
      break;

    default:
      Component.current = (
        <div className="flex w-full h-[50vh] justify-center items-center p-8 text-center">
          <h1 className="text-7xl text-default-300">
            How did you get here?...
          </h1>
        </div>
      );
      break;
  }

  return Component.current;
}
