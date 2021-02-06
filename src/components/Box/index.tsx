import { useRef } from 'react'
import { useFrame, MeshProps, BoxGeometryProps } from 'react-three-fiber'

import { Mesh } from 'three'

export default function Box({
  position,
  args,
}: MeshProps & BoxGeometryProps): JSX.Element {
  const refBox = useRef<Mesh>(null)

  useFrame(() => {
    refBox.current.rotation.x = refBox.current.rotation.y += 0.01
  })

  return (
    <mesh position={position} ref={refBox} scale={[1, 1, 1]}>
      <boxGeometry attach="geometry" args={args} />
      <meshPhongMaterial color="black" />
    </mesh>
  )
}
