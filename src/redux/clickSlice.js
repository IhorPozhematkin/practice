import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const clickSlice = createSlice({
  name: 'clicks',
  initialState: {
    value: 0,
    a: 1,
    b: 2,
  },
  reducers: {
    update(state, action) {
      state.value += action.payload;
    },
  },
});

const persistConfig = {
  key: 'clicks',
  storage,
  whitelist: ['value', 'a'],
  // blacklist: ['a'],
};

export const clickReducer = persistReducer(persistConfig, clickSlice.reducer);

export const { update } = clickSlice.actions;

export const getClickValue = state => state.clicks.value;
