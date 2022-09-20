import { StoryObj, Meta } from '@storybook/react'
import { Box, Checkbox, CheckboxProps, Text } from '@ignite-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{
          display: 'flex',
          alignItems: 'center',
          gap: '$3',
          margin: '0 auto',
        }}
      >
        {Story()}
        <Text>Concordo com os termos</Text>
      </Box>
    ),
  ],
  argTypes: {
    onCheckedChange: {
      action: 'change',
    },
    checked: {
      type: 'boolean',
    },
  },
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
