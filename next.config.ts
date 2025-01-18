import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	sassOptions: {
		variables: `@import @/styles/_variables.scss`,
	},
};

export default nextConfig;
