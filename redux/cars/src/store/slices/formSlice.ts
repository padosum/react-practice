import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addCar } from "./carsSlice";

const initialState: {
  name: string;
  cost: number;
} = {
  name: "",
  cost: 0,
};
const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    changeName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    changeCost(state, action: PayloadAction<number>) {
      state.cost = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addCar, (state, action) => {
      state.name = "";
      state.cost = 0;
    });
  },
});

export const { changeName, changeCost } = formSlice.actions;
export const formReducer = formSlice.reducer;
