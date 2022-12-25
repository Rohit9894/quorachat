/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    mongodburl:
      "mongodb+srv://r:g@cluster0.ux5ulof.mongodb.net/Quora?retryWrites=true&w=majority",
    sign: "SECRET1234",
  },
};

module.exports = nextConfig;
