const selectMoviesValue = (state) => {
  return state.movies.value;
};
const selectSearchTitle = (state) => state.movies.search.title;
const selectSelectedList = (state) => state.movies.selectedList;
const selectSelectedCount = (state) =>
  state.movies.selectedList ? state.movies.selectedList.length : 0;
const selectSearchDuration = (state) => state.movies.search.duration;
const selectCurrentPage = (state) => state.movies.page;
const selectLastPage = (state) => state.movies.lastPage;
export {
  selectMoviesValue,
  selectSearchTitle,
  selectSelectedList,
  selectSelectedCount,
  selectSearchDuration,
  selectCurrentPage,
  selectLastPage,
};
