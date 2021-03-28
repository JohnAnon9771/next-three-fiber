import {useRef, useEffect} from 'react'
import {Canvas} from 'react-three-fiber'

import state, {State} from 'store/state'

function onScroll(event, state: State) {
  return (state.top.current = event.target.scrollTop)
}

export default function Scroll(): JSX.Element {
  const scrollAreaRef = useRef()

  useEffect(() => void onScroll({target: scrollAreaRef.current}, state), [])

  return (
    <>
      <Canvas></Canvas>
      <div
        className="scrollArea"
        ref={scrollAreaRef}
        onScroll={e => void onScroll(e, state)}
      >
        <div style={{height: `${state.pages * 100}vh`}} />
      </div>
    </>
  )
}
