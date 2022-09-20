import { StoryObj, Meta } from '@storybook/react'
import { Box, MultiStep, MultiStepProps } from '@ignite-ui/react'

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
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
        {Story()}
      </Box>
    ),
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {
  args: {
    size: 4,
    currentStep: 1,
  },
}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    size: 4,
    currentStep: 4,
  },
}
