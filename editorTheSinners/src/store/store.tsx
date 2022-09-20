import { configureStore } from '@reduxjs/toolkit'
import counter from '../containers/Counter/slice';

export default configureStore({
  reducer: counter.reducer
})