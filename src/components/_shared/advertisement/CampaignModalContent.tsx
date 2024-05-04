import { MicsState } from "@/src/store/micsSlice";
import React from "react";
import ViewCampaign from "./ViewCampaign";
import CreateCampaign from "./CreateCampaign";

type Kind = "edit" | "view" | "delete";

type PROPS<T> = {
  onClose: () => void;
  kind: Kind | MicsState["modalFor"];
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
    default:
      return <CreateCampaign onClose={onClose} />;
  }
}
