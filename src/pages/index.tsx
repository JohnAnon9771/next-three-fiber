import { Canvas } from 'react-three-fiber'

import Box from 'components/Box'

export default function Home(): JSX.Element {
  return (
    <Canvas
      style={{ width: '100vw', height: '100vh' }}
      camera={{
        fov: 75,
        aspect: 2,
        near: 1,
        far: 15,
        position: [0, 0, 5],
      }}
    >
      <Box position={[-2.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
      <Box position={[1.2, 3, -5]} />
    </Canvas>
  )
}
