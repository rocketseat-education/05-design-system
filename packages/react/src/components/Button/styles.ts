import { styled } from '../../styles'

export const ButtonContainer = styled('button', {
  padding: '$2 $4',
  color: '#FFF',
  background: '$primary',
  borderRadius: '$xs',
  fontSize: '$md',
  border: 0,

  cursor: 'pointer',

  '&:hover': {
    filter: 'brightness(0.9)',
  },
})
