import { FaImage, FaClipboard, FaShoppingCart } from "react-icons/fa";
import { Ad, AdPreview } from "../components/_shared/types/@ads";

const adsData = [
  {
    id: "banner",
    label: "Banner",
    icon: <FaImage />,
  },
  {
    id: "card",
    label: "Card",
    icon: <FaClipboard />,
  },
  {
    id: "shopping",
    label: "Shopping",
    icon: <FaShoppingCart />,
  },
];

export default adsData;

const ads: Ad[] = [
  {
    id: "ad_1",
    name: "Introducing the New Xylophone",
    campaignGoals: ["Increase Brand Awareness"],
    budget: 1000,
    bidStrategy: "CPM",
    targeting: {
      demographics: {
        ageRanges: [25, 45],
      },
      interests: ["Music", "Children's Toys"],
    },
    creatives: [
      {
        type: "Image",
        url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkidlingoo.com%2Fflowers-name-in-english%2F&psig=AOvVaw1dtKppWszDIAtBvKCfd3B2&ust=1716088250714000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPCA3oadloYDFQAAAAAdAAAAABAE",
        headline: "Spark Creativity with the Xylophone!",
        description: "Fun and educational for all ages.",
        callToAction: "Learn More",
      },
    ],
    performanceMetrics: {
      impressions: 10000,
      clicks: 200,
      ctr: 0.02,
    },
    status: "Running",
  },
  {
    id: "ad_2",
    name: "Summer Sale - Up to 50% Off!",
    campaignGoals: ["Drive Website Traffic"],
    budget: 500,
    bidStrategy: "CPC",
    targeting: {
      location: { country: "United States" },
      interests: ["Fashion", "Shopping"],
    },
    creatives: [
      {
        type: "Image",
        url: "/assets/images/summer-sale.jpg",
        headline: "Shop Now & Save Big!",
        description: "Huge discounts on your favorite styles.",
        callToAction: "Shop Now",
      },
    ],
    performanceMetrics: {
      impressions: 5000,
      clicks: 250,
      ctr: 0.05,
      conversions: 30,
      conversionRate: 0.12,
      costPerClick: 2,
    },
    status: "Running",
  },
  {
    id: "ad_3",
    name: "Free Ebook: 10 Tips for Healthy Eating",
    campaignGoals: ["Generate Leads"],
    budget: 300,
    bidStrategy: "CPC",
    targeting: {
      demographics: {
        ageRanges: [30, 60],
      },
      interests: ["Health", "Nutrition"],
    },
    creatives: [
      {
        type: "Image",
        url: "/assets/images/healthy-eating-ebook.jpg",
        headline: "Eat Well & Feel Great!",
        description: "Download our free guide for healthy eating tips.",
        callToAction: "Get Your Free Ebook",
      },
    ],
    performanceMetrics: {
      impressions: 3000,
      clicks: 150,
      ctr: 0.05,
      conversions: 45,
      conversionRate: 0.3,
      costPerClick: 1.5,
    },
    status: "Paused",
  },
  {
    id: "ad_4",
    name: "Download the Funniest Game Ever!",
    campaignGoals: ["Boost App Downloads"],
    budget: 750,
    bidStrategy: "CPC",
    targeting: {
      devices: ["mobile"],
      interests: ["Games", "Mobile Apps"],
    },
    creatives: [
      {
        type: "Image",
        url: "/assets/images/funny-game.jpg",
        headline: "Get Ready to Laugh!",
        description: "The most hilarious mobile game you'll ever play.",
        callToAction: "Download Now",
      },
    ],
    performanceMetrics: {
      impressions: 8000,
      clicks: 400,
      ctr: 0.05,
      conversions: 100,
      conversionRate: 0.25,
      costPerClick: 1.75,
    },
    status: "Running",
  },
  {
    id: "ad_5",
    name: "Don't Forget About Your Cart!",
    campaignGoals: ["Retarget Website Visitors"],
    budget: 200,
    bidStrategy: "CPC",
    targeting: {
      customAudience: "abandoned_cart_users",
    },
    creatives: [
      {
        type: "Image",
        url: "/assets/images/abandoned-cart.jpg",
        headline: "Your Cart Awaits!",
        description: "Complete your purchase and get your items today.",
        callToAction: "Finish Checkout",
      },
    ],
    performanceMetrics: {
      impressions: 2000,
      clicks: 100,
      ctr: 0.05,
      conversions: 20,
      conversionRate: 0.2,
      costPerClick: 1.5,
    },
    status: "Draft",
  },
  {
    id: "ad_16",
    name: "Celebrate the Season (Video Ad)",
    campaignGoals: ["Increase Brand Awareness"],
    budget: 2000,
    bidStrategy: "CPM",
    targeting: {
      languages: ["English", "Spanish"],
    },
    creatives: [
      {
        type: "Video",
        url: "/assets/images/holiday-ad.mp4",
        headline: "Warm Wishes This Season",
        description: "Spread joy and celebrate with loved ones.",
        callToAction: "Watch Now",
      },
    ],
    performanceMetrics: {
      impressions: 50000,
      clicks: 1000,
      ctr: 0.02,
      videoViews: {
        views: 40000,
        completionRate: 0.75,
      },
    },
    status: "Ended",
  },
  {
    id: "ad_17",
    name: "Explore the Caribbean (Website Traffic)",
    campaignGoals: ["Drive Website Traffic"],
    budget: 800,
    bidStrategy: "CPC",
    targeting: {
      interests: ["Travel", "Caribbean"],
    },
    creatives: [
      {
        type: "Image",
        url: "/assets/images/caribbean-beaches.jpg",
        headline: "Relax and Unwind in Paradise",
        description: "Book your dream vacation to the Caribbean today.",
        callToAction: "Explore Now",
      },
    ],
    performanceMetrics: {
      impressions: 10000,
      clicks: 500,
      ctr: 0.05,
      conversions: 50,
      conversionRate: 0.1,
      costPerClick: 1.6,
    },
    status: "Draft",
  },
  {
    id: "ad_18",
    name: "Boost Your Business (Webinar Registration)",
    campaignGoals: ["Generate Leads"],
    budget: 400,
    bidStrategy: "CPC",
    targeting: {
      demographics: { ageRanges: [22, 35] },
      interests: ["Marketing", "Business Growth"],
    },
    creatives: [
      {
        type: "Image",
        url: "/assets/images/webinar-registration.jpg",
        headline: "Learn How to Scale Your Business",
        description: "Free webinar for entrepreneurs in the tech industry.",
        callToAction: "Register Now",
      },
    ],
    performanceMetrics: {
      impressions: 6000,
      clicks: 240,
      ctr: 0.04,
      conversions: 60,
      conversionRate: 0.25,
      costPerClick: 1.7,
    },
    status: "Paused",
  },
  {
    id: "ad_19",
    name: "Join the Community (Social Media App)",
    campaignGoals: ["Boost App Downloads"],
    budget: 900,
    bidStrategy: "CPC",
    targeting: {
      interests: ["Social Media", "Following specific influencers"],
    },
    creatives: [
      {
        type: "Image",
        url: "/assets/images/social-media-app.jpg",
        headline: "Connect with Friends and Follow Your Passions",
        description: "The hottest social media app for sharing and discovery.",
        callToAction: "Download Now",
      },
    ],
    performanceMetrics: {
      impressions: 15000,
      clicks: 750,
      ctr: 0.05,
      conversions: 150,
      conversionRate: 0.2,
      costPerClick: 1.8,
    },
    status: "Running",
  },
  {
    id: "ad_20",
    name: "Free Shipping on Your Order (Retargeting)",
    campaignGoals: ["Retarget Website Visitors"],
    budget: 300,
    bidStrategy: "CPC",
    targeting: {
      customAudience: "abandoned_cart_users_specific_category",
    },
    creatives: [
      {
        type: "Image",
        url: "/assets/images/free-shipping.jpg",
        headline: "Free Shipping! Limited Time Only",
        description:
          "Complete your purchase and get free shipping on all [category name] items.",
        callToAction: "Checkout Now",
      },
    ],
    performanceMetrics: {
      impressions: 3000,
      clicks: 120,
      ctr: 0.04,
      conversions: 30,
      conversionRate: 0.25,
      costPerClick: 1.5,
    },
    status: "Paused",
  },
  {
    id: "ad_21",
    name: "Support a Cause (Brand Awareness)",
    campaignGoals: ["Increase Brand Awareness"],
    budget: 1200,
    bidStrategy: "CPM",
    targeting: {
      interests: ["Sustainability", "Environmental Causes"],
    },
    creatives: [
      {
        type: "Image",
        url: "/assets/images/cause-marketing.jpg",
        headline: "Make a Difference with Every Purchase",
        description:
          "A portion of proceeds goes towards environmental initiatives.",
        callToAction: "Learn More",
      },
    ],
    performanceMetrics: {
      impressions: 20000,
      clicks: 400,
      ctr: 0.02,
    },
    status: "Running",
  },
  {
    id: "ad_22",
    name: "Learn How to... (Blog Post Traffic)",
    campaignGoals: ["Drive Website Traffic"],
    budget: 600,
    bidStrategy: "CPC",
    targeting: {
      interests: ["Cooking", "Healthy Recipes"],
    },
    creatives: [
      {
        type: "Image",
        url: "/assets/images/healthy-recipe-blog.jpg",
        headline: "Unlock Delicious & Nutritious Meals",
        description: "Read our latest blog post on creating healthy recipes.",
        callToAction: "Read Now",
      },
    ],
    performanceMetrics: {
      impressions: 8000,
      clicks: 320,
      ctr: 0.04,
      conversions: 50,
      conversionRate: 0.156,
      costPerClick: 1.6,
    },
    status: "Running",
  },
  {
    id: "ad_23",
    name: "Join Us for [Event Name] (Event Registration)",
    campaignGoals: ["Generate Leads"],
    budget: 500,
    bidStrategy: "CPC",
    targeting: {
      location: { city: "New York" },
      interests: ["Tech Conferences", "Artificial Intelligence"],
    },
    creatives: [
      {
        type: "Image",
        url: "/assets/images/tech-conference.jpg",
        headline: "Don't Miss Out! AI Conference in NYC",
        description:
          "Network with industry leaders and learn about the future of AI.",
        callToAction: "Register Now",
      },
    ],
    performanceMetrics: {
      impressions: 7000,
      clicks: 280,
      ctr: 0.04,
      conversions: 70,
      conversionRate: 0.25,
      costPerClick: 1.78,
    },
    status: "Running",
  },
  {
    id: "ad_24",
    name: "Take Your Fitness to the Next Level (App Download)",
    campaignGoals: ["Boost App Downloads"],
    budget: 1000,
    bidStrategy: "CPC",
    targeting: {
      interests: ["Fitness", "Running"],
      devices: ["mobile"],
      operatingSystems: ["Android"],
    },
    creatives: [
      {
        type: "Image",
        url: "/assets/images/fitness-app.jpg",
        headline: "Track Your Progress & Smash Your Fitness Goals",
        description:
          "The ultimate fitness app for runners with integrated tracker support.",
        callToAction: "Download Now",
      },
    ],
    performanceMetrics: {
      impressions: 12000,
      clicks: 600,
      ctr: 0.05,
      conversions: 120,
      conversionRate: 0.2,
      costPerClick: 1.67,
    },
    status: "Draft",
  },
  {
    id: "ad_25",
    name: "We Recommend... (Retargeting)",
    campaignGoals: ["Retarget Website Visitors"],
    budget: 400,
    bidStrategy: "CPC",
    targeting: {
      customAudience: "users_browsed_category_x",
    },
    creatives: [
      {
        type: "Image",
        url: "/assets/images/product-recommendations.jpg",
        headline: "Discover Products You'll Love",
        description:
          "Based on your browsing history, we recommend these items.",
        callToAction: "Shop Now",
      },
    ],
    performanceMetrics: {
      impressions: 5000,
      clicks: 200,
      ctr: 0.04,
      conversions: 40,
      conversionRate: 0.2,
      costPerClick: 2,
    },
    status: "Ended",
  },
];

export const adsColumns = [
  { name: "id", uid: "id" },
  { name: "headline", uid: "headline" },
  { name: "description", uid: "description" },
  { name: "type", uid: "type" },
  { name: "callToAction", uid: "callToAction" },
  { name: "actions", uid: "actions" },
];

export const adCreativeData = ads.map((d, i) => ({
  id: i,
  image: d.creatives[0].url,
  ...d.creatives[0],
}));

export const adsPreview: AdPreview[] = [
  {
    type: "Image",
    imagePosition: "left",
    url: "/assets/images/image1.jpg",
    headline: "Discover the New Collection",
    description: "Explore the latest trends in fashion.",
    callToAction: "Shop Now",
  },
  {
    type: "Video",
    imagePosition: "full",
    url: "/assets/images/image2.jpg",
    headline: "Summer Sale",
    description: "Up to 50% off on all items!",
    callToAction: "Watch Now",
  },
  {
    type: "Image",
    imagePosition: "right",
    url: "/assets/images/image3.jpg",
    headline: "Travel the World",
    description: "Book your dream vacation today.",
    callToAction: "Book Now",
  },
  {
    type: "Image",
    imagePosition: "full",
    url: "/assets/images/image4.jpg",
    headline: "Fresh Organic Produce",
    description: "Delivered straight to your door.",
    callToAction: "Order Now",
  },
  {
    type: "Video",
    imagePosition: "left",
    url: "/assets/images/image5.jpg",
    headline: "Fitness Bootcamp",
    description: "Join our 6-week program.",
    callToAction: "Join Now",
  },
  {
    type: "Image",
    imagePosition: "right",
    url: "/assets/images/image6.jpg",
    headline: "Learn a New Skill",
    description: "Online courses available now.",
    callToAction: "Sign Up",
  },
  {
    type: "Video",
    imagePosition: "full",
    url: "/assets/images/image7.jpg",
    headline: "Tech Gadgets Sale",
    description: "Latest gadgets at unbeatable prices.",
    callToAction: "Shop Deals",
  },
  {
    type: "Image",
    imagePosition: "left",
    url: "/assets/images/image8.jpg",
    headline: "Pet Supplies",
    description: "Everything your pet needs.",
    callToAction: "Buy Now",
  },
  {
    type: "Video",
    imagePosition: "right",
    url: "/assets/images/image9.jpg",
    headline: "Home Renovation Tips",
    description: "Transform your home with our guide.",
    callToAction: "Learn More",
  },
  {
    type: "Image",
    imagePosition: "full",
    url: "/assets/images/image10.jpg",
    headline: "Exclusive Member Discounts",
    description: "Sign up for special offers.",
    callToAction: "Join Today",
  },
];
