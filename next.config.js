/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')('./i18n.ts');
module.exports = withNextIntl({
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'admin.gurmanplyus.az',
            }
        ],
    }
});