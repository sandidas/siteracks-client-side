/** @type {import('next').NextConfig} */
const nextConfig = {

  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  reactStrictMode: true, 
  
  env: {
    API_HOST: process.env.API_HOST,
    API_URL: process.env.API_URL,
    BILLING_URL: process.env.BILLING_URL,
    ASK_ME: process.env.ASK_ME,
    MONGODB_URI: process.env.MONGODB_URI,
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    REGION_AWS: process.env.REGION_AWS,
    BUCKET_NAME_AWS: process.env.BUCKET_NAME_AWS,
  },
  // experimental: {
  //   appDir: false,
  // },
  // eslint configuration
  eslint: {
    ignoreDuringBuilds: true,
  },
  // export path mapping
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     '/': { page: '/' },
  //     // '/about': { page: '/about' },
  //     // '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
  //     // '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
  //     // '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } },
  //   }
  // },

  // images
  images: {
    // limit of 25 deviceSizes values
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // limit of 25 imageSizes values
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // limit of 50 domains values
    domains: [],
    // path prefix for Image Optimization API, useful with `loader`
    path: "/_next/image",
    // loader can be 'default', 'imgix', 'cloudinary', 'akamai', or 'custom'
    loader: "default",
    // file with `export default function loader({src, width, quality})`
    loaderFile: "./public/logo/siteRacksFav.png",
    // disable static imports for image files
    disableStaticImages: false,
    // minimumCacheTTL is in seconds, must be integer 0 or more
    minimumCacheTTL: 60,
    // ordered list of acceptable optimized image formats (mime types)
    formats: ["image/webp"],
    // enable dangerous use of SVG images
    dangerouslyAllowSVG: false,
    // set the Content-Security-Policy header
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // limit of 50 objects
    remotePatterns: [],
    // when true, every image will be unoptimized
    unoptimized: true,
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });

    return config;
  },
  webpack5: false, // to avoid warnings: TypeError: Cannot read properties of undefined (reading 'forEach')
};

module.exports = nextConfig;
