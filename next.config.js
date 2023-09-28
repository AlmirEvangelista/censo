/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

module.exports = nextConfig = {
  ...withPWA({
    dest: 'public',
    register: true,
    skipWaiting: true,
  })
}


// // const withPWA = require('next-pwa')({
// //   dest: 'public'
// // })

// module.exports = withPWA({
//   // next.js config
// })