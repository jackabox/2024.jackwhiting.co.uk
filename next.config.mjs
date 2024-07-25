/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: process.env.NEXT_PUBLIC_REMOTE_PROTOCOL,
        hostname: process.env.NEXT_PUBLIC_REMOTE_HOSTNAME,
        port: "",
        pathname: "/uploads/**",
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
        },
      ],
    })

    return config
  },
}

export default nextConfig
