/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:false,
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: '192.168.209.18',
            port: '1337',
          },
        ],
      }
};

export default nextConfig;
