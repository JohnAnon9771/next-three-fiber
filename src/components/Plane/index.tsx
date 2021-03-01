interface Props {
  color?: string
  args?: [number?, number?]
}

export default function Plane({
  color = '#eee',
  args = [100, 100],
}: Props): JSX.Element {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
      <planeGeometry args={args} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}
