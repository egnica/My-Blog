/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [
			"latestartbucket.s3.us-east-2.amazonaws.com",
			"images.squarespace-cdn.com",
		],
	},
};

export default nextConfig;
