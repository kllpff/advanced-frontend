import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'shared/ui/Button/Button'
import { counterActions } from '../model/slice/counterSlice'

export const Counter = () => {
  const dispatch = useDispatch()
  const counterValue = useSelector((state: StateSchema) => state.counter.value)

  const increment = () => {
    dispatch(counterActions.increment())
  }
  const decrement = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button data-testid="increment-btn" onClick={increment}>+</Button>
      <Button data-testid="decrement-btn" onClick={decrement}>-</Button>
    </div>
  )
}
