import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Enviar',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {
  args: {
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi pariatur atque nostrum mollitia!',
  },
}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Você pode utilizar qualquer tag do HTML ou até componentes do React no atributo `as`',
      },
    },
  },
}
