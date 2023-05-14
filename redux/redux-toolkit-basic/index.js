import * as toolkitRaw from '@reduxjs/toolkit'
const { createSlice, configureStore } = toolkitRaw.default ?? toolkitRaw

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: state => {
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    },
  },
})

export const { incremented, decremented } = counterSlice.actions

const store = configureStore({
  reducer: counterSlice.reducer,
})

store.subscribe(() => console.log(store.getState()))

store.dispatch(incremented())
store.dispatch(incremented())
store.dispatch(decremented())
