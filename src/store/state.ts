import {createRef, RefObject} from 'react'

export interface State {
  sections: number
  pages: number
  zoom: number
  top: RefObject<unknown>
}

const state: State = {
  sections: 3,
  pages: 3,
  zoom: 75,
  top: createRef(),
}

export default state
