import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("http://localhost:3000/users");

  return response.data;
});

// DEV ONLY
const pause = (duration: number) =>
  new Promise(resolve => setTimeout(resolve, duration));

export { fetchUsers };
