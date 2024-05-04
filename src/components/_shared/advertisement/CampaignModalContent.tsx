import { MicsState } from "@/src/store/micsSlice";
import React from "react";
import ViewCampaign from "./ViewCampaign";
import CreateCampaign from "./CreateCampaign";

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
      return <div>ad</div>;
    case "new audience":
      return <div>audience</div>;
    case "new budget":
      return <div>budget</div>;
    case "new goal":
      return <div>goal</div>;
    default:
      return <CreateCampaign onClose={onClose} />;
  }
}
