import { FC, useEffect, useState } from 'react'

// Component for tests
export const BugButton: FC = () => {
  const [error, setError] = useState(false)

  const throwEvent = () => setError(true)

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])

  return (
    <button
      type="button"
      onClick={throwEvent}
    // eslint-disable-next-line i18next/no-literal-string
    >
      1

    </button>
  )
}
