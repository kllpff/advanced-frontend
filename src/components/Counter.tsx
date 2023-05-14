import { useState } from 'react'
import classes from './Counter.module.scss'

export const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <div className={classes.counter}>
      <h1>Counter {count}</h1>
      <button className={classes.button} onClick={decrement}>
        -
      </button>
      <button className={classes.button} onClick={increment}>
        +
      </button>
    </div>
  )
}
