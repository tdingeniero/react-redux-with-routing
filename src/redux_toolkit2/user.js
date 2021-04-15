import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: "Teody",
    user: undefined,
  },
  reducers: {
    changeName: (state) => {
      state.value = "Ydoet";
    },
    changeTo: (state, action) => {
      state.value = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload.data;
    },
    getUser: (state, action) => {
      state.user = action.payload.data;
    },
  },
});

export const { changeName, changeTo, setUser, getUser } = userSlice.actions;

export default userSlice.reducer;
