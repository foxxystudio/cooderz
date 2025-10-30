/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: false,
   images: {
      // remotePatterns: [{ protocol: 'https', hostname: 'cdn.sanity.io' }],
      qualities: [75, 100], // burada izin verdiğin quality değerlerini yazıyorsun
   },
};

export default nextConfig;
