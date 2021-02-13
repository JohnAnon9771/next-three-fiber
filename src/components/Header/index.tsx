import Link from 'next/link'

import * as S from './styles'

interface Props {
  color?: string
}

export default function Header({color}: Props): JSX.Element {
  return (
    <S.Header style={{color}}>
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
