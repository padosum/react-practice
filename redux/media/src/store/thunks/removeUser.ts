import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { User } from "../../types/User";

const removeUser = createAsyncThunk("users/remove", async (user: User) => {
  await axios.delete(`http://localhost:3000/users/${user.id}`);
  return user;
});

export { removeUser };
