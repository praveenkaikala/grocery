/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:false,
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: '192.168.210.18',
            port: '1337',
          },
        ],
      }
};

export default nextConfig;
