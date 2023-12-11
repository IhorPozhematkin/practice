import {
  configureStore,
  // createAction,
  // createReducer,
  // createSlice,
} from '@reduxjs/toolkit';

// export const increment = createAction('myValue/increment');
// export const decrement = createAction('myValue/decrement');

// const myReducer = createReducer(10, builder => {
//   builder
//     .addCase(increment, (state, action) => {
//       return (state += action.payload);
//     })
//     .addCase(decrement, (state, action) => {
//       return (state -= action.payload);
//     });
// });

// const myReducer = createReducer(10, {
//   [increment]: (state, action) => state + action.payload,
// }); уже не используется

// const myValueSlice = createSlice({
//   name: 'myValue',
//   initialState: 100,
//   reducers: {
//     increment(state, action) {
//       return state + action.payload;
//     },
//     decrement(state, action) {
//       return state - action.payload;
//     },
//   },
// });

// export const store = configureStore({
//   reducer: {
//     myValue: myValueSlice.reducer,
//   },
// });

// export const { increment, decrement } = myValueSlice.actions;

// import { userSlice } from './../redux/userSlice';

// export const store = configureStore({
//   reducer: {
//     user: userSlice.reducer,
//   },
// });

// import { configureStore } from '@reduxjs/toolkit';

// export const store = configureStore({
//   reducer: {},
// });

import { clickReducer } from './clickSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    clicks: clickReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
