import dynamic from 'next/dynamic'

import { Canvas } from 'react-three-fiber'

import { OrbitControls } from '@react-three/drei'

const Earth = dynamic(
  () => import('components').then(component => component.Earth),
  { ssr: false }
)

export default function SecondExample(): JSX.Element {
  return (
    <Canvas
      style={{ width: '100%', height: '100%' }}
      camera={{ position: [0, 0, 10], fov: 100 }}
    >
      <ambientLight intensity={0.3} />
      <spotLight intensity={0.5} position={[0, 50, 0]} />
      <Earth />
      <OrbitControls />
    </Canvas>
  )
}
