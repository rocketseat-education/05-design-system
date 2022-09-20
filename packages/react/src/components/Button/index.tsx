import { ComponentProps, ReactNode } from 'react'
import { ButtonContainer } from './styles'

export interface ButtonProps extends ComponentProps<typeof ButtonContainer> {
  children: ReactNode
}

export function Button(props: ButtonProps) {
  return <ButtonContainer {...props} />
}

Button.displayName = 'Button'
