import { Canvas } from 'react-three-fiber'

import Box from 'components/Box'
import Header from 'components/Header'

export default function Home(): JSX.Element {
  return (
    <>
      <Header />
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Box position={[-5, 0, -5]} />
        <Box position={[0, 0, -1]} args={[1, 1.5, 3]} />
        <Box position={[5, 0, -5]} />
        <directionalLight position={[0, 10, 0]} intensity={1} />
        <ambientLight intensity={0.3} />
        <pointLight position={[-10, 0, -5]} intensity={0.5} />
        <pointLight position={[0, 0, 5]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />
      </Canvas>
    </>
  )
}
