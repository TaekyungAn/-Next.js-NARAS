/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //  이미지 허용할 주소 설정
  images: {
    domains: ["flagcdn.com"],
  },
};

module.exports = nextConfig;
