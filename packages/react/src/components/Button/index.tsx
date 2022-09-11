import { ReactNode, useState } from 'react'
import { ButtonContainer } from './styles'

export interface ButtonProps {
  children: ReactNode
}

export function Button(props: ButtonProps) {
  const [isButtonClicked, setIsButtonClicked] = useState(false)

  return (
    <div>
      <ButtonContainer onClick={() => setIsButtonClicked(true)} {...props} />

      {isButtonClicked && <span>Apareceu</span>}
    </div>
  )
}
