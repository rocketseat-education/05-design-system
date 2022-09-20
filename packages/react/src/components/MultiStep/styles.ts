import { styled } from '../../styles'

export const MultiStepContainer = styled('div', {})

export const Label = styled('span', {
  fontFamily: '$default',
  fontSize: '$xs',
  color: '$gray200',
})

export const Steps = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(var(--steps-size), 1fr)',
  gap: '$2',
  marginTop: '$1',
})

export const Step = styled('div', {
  height: '$1',
  borderRadius: '$px',
  backgroundColor: '$gray600',

  variants: {
    active: {
      true: {
        backgroundColor: '$gray100',
      },
    },
  },
})
