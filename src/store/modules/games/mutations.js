export default {
  'CHANGE_NAME' (state, payload) {
    state.user = payload
  },
  'CHANGE_GAME' (state, payload) {
    state.game = payload
  }
}
