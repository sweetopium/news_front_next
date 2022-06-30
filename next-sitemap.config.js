/** @type {import('next-sitemap').IConfig} */

const config = {
  siteUrl: process.env.SITE_URL || 'https://hotbuzz.ru/',
  generateRobotsTxt: true
}

module.exports = config
