// toto tu bolo povodne, potom sme to menili nech nam nacitava images
// import type { NextConfig } from "next";
//
// const nextConfig: NextConfig = {
//   /* config options here */
// };
//
// export default nextConfig;


import type { NextConfig } from "next";

const config: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                port: '',
                // pathname: '/**',
                search: '',
            },
        ],
    },
}

export default config