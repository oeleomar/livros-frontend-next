/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler:{
    styledComponents: true
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'covers.openlibrary.org',
    }]
  }
};

export default nextConfig;
