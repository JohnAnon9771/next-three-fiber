interface Props {
  color?: string
}

export default function Plane({color = '#eee'}: Props): JSX.Element {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}
