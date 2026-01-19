import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Since msnglobalmarkets.github.io is likely the primary USER repository, 
  // it is served at the root (https://msnglobalmarkets.github.io/).
  // Thus, basePath and assetPrefix should remain empty.
  basePath: "",
  assetPrefix: "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
