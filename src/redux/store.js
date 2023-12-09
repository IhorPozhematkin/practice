import {
  configureStore,
  // createAction,
  // createReducer,
  createSlice,
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

const myValueSlice = createSlice({
  name: 'myValue',
  initialState: 100,
  reducers: {
    increment(state, action) {
      return state + action.payload;
    },
    decrement(state, action) {
      return state - action.payload;
    },
  },
});

export const store = configureStore({
  reducer: {
    myValue: myValueSlice.reducer,
  },
});

export const { increment, decrement } = myValueSlice.actions;
