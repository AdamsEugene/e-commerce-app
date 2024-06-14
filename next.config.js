/** @type {import('next').NextConfig} */
const { withNextVideo } = require("next-video/process");

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: process.env.NODE_ENV === "development",
  workboxOptions: {
    disableDevLogs: true,
  },
  // ... other options you like
});

const nextConfig = {};
const videoConfig = withNextVideo(nextConfig);

module.exports = withPWA(videoConfig);
