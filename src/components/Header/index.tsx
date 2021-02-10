import Link from 'next/link'

import * as S from './styles'

export default function Header(): JSX.Element {
  return (
    <S.Header>
      <div className="start">
        <h3>React Three Fiber</h3>
        <p>JohnAnon9771</p>
        <S.Links>
          <Link href="/first-example">
            <a>First Example</a>
          </Link>
          <Link href="/second-example">
            <a>Second Example</a>
          </Link>
        </S.Links>
      </div>
      <strong>0.1.0</strong>
    </S.Header>
  )
}
