import type { Meta, StoryObj } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import ProfilePage from './ProfilePage'

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
  args: {},
}

export const Dark: Story = {
  args: {},
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
