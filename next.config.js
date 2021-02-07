const withTM = require('next-transpile-modules')([
  '@react-spring/three',
  '@react-three/drei',
  'three',
])

module.exports = withTM({
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/first-example',
        permanent: true,
      },
    ]
  },
})
