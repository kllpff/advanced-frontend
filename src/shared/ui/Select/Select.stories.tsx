import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'

const meta: Meta<typeof Select> = {
  title: 'shared/Select',
  component: Select,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    label: 'hey',
    options: [
      { value: '123', content: 'one two three' },
      { value: '1', content: 'next' },
    ],
  },
}
