import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  isLoggedIn: boolean;
  userImg: string;
  name: string;
};

const initialState: UserState = {
  isLoggedIn: false,
  userImg: "",
  name: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserState>) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.userImg = action.payload.userImg;
      state.name = action.payload.name;
    },
  },
});

export const { setUserInfo } = userSlice.actions;
export default userSlice.reducer;
