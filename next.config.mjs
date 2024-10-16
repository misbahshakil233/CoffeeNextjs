/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'images.unsplash.com',
            'th.bing.com',
            'mir-s3-cdn-cf.behance.net',
            'assets-global.website-files.com',
            'verse.io', // Existing domain
            'thumbs.dreamstime.com', // Add this line to allow images from dreamstime.com
            // Add other domains if needed
        ],
    },
};

export default nextConfig; // Export as default ES module
