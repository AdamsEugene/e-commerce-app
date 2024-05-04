import productList from "./productList";

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getProductName = (productId: string) => {
  return productList.find((product) => product.productId === productId)?.name;
};

export const simulateDelay = (seconds: number): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });
};

type Column = { name: string; uid: string };

export const transformColumns = (columns: Column[]): Column[] => {
  return columns.map((c) => ({ ...c, name: c.name.toUpperCase() }));
};

export type CampaignStatus =
  | "active"
  | "ended"
  | "paused"
  | "draft"
  | "ending soon";

export const includesEndingSoon = (label: any): CampaignStatus =>
  label.toLowerCase().includes("ending soon")
    ? "ending soon"
    : label.toLowerCase();

export const campaignStatusColor = (status: keyof typeof mapObj) => {
  const mapObj = {
    active: "#00ff00",
    ended: "#ff0000",
    paused: "#FFA500",
    draft: "#777777",
    "ending soon": "#ffff00",
  };
  return mapObj[status] || "#777777";
};

export const radiateStatus = (status: keyof typeof mapObj) => {
  const mapObj = {
    active: "a",
    ended: "c",
    paused: "e",
    draft: "d",
    "ending soon": "c",
  };
  return mapObj[status] || "d";
};

export const getStatusColor = (remaining: number, total: number) => {
  if (remaining / total > 0.5) return "#00FF00";
  if (remaining / total > 0.25) return "#FFFF00";
  return "#FF0000";
};

export const budgetStatus = (remaining: number, total: number) => {
  if (remaining / total > 0.5) return "active";
  if (remaining / total > 0.25) return "ending soon";
  return "ended";
};

export const budgetStatusRadiate = (remaining: number, total: number) =>
  radiateStatus(budgetStatus(remaining, total));
