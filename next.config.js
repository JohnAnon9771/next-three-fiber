const withTM = require('next-transpile-modules')(
  ['three', '@react-three/drei', 'react-spring/three'] // '@react-three/postprocessing'
)

module.exports = withTM({
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/boxes',
        permanent: true,
      },
    ]
  },
})
