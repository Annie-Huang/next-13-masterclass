/** @type {import('next').NextConfig} */

// https://nextjs.org/docs/app/building-your-application/data-fetching/forms-and-mutations#how-server-actions-work
const nextConfig = {
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
