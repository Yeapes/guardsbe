/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  env: {
    BASE_URL: process.env.BASE_URL,
    DEFAULT_IMAGE: process.env.DEFAULT_IMAGE,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tailwindui.com",
        port: "",
        pathname: "/*",
      },
      {
        protocol: "https",
        hostname: "thepixelcurve.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "static.cdn.wisestamp.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "economictimes.indiatimes.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.mos.cms.futurecdn.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "logohistory.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "html.creativegigstf.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "expert-themes.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "visiwave.softstation.xyz",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "admin.visiwave.xyz",
        port: "",
        pathname: "/**",
      },
    ],
    dangerouslyAllowSVG: true,
  },
};
