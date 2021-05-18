export const state = () => ({
  titleForResult: ''
})

export const mutations = {
  setTitleForResult(state, title) {
    state.titleForResult = title
  }
}