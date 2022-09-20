import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@ignite-ui/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{
          padding: '$4',
          borderRadius: '$md',
          backgroundColor: '$gray800',
          border: '1px solid $gray600',
          display: 'flex',
          flexDirection: 'column',
          gap: '$2',
          margin: '0 auto',
          maxWidth: 480,
        }}
      >
        <Text size="sm">Nome de usuário</Text>
        {Story()}
      </Box>
    ),
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Digite seu nome de usuário',
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
    defaultValue: 'diego-fernandes',
  },
}
