import { createSlice } from '@reduxjs/toolkit'
import reducers from './reducers';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 123
  },
  reducers
})


export default counterSlice;