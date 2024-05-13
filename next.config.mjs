/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "jw24-cms.test",
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
