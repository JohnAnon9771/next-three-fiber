import dynamic from 'next/dynamic'
import Link from 'next/link'

import {Suspense} from 'react'
import {Canvas} from 'react-three-fiber'

import {Container} from 'styles/pages/sneakers'

const AllStar = dynamic(
  () => import('components').then(component => component.AllStar),
  {ssr: false}
)

export default function ThirtyExample(): JSX.Element {
  return (
    <Container>
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
      <Canvas camera={{position: [0, 3, 2], fov: 75}}>
        <ambientLight />
        <Suspense fallback={null}>
          <AllStar />
        </Suspense>
      </Canvas>
    </Container>
  )
}
