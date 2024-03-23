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
    adminDashboard: "/dashboard/admin",
    totalSpending: "/dashboard/detail/total_spent",
    totalPurchases: "/dashboard/detail/total_purchases",
    itemsInCart: "/dashboard/detail/items_in_cart",
    totalOrders: "/dashboard/detail/total_orders",
    totalRental: "/dashboard/activities/detail/total_rental_spent",
    totalLeasing: "/dashboard/activities/detail/total_leasing_activities",
    ActivityTotalPurchases:
      "/dashboard/activities/detail/total_items_purchased",
    totalSave: "/dashboard/activities/detail/total_items_saved_for_later",
    adminDashboardActivities: "/dashboard/admin/activities",
    adminDashboardAnalytics: "/dashboard/admin/analytics",
    adminDashboardSettings: "/dashboard/admin/settings",
    adminDashboardProduct: "/dashboard/admin/my_product",
    adminDashboardAdd: "/dashboard/admin/add_product",
    adminDashboardSales: "/dashboard/admin/detail/sales",
    adminDashboardOrders: "/dashboard/admin/detail/orders",
    adminDashboardCustomers: "/dashboard/admin/detail/customers",
    adminDashboardConversion: "/dashboard/admin/detail/conversion",
    adminDashboardAOV: "/dashboard/admin/detail/average-order-value",
    adminDashboardCartAbandonment: "/dashboard/admin/detail/cart-abandonment",
    adminDashboardNewCustomers: "/dashboard/admin/detail/new-customers",
    adminDashboardVisits: "/dashboard/admin/detail/visits",
    adminDashboardVisitDuration: "/dashboard/admin/detail/visit-duration",
    adminDashboardReturningVisitors: "/dashboard/admin/detail/returning-visitors",
  },
};
