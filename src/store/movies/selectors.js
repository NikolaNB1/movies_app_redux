const selectMoviesValue = (state) => {
  return state.movies.value;
};
const selectSearchTitle = (state) => state.movies.search.title;
const selectSelectedList = (state) => state.movies.selectedList;
const selectSelectedCount = (state) =>
  state.movies.selectedList ? state.movies.selectedList.length : 0;
export {
  selectMoviesValue,
  selectSearchTitle,
  selectSelectedList,
  selectSelectedCount,
};
