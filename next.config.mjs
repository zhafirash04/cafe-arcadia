/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/alkemis", destination: "/alchemist", permanent: true },
    ];
  },
};

export default nextConfig;
