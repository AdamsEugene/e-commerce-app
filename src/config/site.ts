export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "E-Commerce",
  description:
    "Discover style and convenience in one place. Shop the latest trends with our curated collection for a seamless and stylish shopping experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
  pages: {
    product: "/product",
    products: "/products",
    buyNow: "buy-now",
    checkout: "checkout",
    dashboard: "/dashboard",
    dashboardActivities: "/dashboard/activities",
    dashboardAnalytics: "/dashboard/analytics",
    dashboardSettings: "/dashboard/settings",
    adminDashboard: "/sellers-planet",
    totalSpending: "/dashboard/detail/total-spent",
    totalPurchases: "/dashboard/detail/total-purchases",
    itemsInCart: "/dashboard/detail/items-in-cart",
    totalOrders: "/dashboard/detail/total-orders",
    totalRental: "/dashboard/activities/detail/total-rental-spent",
    totalLeasing: "/dashboard/activities/detail/total-leasing-activities",
    ActivityTotalPurchases:
      "/dashboard/activities/detail/total-items-purchased",
    totalSave: "/dashboard/activities/detail/total-items-saved-for-later",
    adminDashboardActivities: "/sellers-planet/activities",
    adminDashboardAnalytics: "/sellers-planet/analytics",
    adminDashboardSettings: "/sellers-planet/settings",
    adsCampaigns: "/sellers-planet/settings/ads/campaigns",
    adsGroup: "/sellers-planet/settings/ads/group",
    adsBudget: "/sellers-planet/settings/ads/budget",
    adsReporting: "/sellers-planet/settings/ads/reporting",
    ads: "/sellers-planet/settings/ads",
    adminDashboardProduct: "/sellers-planet/my-product",
    adminDashboardAdd: "/sellers-planet/add-product",
    excel: "/sellers-planet/add-product/load-excel",
    csv: "/sellers-planet/add-product/load-csv",
    createTemplate: "/sellers-planet/add-product/create-template",
    useTemplate: "/sellers-planet/add-product/use-template",
    adminDashboardSales: "/sellers-planet/detail/sales",
    adminDashboardOrders: "/sellers-planet/detail/orders",
    adminDashboardCustomers: "/sellers-planet/detail/customers",
    adminDashboardConversion: "/sellers-planet/detail/conversion",
    adminDashboardAOV: "/sellers-planet/detail/average-order-value",
    adminDashboardCartAbandonment: "/sellers-planet/detail/cart-abandonment",
    adminDashboardNewCustomers: "/sellers-planet/detail/new-customers",
    adminDashboardVisits: "/sellers-planet/detail/visits",
    adminDashboardVisitDuration: "/sellers-planet/detail/visit-duration",
    adminDashboardReturningVisitors:
      "/sellers-planet/detail/returning-visitors",
  },
  stores: {
    excelImport: "excelImportDataPoints",
    excelData: "excelData",
    defaultColumns: "defaultColumns",
    allFields: "allFields",
    allExcelData: "allExcelData",
  },
  meta: {
    ITEM_PER_PAGE: 40,
  },
};
