import { ReactNode } from 'react'

export interface MultiStepProps {
  children: ReactNode
}

export function MultiStep(props: MultiStepProps) {
  return <div {...props} />
}

MultiStep.displayName = 'MultiStep'
