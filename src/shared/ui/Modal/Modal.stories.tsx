import type { Meta, StoryObj } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Modal } from './Modal'

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Modal>

export const Primary: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.',
  },
}

export const Dark: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.',
  },
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
