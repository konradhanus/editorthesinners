import React from 'react';
import counterSlice from './slice';
// Action creators are generated for each case reducer function
export const {decrement, increment} = counterSlice.actions;
