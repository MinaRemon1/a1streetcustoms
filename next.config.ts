/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
          {
            protocol: 'https',
            hostname: 'pbs.twimg.com',
            pathname: '**',
          },
          {
              protocol: 'https',
              hostname: 'images.unsplash.com',
              pathname: '**',
            },
            {
              protocol: 'https',
              hostname: 'images.prismic.io',
              pathname: '**',
            },
            {
              protocol: 'https',
              hostname: 's3-media0.fl.yelpcdn.com',
              pathname: '**',
            },
        ],
  },
};

export default nextConfig;

