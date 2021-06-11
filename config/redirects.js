module.exports = [
  {
    source: '/login/',
    destination: '/app/login/',
    permanent: true // 301 == 308 || 302 == 307
  },
  {
    source: '/profile/',
    destination: '/app/profile/',
    permanent: true
  },
  {
    source: '/feed/',
    destination: '/app/feed/',
    permanent: true
  }
]
