import { MicsState } from "@/src/store/micsSlice";
import React from "react";
import ViewCampaign from "./ViewCampaign";
import CreateCampaign from "./CreateCampaign";
import CreateGoal from "./CreateGoal";
import CreateAudience from "./CreateAudience";
import CreateAds from "./CreateAds";
import CreateBudget from "./CreateBudget";
import { CampaignType } from "@/src/utils/campaignData";
import ConfirmDelete from "../others/ConfirmDelete";
import ColorPickerModal from "./ColorPickerModal";
import CropImage from "../cropImage/CropImage";

type Kind = "edit" | "view" | "delete" | "color_picker" | "crop_image";
type Create = "new goal" | "new audience" | "new budget";

type PROPS = {
  onClose: () => void;
  kind: Kind | Create | MicsState["modalFor"];
  item?: CampaignType;
  colorKey?: string;
  data?: any;
  onSave?: (n?: any) => void;
};

export default function CampaignModalContent(props: PROPS) {
  const { kind, onClose, item, colorKey, data, onSave } = props;

  switch (kind) {
    case "view":
    case "edit":
      return <ViewCampaign kind={kind} onClose={onClose} item={item} />;
    case "create_campaign":
      return <CreateCampaign onClose={onClose} />;
    case "create_ad":
      return <CreateAds onClose={onClose} />;
    case "new audience":
      return <CreateAudience onClose={onClose} />;
    case "new budget":
      return <CreateBudget onClose={onClose} />;
    case "new goal":
      return <CreateGoal onClose={onClose} />;
    case "color_picker":
      return <ColorPickerModal onClose={onClose} colorKey={colorKey} />;
    case "crop_image":
      return <CropImage onClose={onClose} imgSrc={data} onSave={onSave} />;
    default:
      return <ConfirmDelete onClose={onClose} name={item?.campaignName} />;
  }
}
