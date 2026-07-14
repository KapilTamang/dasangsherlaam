import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  allowedDevOrigins: ['192.168.254.4','192.168.254.5'],
};

export default nextConfig;
``