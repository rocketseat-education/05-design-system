import { ComponentProps } from 'react'
import { TextAreaContainer } from './styles'

export interface TextAreaProps
  extends ComponentProps<typeof TextAreaContainer> {}

export function TextArea(props: TextAreaProps) {
  return <TextAreaContainer {...props} />
}

TextArea.displayName = 'TextArea'
