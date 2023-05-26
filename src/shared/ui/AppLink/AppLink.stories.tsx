import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { AppLink, AppLinkTheme } from './AppLink'

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    to: '/',
  },
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    children: 'text',
    theme: AppLinkTheme.PRIMARY,
  },
}

export const Secondary: Story = {
  args: {
    children: 'text',
    theme: AppLinkTheme.SECONDARY,
  },
}

export const PrimaryDark: Story = {
  args: {
    children: 'text',
    theme: AppLinkTheme.PRIMARY,
  },
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SecondaryDark: Story = {
  args: {
    children: 'text',
    theme: AppLinkTheme.SECONDARY,
  },
}
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]
