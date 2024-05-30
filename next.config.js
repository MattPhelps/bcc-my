// module.exports = {
//     images: {
//       domains: ['inkgenwp.local'],
//     },
//     // Your other Next.js configuration options here
//   };

const { URL } = require('url');

/** @type {import('next').NextConfig} */
module.exports = () => {
  const wordpressUrl = process.env.WORDPRESS_API_URL;

  if (!URL.canParse(wordpressUrl)) {
    throw new Error(`
      Please provide a valid WordPress instance URL.
      Add to your environment variables WORDPRESS_API_URL.
    `);
  }

  const { protocol, hostname, port, pathname } = new URL(wordpressUrl);

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
};
