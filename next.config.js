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
      domains: ['images.unsplash.com'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '',
            pathname: '/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
          },
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
