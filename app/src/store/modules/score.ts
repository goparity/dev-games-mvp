export default {
  state: {
    score: 0
  },
  mutations: {
    UPDATE_SCORE(state, newScore) {
        state.score = newScore
    }
  },
  actions: {
    updateScore({ commit }, newScore) {
        commit('UPDATE_SCORE', newScore)
    },
  }
}
