export default {
  changeName (context, payload) {
    context.commit('CHANGE_NAME', payload)
  },
  changeGame (context, payload) {
    context.commit('CHANGE_GAME', payload)
  },
  changeQuestions (context, payload) {
    context.commit('CHANGE_QUESTIONS', payload)
  }
}
