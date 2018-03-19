<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      msg: ''
    }
  },
  computed: {
    ...mapState({
      words: state => state.Games.words,
      ask: state => state.Games.ask,
      hasForms: state => state.Games.forms,
      questions: state => state.Games.questions
    })
  },
  methods: {
    ...mapActions(['changeQuestions', 'changeGame']),
    zerarJogo: function () {
      const payload = {
        name: '',
        ask: '',
        forms: '',
        words: ''
      }
      this.changeGame(payload)
      const payload2 = {
        questions: ''
      }
      this.changeQuestions(payload2)
    }
  },
  created () {
    let cont = 0
    let acerto = 0
    for (var i = 0; i < this.questions.length; i++) {
      if (this.questions[i].base !== undefined) {
        if (this.questions[i].base === 'ok') {
          acerto++
        }
        cont++
      }
      if (this.questions[i].past !== undefined) {
        if (this.questions[i].past === 'ok') {
          acerto++
        }
        cont++
      }
      if (this.questions[i].participle !== undefined) {
        if (this.questions[i].past === 'ok') {
          acerto++
        }
        cont++
      }
    }
    let msg = ''
    var apr = ((parseFloat(acerto) / cont) * 100).toFixed(2)
    if (apr > 80) {
      msg = 'PARABENS! Você acertou ' + acerto + ' VERBOS. ' + apr + '% de acerto'
    } else if (apr > 60) {
      msg = 'olha, você bateu na trave mas se deu bem! acertou ' + acerto + ' verbos. ' + apr + '% de acerto'
    } else {
      msg = 'poxa, precisa estudar mais. você acertou só ' + acerto + ' verbo(s). ' + apr + '% de acerto'
    }
    this.msg = msg
  }
}
</script>
<template>
  <div>
    <div class='row'>
      <div class="col s12 center">
        <h5>{{ msg }}</h5>
      </div>
    </div>
    <div class="row">
      <div class="col s12 center">
        <table class="centered text-vocabulary responsive-table">
          <thead>
              <tr>
                <th>Base Form</th>
                <th>Past Tense</th>
                <th>Past Participle</th>
                <th>Translate</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(obj, index) in this.words">
                  <td>
                    <div class="r_errada" v-if="questions[index].base !== 'ok' ">
                      {{ questions[index].base}}
                    </div>
                    <div class="r_certa">
                      <b>{{ obj.base }}</b>
                    </div>
                  </td>
                  <td>
                    <div class="r_errada" v-if="questions[index].past !== 'ok' ">
                      {{ questions[index].past}}
                    </div>
                    <div class="r_certa">
                      <b>{{ obj.past }}</b>
                    </div>
                  </td>
                  <td>
                    <div class="r_errada" v-if="questions[index].parti !== 'ok' ">
                      {{ questions[index].parti}}
                    </div>
                    <div class="r_certa">
                      <b>{{ obj.parti }}</b>
                    </div>
                  </td>
                  <td>
                    {{ obj.translate }}
                  </td>
              </tr>
          </tbody>
      </table>
      </div>
    </div>
    <div class="row">
      <div class="col s12 center">
        <button class="btn-large waves-effect waves-light" v-on:click="zerarJogo">Jogar novamente</button>
      </div>
    </div>
</div>
</template>
<style>
  .r_errada {
    color: red;
    text-decoration: line-through;
  }
  .r_certa{
    color: green;
  }
</style>
