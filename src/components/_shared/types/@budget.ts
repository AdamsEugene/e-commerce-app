export type Budget = {
  title: string;
  budget: number; // Total budget allocated for the campaign
  description?: string;
  daily?: boolean;
  dailyLimit?: number;
  billingStrategy: "cpc" | "cpm";
};
