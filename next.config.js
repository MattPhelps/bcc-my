// module.exports = {
//     images: {
//       domains: ['inkgenwp.local'],
//     },
//     // Your other Next.js configuration options here
//   };

const { URL } = require('url');

/** @type {import('next').NextConfig} */

  return {
    images: {
      domains: [hostname],
      remotePatterns: [
        {
          protocol: protocol.slice(0, -1),
          hostname,
          port: port || '', // Handle case where port is undefined
          pathname: `${pathname.replace(/\/$/, '')}/**`, // Ensure no trailing slash in pathname
        },
      ],
    },
  };
