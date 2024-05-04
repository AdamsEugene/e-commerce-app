export interface Campaign {
  id: number;
  campaignName: string;
  targetAudience: string[];
  budget: number;
  status: string;
  impressions: number;
  clicks: number;
  spend: number;
}

export const campaignsColumns = [
  { name: "id", uid: "id" },
  { name: "name", uid: "campaignName" },
  { name: "targetAudience", uid: "targetAudience" },
  { name: "budget", uid: "budget" },
  { name: "status", uid: "status" },
  { name: "impressions", uid: "impressions" },
  { name: "clicks", uid: "clicks" },
  { name: "spend", uid: "spend" },
  { name: "actions", uid: "actions" },
];

export const campaigns: Campaign[] = [
  {
    id: 1,
    campaignName: "Summer Sale - Apparel",
    targetAudience: ["Fashion enthusiasts", "Age: 18-35"],
    budget: 100,
    status: "Active",
    impressions: 5234,
    clicks: 187,
    spend: 42.5,
  },
  {
    id: 2,
    campaignName: "New Laptop Launch",
    targetAudience: ["Tech enthusiasts", "Students"],
    budget: 250,
    status: "Ending Soon (3 days left)",
    impressions: 12890,
    clicks: 321,
    spend: 198.75,
  },
  {
    id: 3,
    campaignName: "Back to School Essentials",
    targetAudience: ["Parents", "Location: CA, NY"],
    budget: 75,
    status: "Paused",
    impressions: 2456,
    clicks: 78,
    spend: 15.6,
  },
  {
    id: 4,
    campaignName: "Fall Fitness Gear",
    targetAudience: ["Athletes", "Age: 25-45"],
    budget: 150,
    status: "Active",
    impressions: 8723,
    clicks: 214,
    spend: 78.9,
  },
  {
    id: 5,
    campaignName: "Labor Day Weekend Sale",
    targetAudience: ["All users"],
    budget: 300,
    status: "Ended",
    impressions: 21456,
    clicks: 587,
    spend: 300.0, // Campaign budget fully spent
  },
  {
    id: 6,
    campaignName: "Wireless Headphones Promotion",
    targetAudience: ["Music lovers", "Tech enthusiasts"],
    budget: 200,
    status: "Active",
    impressions: 10231,
    clicks: 158,
    spend: 92.75,
  },
  {
    id: 7,
    campaignName: "New Beauty Products",
    targetAudience: ["Women", "Age: 18-50"],
    budget: 125,
    status: "Active",
    impressions: 7421,
    clicks: 289,
    spend: 57.3,
  },
  {
    id: 8,
    campaignName: "Outdoor Gear for Camping",
    targetAudience: ["Adventurers", "Location: Nationwide"],
    budget: 400,
    status: "Active",
    impressions: 18542,
    clicks: 341,
    spend: 128.6,
  },
  {
    id: 9,
    campaignName: "Home Improvement Tools",
    targetAudience: ["DIY enthusiasts", "Homeowners"],
    budget: 225,
    status: "Paused",
    impressions: 3412,
    clicks: 98,
    spend: 47.25,
  },
  {
    id: 10,
    campaignName: "Black Friday Deals Preview",
    targetAudience: ["All users"],
    budget: 600,
    status: "Draft", // Not yet launched
    impressions: 0,
    clicks: 0,
    spend: 0.0,
  },
  {
    id: 11,
    campaignName: "Winter Clothing Collection",
    targetAudience: ["Fashion enthusiasts", "Age: 18-40"],
    budget: 600,
    status: "Active",
    impressions: 25487,
    clicks: 782,
    spend: 210.4,
  },
];

export const campaignGoals = [
  {
    label: "Increase Sales",
    value: "drive_sales",
    description: "Focus on getting more users to purchase your products.",
  },
  {
    label: "Boost Product Discovery",
    value: "increase_product_discovery",
    description:
      "Increase visibility of specific products or categories to drive sales.",
  },
  {
    label: "Promote New Arrivals",
    value: "promote_new_arrivals",
    description: "Generate awareness and sales for recently added products.",
  },
  {
    label: "Clear Inventory",
    value: "clear_inventory",
    description: "Increase sales of specific products to reduce stock levels.",
  },
  {
    label: "Increase Cart Abandonment Recovery",
    value: "increase_cart_recovery",
    description:
      "Win back users who abandoned their carts and encourage them to complete their purchases.",
  },
  // Add more campaign goals as needed
];
