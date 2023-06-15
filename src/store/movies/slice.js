import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    value: [],
    search: {
      title: "",
      duration: "",
    },
    selectedList: [],
    page: 1,
    lastPage: 1,
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
    setSearchDuration: (state, action) => {
      state.search.duration = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setLastPage: (state, action) => {
      state.lastPage = action.payload;
    },
  },
});

export const {
  setMovies,
  setSearchTitle,
  addToSelected,
  removeFromSelected,
  resetSelected,
  setSearchDuration,
  setPage,
  setLastPage,
} = moviesSlice.actions;

export default moviesSlice.reducer;
