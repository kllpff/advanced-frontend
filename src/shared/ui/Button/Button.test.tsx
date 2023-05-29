import { render, screen } from '@testing-library/react'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

describe('Button', () => {
  test('check element', () => {
    render(<Button>test</Button>)
    expect(screen.getByText('test')).toBeInTheDocument()
  })

  test('Button with theme (additional class)', () => {
    render(<Button theme={ButtonTheme.CLEAR}>test</Button>)
    expect(screen.getByText('test')).toHaveClass('clear')
  })
})
