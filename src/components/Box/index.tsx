import { useRef } from 'react'
import { useFrame, MeshProps } from 'react-three-fiber'

import { Mesh } from 'three'

export default function Box(props: MeshProps): JSX.Element {
  const refBox = useRef<Mesh>(null)

  useFrame(() => {
    refBox.current.rotation.x = refBox.current.rotation.y += 0.01
  })

  return (
    <mesh {...props} ref={refBox} scale={[1, 1, 1]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshPhongMaterial color="blue" />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
    </mesh>
  )
}
