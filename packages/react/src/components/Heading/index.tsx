import { ComponentProps, ElementType, ReactNode } from 'react'
import { HeadingContainer } from './styles'

export interface HeadingProps extends ComponentProps<typeof HeadingContainer> {
  children: ReactNode
  as?: ElementType
}

export function Heading(props: HeadingProps) {
  return <HeadingContainer {...props} />
}

Heading.displayName = 'Heading'
