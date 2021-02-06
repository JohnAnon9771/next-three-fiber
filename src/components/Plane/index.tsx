export default function Plane(): JSX.Element {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial />
    </mesh>
  )
}
