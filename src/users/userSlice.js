import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [
    {
      id: 0,
      name: "Anmol Garg",
      address: "Saraswati Nagar",
    },
    {
      id: 1,
      name: "Amandeep Singh",
      address: "Station",
    },
  ],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user.push(action.payload);
    },
    removeUser: (state, action) => {
      state.user.splice(action.payload, 1);
    },
    editUser: (state, action) => {
      state.user[action.payload.id] = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser, removeUser, editUser } = userSlice.actions;

export default userSlice.reducer;
