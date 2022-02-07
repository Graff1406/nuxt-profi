export const state = () => ({
  titleForResult: "",
  queries: {}
});

export const mutations = {
  setTitleForResult(state, title) {
    state.titleForResult = title;
  },
  setUrlQueries(state, queries) {
    state.queries = queries;
  }
};
