import { ReactNode } from 'react'
import { ButtonContainer } from './styles'

export interface ButtonProps {
  children: ReactNode
}

export function Button(props: ButtonProps) {
  return <ButtonContainer {...props} />
}

Button.displayName = 'Button'
