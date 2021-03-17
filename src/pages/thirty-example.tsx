import Link from 'next/link'
import {Canvas} from 'react-three-fiber'

import {Container} from 'styles/pages/thirty-example'

export default function ThirtyExample(): JSX.Element {
  return (
    <Container>
      <header className="header">
        <nav className="flex flex-jc-sb flex-ai-c">
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
          <a href="#">Home</a>
          <hr />
          <a href="#">About us</a>
          <hr />
          <a href="#">Services</a>
        </div>
      </header>
      <Canvas camera={{position: [0, 5, 5], fov: 75}}>
        <ambientLight />
        <mesh>
          <boxGeometry />
          <meshBasicMaterial />
        </mesh>
      </Canvas>
    </Container>
  )
}
