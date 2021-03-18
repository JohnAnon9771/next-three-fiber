import {useLoader} from 'react-three-fiber'

import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'

export default function AllStar(): JSX.Element {
  const gltf = useLoader(GLTFLoader, '/all_star/scene.gltf')

  return (
    <primitive
      object={gltf.scene}
      // scale={[0.1, 0.1, 0.1]}
      // position={[5, -3, 0]}
    />
  )
}
