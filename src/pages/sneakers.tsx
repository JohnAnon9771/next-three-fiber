import dynamic from 'next/dynamic'
import Link from 'next/link'

import {Suspense} from 'react'
import {Canvas} from 'react-three-fiber'

import {OrbitControls} from '@react-three/drei'
import * as S from 'styles/pages/sneakers'

const AllStar = dynamic(
  () => import('components').then(component => component.AllStar),
  {ssr: false}
)

export default function Sneakers(): JSX.Element {
  return (
    <S.Container>
      <header className="header">
        <nav className="header__nav">
          <a href="/" className="header__logo">
            <img src="/public/logo.svg" alt="Logo" />
          </a>

          <Link href="#">
            <a className="header__menu hide-for-desktop">
              <span id="one"></span>
              <span id="two"></span>
              <span id="three"></span>
            </a>
          </Link>

          <div className="header__links hide-for-mobile">
            <a href="#">Work</a>
            <span></span>
            <a href="#about-us">Contact</a>
            <span></span>
            <a href="#services">Studio</a>
          </div>
        </nav>

        <div className="header__section-menu hide-for-desktop">
          <Link href="#">
            <a>Work</a>
          </Link>
          <hr />
          <Link href="#">
            <a>Contact</a>
          </Link>
          <hr />
          <Link href="#">
            <a>Studio</a>
          </Link>
        </div>
      </header>
      <S.Main>
        <Canvas className="canvas" camera={{position: [0, 0.5, 2], fov: 75}}>
          <ambientLight />
          <directionalLight position={[0, 0, 5]} />
          <Suspense fallback={null}>
            <AllStar />
          </Suspense>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </S.Main>
    </S.Container>
  )
}
