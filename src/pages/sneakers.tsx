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
          <Link href="/sneakers">
            <a className="header__logo">
              <h3>Logo</h3>
            </a>
          </Link>

          <Link href="#">
            <a className="header__menu hide-for-desktop">
              <span id="one"></span>
              <span id="two"></span>
              <span id="three"></span>
            </a>
          </Link>

          <div className="header__links hide-for-mobile">
            <Link href="#">
              <a className="special-link">Work</a>
            </Link>
            <Link href="#">
              <a>Contact</a>
            </Link>
            <Link href="#">
              <a>Studio</a>
            </Link>
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
        <section className="slideshow">
          <div className="scroll-content">
            <ul className="slideshow__list">
              <li className="slideshow__item">
                <Canvas
                  className="canvas"
                  camera={{position: [0, 0, 2], fov: 75}}
                >
                  <ambientLight />
                  <directionalLight position={[7, 0, 5]} intensity={0.4} />
                  <Suspense fallback={null}>
                    <AllStar />
                  </Suspense>
                  <OrbitControls enableZoom={false} />
                </Canvas>
              </li>
            </ul>
          </div>
        </section>
      </S.Main>
    </S.Container>
  )
}
