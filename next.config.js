const redirects = require('./config/redirects')
module.exports = {
  trailingSlash: true,
  async redirects () {
    return redirects
  },
  async headers () {
    return [
      {
        source: '/app/:path*/',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          }
        ]
      }
    ]
  },
  images: {
    domains: [
      'www.datocms-assets.com',
      'ibcdn.canaltech.com.br'
    ]
  },
}
