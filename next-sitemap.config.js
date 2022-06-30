/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || 'https://hotbuzz.ru/',
  generateRobotsTxt: true
}

export default config
