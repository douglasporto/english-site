export default {
  'CHANGE_NAME' (state, payload) {
    state.user = payload
  },
  'CHANGE_GAME' (state, payload) {
    state.name = payload.name
    state.ask = payload.ask
    state.forms = payload.forms
    state.words = payload.words
  },
  'CHANGE_QUESTIONS' (state, payload) {
    state.questions = payload.questions
  }
}
