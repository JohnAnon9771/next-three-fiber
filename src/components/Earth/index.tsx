import React, { useRef } from 'react'

import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh
    ['000_Buffer_Layer']: THREE.Mesh
    ['001_Buffer_Layer']: THREE.Mesh
    ['002_Buffer_Layer']: THREE.Mesh
    ['003_Ground']: THREE.Mesh
    ['004_Water']: THREE.Mesh
    ['005_Grass']: THREE.Mesh
    ['006_Mountains']: THREE.Mesh
    ['007_Mountaintop']: THREE.Mesh
    ['008_Rocky_Mountains']: THREE.Mesh
    ['009_Volcano']: THREE.Mesh
    ['010_Lava']: THREE.Mesh
    ['011_City']: THREE.Mesh
    ['012_Forest']: THREE.Mesh
    ['013_Smoke']: THREE.Mesh
  }
  materials: {
    Material: THREE.MeshStandardMaterial
    ['02___Default_356a4364-dc4c-49e1-b66d-777e360b2659']: THREE.MeshStandardMaterial
    ['_crayfishdiffuse_dc441ba1-20fd-4bb0-903b-6c3f3789250d']: THREE.MeshStandardMaterial
    ['03___Default_fc4d37eb-30f2-442b-b2df-9af7a15fbb98']: THREE.MeshStandardMaterial
    ['Material 5_ab7b51d2-43a7-4dda-91ad-39417ebeb371']: THREE.MeshStandardMaterial
    ['Material 6_708085c7-5088-4a4e-a0c5-fcf4b5945089']: THREE.MeshStandardMaterial
    ['Material 7_f703974a-a68b-454f-9510-70566b586832']: THREE.MeshStandardMaterial
    ['Material 8_ca41bc46-409e-41e2-a486-a4c83367fedd']: THREE.MeshStandardMaterial
    ['Material 9_2b5f6843-d1e7-4301-9b30-84eb26a1074f']: THREE.MeshStandardMaterial
    ['Material 10_425eac47-151e-46ea-a9f8-70324e3b81f8']: THREE.MeshStandardMaterial
    ['Material 11_ca8470d4-b594-4696-9123-7f2b01a92915']: THREE.MeshStandardMaterial
    ['Red material_dd85377a-fe4d-4b7e-9e31-5140031d6cf5']: THREE.MeshStandardMaterial
    ['Material 3_0d178d22-9fb2-42e7-9037-1845a7014128']: THREE.MeshStandardMaterial
    ['Material 4_f9f50583-04c1-4917-a433-2b4aaaf715ce']: THREE.MeshStandardMaterial
    ['Vert.001 material_c517086b-639a-419d-bb39-74705aad4a0b']: THREE.MeshStandardMaterial
  }
}

export default function Earth(
  props: JSX.IntrinsicElements['group']
): JSX.Element {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/earth.glb') as GLTFResult

  return (
    <group
      scale={[0.1, 0.1, 0.1]}
      position={[15, -5, 0]}
      ref={group}
      {...props}
      dispose={null}
    >
      <mesh material={materials.Material} geometry={nodes.Cube.geometry} />
      <mesh
        material={
          materials['02___Default_356a4364-dc4c-49e1-b66d-777e360b2659']
        }
        geometry={nodes['000_Buffer_Layer'].geometry}
        rotation={[1.1, 0.16, -0.99]}
      />
      <mesh
        material={
          materials['_crayfishdiffuse_dc441ba1-20fd-4bb0-903b-6c3f3789250d']
        }
        geometry={nodes['001_Buffer_Layer'].geometry}
        rotation={[1.1, 0.16, -0.99]}
      />
      <mesh
        material={
          materials['03___Default_fc4d37eb-30f2-442b-b2df-9af7a15fbb98']
        }
        geometry={nodes['002_Buffer_Layer'].geometry}
        rotation={[1.1, 0.16, -0.99]}
      />
      <mesh
        material={materials['Material 5_ab7b51d2-43a7-4dda-91ad-39417ebeb371']}
        geometry={nodes['003_Ground'].geometry}
        rotation={[1.1, 0.16, -0.99]}
      />
      <mesh
        material={materials['Material 6_708085c7-5088-4a4e-a0c5-fcf4b5945089']}
        geometry={nodes['004_Water'].geometry}
        rotation={[1.1, 0.16, -0.99]}
      />
      <mesh
        material={materials['Material 7_f703974a-a68b-454f-9510-70566b586832']}
        geometry={nodes['005_Grass'].geometry}
        rotation={[1.1, 0.16, -0.99]}
      />
      <mesh
        material={materials['Material 8_ca41bc46-409e-41e2-a486-a4c83367fedd']}
        geometry={nodes['006_Mountains'].geometry}
        rotation={[1.1, 0.16, -0.99]}
      />
      <mesh
        material={materials['Material 9_2b5f6843-d1e7-4301-9b30-84eb26a1074f']}
        geometry={nodes['007_Mountaintop'].geometry}
        rotation={[1.1, 0.16, -0.99]}
      />
      <mesh
        material={materials['Material 10_425eac47-151e-46ea-a9f8-70324e3b81f8']}
        geometry={nodes['008_Rocky_Mountains'].geometry}
        rotation={[1.1, 0.16, -0.99]}
      />
      <mesh
        material={materials['Material 11_ca8470d4-b594-4696-9123-7f2b01a92915']}
        geometry={nodes['009_Volcano'].geometry}
        rotation={[1.1, 0.16, -0.99]}
      />
      <mesh
        material={
          materials['Red material_dd85377a-fe4d-4b7e-9e31-5140031d6cf5']
        }
        geometry={nodes['010_Lava'].geometry}
        rotation={[1.1, 0.16, -0.99]}
      />
      <mesh
        material={materials['Material 3_0d178d22-9fb2-42e7-9037-1845a7014128']}
        geometry={nodes['011_City'].geometry}
        rotation={[1.1, 0.16, -0.99]}
      />
      <mesh
        material={materials['Material 4_f9f50583-04c1-4917-a433-2b4aaaf715ce']}
        geometry={nodes['012_Forest'].geometry}
        rotation={[1.1, 0.16, -0.99]}
      />
      <mesh
        material={
          materials['Vert.001 material_c517086b-639a-419d-bb39-74705aad4a0b']
        }
        geometry={nodes['013_Smoke'].geometry}
        rotation={[1.1, 0.16, -0.99]}
      />
    </group>
  )
}

useGLTF.preload('/earth.glb')
