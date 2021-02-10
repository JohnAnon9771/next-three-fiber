import dynamic from 'next/dynamic'

import {Canvas} from 'react-three-fiber'

import {OrbitControls} from '@react-three/drei'

import {Plane} from 'components'

const Earth = dynamic(
  () => import('components').then(component => component.Earth),
  {
    ssr: false,
  }
)

export default function SecondExample(): JSX.Element {
  return (
    <Canvas camera={{position: [0, 15, 0], fov: 75}}>
      <Earth />
      <Plane />
      <ambientLight intensity={0.3} />
      <spotLight intensity={0.5} position={[0, 50, 0]} />
      <OrbitControls />
    </Canvas>
  )
}
