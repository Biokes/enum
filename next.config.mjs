/** @type {import('next').NextConfig} */
import withBundleAnalyzer from '@next/bundle-analyzer';
const nextConfig = withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
})({
    reactStrictMode: true,
    swcMinify: true,
});
export default nextConfig;
