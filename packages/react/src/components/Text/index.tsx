import { ComponentProps, ElementType, ReactNode } from 'react'
import { TextContainer } from './styles'

export interface TextProps extends ComponentProps<typeof TextContainer> {
  children: ReactNode
  as?: ElementType
}

export function Text(props: TextProps) {
  return <TextContainer {...props} />
}

Text.displayName = 'Text'
