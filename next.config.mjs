/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
    // Enable Cloudinary domains
    domains: ["res.cloudinary.com"],
    // unoptimized: false, // Re-enable Next.js's image optimization
    unoptimized: true,
  },
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "export",
//   images: {
//     unoptimized: true, // Disable built-in image optimization
//     domains: ["res.cloudinary.com"],
//   },
// };

// export default nextConfig;
