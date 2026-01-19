import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "msnglobalmarkets.github.io";

const nextConfig: NextConfig = {
  output: "export",
  // For User/Org pages (username.github.io), basePath is usually empty if it's the root site. 
  // But if it's a project site named msnglobalmarkets.github.io pushed to a user account, 
  // it might still be a project site. 
  // HOWEVER, User explicitly said "site should be named as msnglobalmarkets.github.io".
  // Let's assume it's a PROJECT site for checking.
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
