import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './actions';
import { RootState } from "../../store/type";

export function Counter() {
  const count = useSelector<RootState, number>(state => state.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}