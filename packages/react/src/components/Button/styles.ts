import { styled } from '../../styles'

export const ButtonContainer = styled('button', {
  px: '$4',
  py: '$2',
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
