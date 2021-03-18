import Link from 'next/link'

import {version} from '../../../package.json'
import * as S from './styles'

interface Props {
  color?: string
}

export default function Header({color}: Props): JSX.Element {
  return (
    <S.Header style={{color}}>
      <div className="start">
        <h3>
          React Three Fiber in <em>Next.js</em>
        </h3>
        <p>JohnAnon9771</p>
        <S.Links>
          <Link href="/boxes">
            <a>First Example</a>
          </Link>
          <Link href="/cosmos">
            <a>Second Example</a>
          </Link>
          <Link href="/sneakers">
            <a>Thirty Example</a>
          </Link>
        </S.Links>
      </div>
      <strong>{version}</strong>
    </S.Header>
  )
}
