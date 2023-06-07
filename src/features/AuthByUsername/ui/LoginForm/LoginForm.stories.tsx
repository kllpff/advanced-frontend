import type { Meta, StoryObj } from '@storybook/react'
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { LoginForm } from './LoginForm'

const meta: Meta<typeof LoginForm> = {
  title: 'features/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
  args: {},
}
Primary.decorators = [StoreDecorator({
  loginForm: { username: 'user', password: '1234' },
})]
