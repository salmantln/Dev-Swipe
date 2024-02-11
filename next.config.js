/** @type {import('next').NextConfig} */
const nextConfig = {

    // target: 'serverless',
    // async redirects() {
    //   return [
    //       {
    //         source: '/login',
    //         has: [
    //           {
    //             type: 'host',
    //             value: '*.*.*',
    //           },
    //         ],
    //         permanent: false,
    //         destination: 'https://app.localhost:3000/login'
    //       }
    //     ]
    // },

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.orbis.com.ar',
            port: '',
            pathname: '/wp-content/themes/barberry/images/**',
          },
        ],
      },

}

module.exports = nextConfig
