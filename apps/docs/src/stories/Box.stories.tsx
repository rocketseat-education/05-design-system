import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Heading, Text } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {},
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
  args: {
    children: (
      <>
        <Heading>Meus dados</Heading>

        <Text size="sm" css={{ color: '$gray400' }}>
          Seus dados estão disponíveis abaixo.
        </Text>
      </>
    ),
  },
}
