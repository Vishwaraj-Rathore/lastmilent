import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/lastmilent",
  assetPrefix: "/lastmilent/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
