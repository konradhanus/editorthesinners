import React from 'react';
import { RootState } from "../../store/type";
import {PayloadAction } from '@reduxjs/toolkit';

const increment = (state: RootState):void => {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    state.value += 1
};

const decrement =  (state: RootState):void => {
    state.value -= 1
};

const incrementByAmount = (state: RootState, action: PayloadAction<number>):void => {
    state.value += action.payload;
};

const robCos = (state: RootState) => {
      state.value = 1000000;
      return state;
};

const reducers = { increment, decrement, incrementByAmount, robCos };
export default reducers;