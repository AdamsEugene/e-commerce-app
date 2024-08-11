import { Budget } from "../components/_shared/types/@budget";

export const budgets: Budget[] = [
  {
    title: "Default Budget",
    budget: 1000.0,
    billingStrategy: "cpc",
  },
  {
    title: "Hire Budget Campaign",
    budget: 5000.0,
    dailyLimit: 250.0,
    billingStrategy: "cpm",
  },
  {
    title: "Brand Awareness",
    budget: 200.0,
    description: "Increase brand awareness through social media ads",
    billingStrategy: "cpc",
  },
  {
    title: "Retargeting Campaign",
    budget: 1500.0,
    daily: true,
    billingStrategy: "cpc",
  },
  {
    title: "Holiday Promotion",
    budget: 3000.0,
    billingStrategy: "cpm",
  },
  {
    title: "New Product Launch (Headphones)",
    budget: 1200.0,
    dailyLimit: 100.0,
    billingStrategy: "cpc",
  },
  {
    title: "Summer Sale (18-25 year olds)",
    budget: 800.0,
    description: "Target young adults for summer sale",
    billingStrategy: "cpm",
  },
  {
    title: "Mobile App Download Campaign",
    budget: 2500.0,
    daily: true,
    billingStrategy: "cpc", // Cost per install billing strategy (optional)
  },
  {
    title: "Back to School Sale",
    budget: 4000.0,
    description: "Promote school supplies and accessories",
    billingStrategy: "cpc",
  },
  {
    title: "French Market Expansion",
    budget: 1500.0, // Budget in Euros (adjust as needed)
    description: "Target French audience with translated ads",
    billingStrategy: "cpm",
  },
  {
    title: "Black Friday Sale",
    budget: 10000.0,
    dailyLimit: 1500.0,
    billingStrategy: "cpc",
  },
  {
    title: "Loyalty Program Promotion",
    budget: 500.0,
    description: "Run for a month to encourage repeat purchases",
    billingStrategy: "cpm",
  },
  {
    title: "Influencer Collaboration",
    budget: 3000.0,
    description: "Partner with social media influencers",
    billingStrategy: "cpc", // Cost per action billing strategy (optional)
  },
];

export const budgetColumns = [
  { name: "id", uid: "id" },
  { name: "title", uid: "title" },
  { name: "description", uid: "description" },
  { name: "budget", uid: "budget" },
  { name: "dailyLimit", uid: "dailyLimit" },
  { name: "billingStrategy", uid: "billingStrategy" },
  { name: "actions", uid: "actions" },
];

export const budgetsData = budgets.map((d, i) => ({ ...d, id: i }));
