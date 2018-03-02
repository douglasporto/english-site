export default {
  changeName (context, payload) {
    context.commit('CHANGE_NAME', payload)
  },
  changeGame (context, payload) {
    context.commit('CHANGE_GAME', payload)
  }
}
