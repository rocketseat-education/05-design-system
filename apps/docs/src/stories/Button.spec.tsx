import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './Button.stories'

const { Primary } = composeStories(stories)

it('renders correctly', () => {
  render(<Primary />)
  expect(screen.getByText(/Send/i)).toBeInTheDocument()
})
