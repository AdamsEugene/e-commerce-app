import { MicsState } from "@/src/store/micsSlice";
import React from "react";
import ViewCampaign from "./ViewCampaign";
import CreateCampaign from "./CreateCampaign";
import CreateGoal from "./CreateGoal";
import CreateAudience from "./CreateAudience";
import CreateAds from "./CreateAds";

type Kind = "edit" | "view" | "delete";
type Create = "new goal" | "new audience" | "new ad" | "new budget";

type PROPS<T> = {
  onClose: () => void;
  kind: Kind | Create | MicsState["modalFor"];
  item?: T;
};

export default function CampaignModalContent<T>(props: PROPS<T>) {
  const { kind, onClose, item } = props;

  switch (kind) {
    case "view":
    case "edit":
      return <ViewCampaign kind={kind} onClose={onClose} item={item} />;
    case "create_campaign":
      return <CreateCampaign onClose={onClose} />;
    case "new ad":
      return <CreateAds onClose={onClose} />;
    case "new audience":
      return <CreateAudience onClose={onClose} />;
    case "new budget":
      return <div>budget</div>;
    case "new goal":
      return <CreateGoal onClose={onClose} />;
    default:
      return <CreateCampaign onClose={onClose} />;
  }
}
