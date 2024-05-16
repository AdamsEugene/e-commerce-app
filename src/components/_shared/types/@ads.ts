export interface Ad {
  id: string; // Unique identifier for the ad
  name: string; // User-defined name for the campaign
  campaignGoals: string[]; // Array of campaign goals (e.g., "Increase Sales", "Boost Product Discovery")
  budget: number; // Total budget allocated for the campaign
  bidStrategy: "CPC" | "CPM"; // Bidding strategy (Cost-per-Click or Cost-per-Mille)
  startDate?: Date; // Optional start date for the campaign
  endDate?: Date; // Optional end date for the campaign
  status: "Draft" | "Running" | "Paused" | "Ended"; // Current status of the campaign
  targeting?: Targeting; // Targeting options for the campaign (optional)
  creatives: AdCreative[]; // Array of associated ad creatives (images, videos, etc.)
  performanceMetrics: PerformanceMetrics; // Performance metrics for the campaign
}

export interface Targeting {
  location?: {
    country?: string;
    region?: string;
    city?: string;
    postalCode?: string;
  }; // Targeting based on location (optional)
  demographics?: {
    ageRanges?: number[]; // Array of targeted age ranges (optional)
    gender?: string; // Targeted gender (optional)
    income?: string; // Targeted income level (optional)
  }; // Targeting based on demographics (optional)
  interests?: string[]; // Array of targeted interests (optional)
  // Additional Targeting Options
  devices?: string[]; // Array of targeted devices (e.g., "mobile", "desktop", "tablet")
  operatingSystems?: string[]; // Array of targeted operating systems (e.g., "Android", "iOS")
  languages?: string[]; // Array of targeted languages
  customAudience?: string; // ID of a custom audience segment (optional)
}

export interface AdCreative {
  type: "Image" | "Video"; // Type of ad creative (image or video)
  url: string; // URL of the uploaded image or video asset
  headline?: string; // Optional headline for the ad
  description?: string; // Optional description for the ad
  callToAction: string; // Call to action text for the ad button
}

export interface PerformanceMetrics {
  impressions: number; // Total number of times the ad was displayed
  clicks: number; // Total number of clicks on the ad
  ctr: number; // Click-through rate (clicks / impressions)
  conversions?: number; // Number of conversions (sales, signups, etc.) (optional)
  conversionRate?: number; // Conversion rate (conversions / clicks) (optional)
  costPerClick?: number; // Cost per click (optional)

  // Additional Performance Metrics
  averagePosition?: number; // Average position of the ad on the page (optional)
  reach?: number; // Number of unique users who saw the ad (optional)
  frequency?: number; // Average number of times a user saw the ad (optional)
  videoViews?: {
    views?: number; // Total number of times the video ad was played
    completionRate?: number; // Percentage of video ad watched to completion (optional)
  }; // Video-specific metrics (optional)
  // You can add more performance metrics as needed
}