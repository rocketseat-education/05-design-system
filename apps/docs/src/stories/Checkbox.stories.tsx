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
          padding: '$4',
          borderRadius: '$md',
          backgroundColor: '$gray800',
          border: '1px solid $gray600',
          display: 'flex',
          alignItems: 'center',
          gap: '$3',
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
