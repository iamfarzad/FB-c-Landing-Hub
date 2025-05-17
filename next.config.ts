
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    // Add the allowed origins for development HMR
    allowedDevOrigins: [
      "http://localhost:9002", // Your specified local port
      "https://6000-firebase-studio-1747324005069.cluster-oayqgyglpfgseqclbygurw4xd4.cloudworkstations.dev",
      "https://9000-firebase-studio-1747324005069.cluster-oayqgyglpfgseqclbygurw4xd4.cloudworkstations.dev",
      // It's often good to use a wildcard for the port if it can change or if subdomains are involved
      // For cloud workstations, if the port changes, you might need a more general pattern or update this.
      // A more general pattern might be:
      "https://*.cluster-oayqgyglpfgseqclbygurw4xd4.cloudworkstations.dev"
    ],
  },
};

export default nextConfig;
