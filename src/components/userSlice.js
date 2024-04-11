import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
  },
  reducers: {
    setUsername1: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { setUsername1 } = userSlice.actions;
export default userSlice.reducer;
