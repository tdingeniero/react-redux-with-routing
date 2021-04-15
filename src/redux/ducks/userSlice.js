import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      id: "2",
      firstname: "Lei",
      lastname: "Dio",
      role: "Vlogger",
    },
  },
  reducers: {
    setUser: (state, action) => {
      const userdata = action.payload;
      return { ...state, ...userdata };
    },
    getUser: () => {},
  },
});

export const { setUser, getUser } = userSlice.actions;

export default userSlice.reducer;
