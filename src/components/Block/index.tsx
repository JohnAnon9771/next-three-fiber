import {  ReactNode } from "react";

interface Props {
  children: ReactNode
  offset: number
  factor: number
}

export default function Block({children, offset, factor, ...props}): JSX.Element {
  return ()
}
