import { styled } from '../../styles'

export const ButtonContainer = styled('button', {
  all: 'unset',
  padding: '$3 $4',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: '5rem',
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  transition: 'background-color 0.2s, color 0.2s',

  cursor: 'pointer',

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$ignite500',

        '&:not(:disabled):hover': {
          background: '$ignite300',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
          cursor: 'not-allowed',
        },
      },
      secondary: {
        color: '$ignite300',
        border: '2px solid $ignite500',

        '&:not(:disabled):hover': {
          background: '$ignite500',
          color: '#FFF',
        },

        '&:disabled': {
          borderColor: '$gray200',
          color: '$gray200',
          cursor: 'not-allowed',
        },
      },
      tertiary: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          color: '#FFF',
        },

        '&:disabled': {
          color: '$gray600',
          cursor: 'not-allowed',
        },
      },
    },
    size: {
      md: {
        padding: '$3 $4',
      },
      sm: {
        padding: '$2 $4',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})
