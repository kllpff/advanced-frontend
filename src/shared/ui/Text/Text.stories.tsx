import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Text, TextTheme } from './Text'

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    title: 'This title for test',
    text: 'And this text is too',
  },
}

export const onlyTitle: Story = {
  args: {
    title: 'This title for test',
  },
}

export const onlyText: Story = {
  args: {
    text: 'This text for test',
  },
}

export const PrimaryDark: Story = {
  args: {
    title: 'This title for test',
    text: 'And this text is too',
  },
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const onlyTitleDark: Story = {
  args: {
    title: 'This title for test',
  },
}
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const onlyTextDark: Story = {
  args: {
    text: 'This text for test',
  },
}
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]

export const errorPrimary: Story = {
  args: {
    title: 'This title for test',
    text: 'This text for test',
    theme: TextTheme.ERROR,
  },
}
