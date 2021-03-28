import {createContext, useContext} from 'react'
import {useThree, ViewportData} from 'react-three-fiber'

import state from 'store/state'

const offsetContext = createContext(0)

interface UseBlock {
  viewport: ViewportData
  offset: number
  viewportWidth: number
  viewportHeight: number
  canvasWidth: number
  canvasHeight: number
  mobile: boolean
  margin: number
  contentMaxWidth: number
  sectionHeight: number
}

export function useBlock(): UseBlock {
  const {sections, pages} = state
  const {size, viewport} = useThree()
  const offset = useContext(offsetContext)
  const viewportWidth = viewport.width
  const viewportHeight = viewport.height
  const canvasWidth = viewportWidth
  const canvasHeight = viewportHeight
  const mobile = size.width < 700
  const margin = canvasWidth * (mobile ? 0.2 : 0.1)
  const contentMaxWidth = canvasWidth * (mobile ? 0.8 : 0.6)
  const sectionHeight = canvasHeight * ((pages - 1) / (sections - 1))

  return {
    viewport,
    offset,
    viewportWidth,
    viewportHeight,
    canvasWidth,
    canvasHeight,
    mobile,
    margin,
    contentMaxWidth,
    sectionHeight,
  }
}
