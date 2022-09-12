import { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Enviar',
  },
  argTypes: {
    onClick: {
      action: 'click',
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: 'Send',
  },
}

export const Variant1: StoryObj<ButtonProps> = {
  args: {
    children: 'Variant1',
  },
  parameters: {
    docs: {
      description: {
        story: 'Primeira variante desse componente!',
      },
    },
  },
}

export const Variant2: StoryObj<ButtonProps> = {
  args: {
    children: 'Variant2',
  },
}
