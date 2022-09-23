import React from 'react';
import store from './store';

interface Store {
        value: number;
}

export type RootState = Store;
export type AppDispatch = typeof store.dispatch;