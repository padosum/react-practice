import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import type { Car } from "../../types";

type Cars = {
  searchTerm: string;
  data: Car[];
};

const initialState: Cars = {
  searchTerm: "",
  data: [],
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    changeSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    addCar(state, action: PayloadAction<Omit<Car, "id">>) {
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action: PayloadAction<string>) {
      const updated = state.data.filter(({ id }) => {
        return id !== action.payload;
      });
      state.data = updated;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
