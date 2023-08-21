import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'

const meta: Meta<typeof Avatar> = {
  title: 'shared/Avatar',
  component: Avatar,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  args: {
    src: 'https://lh3.googleusercontent.com/-zStH0sRSxAk/AAAAAAAAAAI/AAAAAAAAAAA/AJIwbgaT2MQQkbnxBNw_SmMlXKDqzCl2tw/photo.jpg?sz=46',
  },
}
