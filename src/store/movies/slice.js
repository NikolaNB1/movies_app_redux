import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    value: [],
    search: {
      title: "",
    },
    selectedList: [],
  },
  reducers: {
    setMovies: (state, action) => {
      state.value = action.payload;
    },
    setSearchTitle: (state, action) => {
      state.search.title = action.payload;
    },
    addToSelected: (state, action) => {
      state.selectedList.push(action.payload);
    },
    removeFromSelected: (state, action) => {
      state.selectedList = state.selectedList.filter(
        (id) => id !== action.payload
      );
    },
    resetSelected: (state) => {
      state.selectedList = [];
    },
  },
});

export const {
  setMovies,
  setSearchTitle,
  addToSelected,
  removeFromSelected,
  resetSelected,
} = moviesSlice.actions;

export default moviesSlice.reducer;
