<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      base: [],
      past: [],
      participle: [],
      questions: []
    }
  },
  computed: {
    ...mapState({
      hasUser: state => state.Games.user.name !== '',
      hasGame: state => state.Games.name !== '',
      hasForms: state => state.Games.forms,
      words: state => state.Games.words,
      ask: state => state.Games.ask
    })
  },
  methods: {
    ...mapActions(['changeQuestions']),
    hasBase: function () {
      if (this.hasForms.indexOf('BASE') < 0) {
        return false
      } else {
        return true
      }
    },
    hasPast: function () {
      if (this.hasForms.indexOf('past') < 0) {
        return false
      } else {
        return true
      }
    },
    hasParticiple: function () {
      if (this.hasForms.indexOf('participle') < 0) {
        return false
      } else {
        return true
      }
    },
    verificarRespostas: function () {
      let rBase
      let rPast
      let rParticiple
      for (var i = 0; i < this.ask; i++) {
        if ((this.hasBase() === true && this.base[i] === undefined) || (this.hasPast() === true && this.past[i] === undefined) || (this.hasParticiple() === true && this.participle[i] === undefined)) {
          alert('RESPONDA TODAS AS PERGUNTAS')
          return false
        }
        if (this.hasBase() === true) {
          if (document.getElementById('h_base_' + i).value.toUpperCase() === this.base[i].toUpperCase()) {
            rBase = 'ok'
          } else {
            rBase = this.base[i]
          }
        }
        if (this.hasPast() === true) {
          if (document.getElementById('h_past_' + i).value.toUpperCase() === this.past[i].toUpperCase()) {
            rPast = 'ok'
          } else {
            rPast = this.past[i]
          }
        }
        if (this.hasParticiple() === true) {
          if (document.getElementById('h_participle_' + i).value.toUpperCase() === this.participle[i].toUpperCase()) {
            rParticiple = 'ok'
          } else {
            rParticiple = this.participle[i]
          }
        }

        this.questions[i] = { base: rBase, past: rPast, participle: rParticiple }
      }
      const payload = {
        questions: this.questions
      }
      this.changeQuestions(payload)
    }
  }
}
</script>
<template>
  <div>
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
                <div class="col s6" v-if="hasForms.indexOf('BASE') >= 0">
                  <v-text-field
                    label="BASE"
                    name="base[index]"
                    id="base[index]"
                    v-model="base[index]"
                  ></v-text-field>
                  <input type="hidden" :id="'h_base_'+index" :value="obj.base">
                </div>
                <div v-else>
                  {{ obj.base }}
                </div>
              </td>
              <td>
                <div class="col s6" v-if="hasForms.indexOf('past') >= 0">
                  <v-text-field
                    label="past"
                    name="past[index]"
                    id="past[index]"
                    v-model="past[index]"
                  ></v-text-field>
                  <input type="hidden" :id="'h_past_'+index" :value="obj.past">
                </div>
                <div v-else>
                  {{ obj.past }}
                </div>
              </td>
              <td>
                <div class="col s6" v-if="hasForms.indexOf('participle') >= 0">
                  <v-text-field
                    label="participle"
                    name="participle[index]"
                    id="participle[index]"
                    v-model="participle[index]"
                  ></v-text-field>
                  <input type="hidden" :id="'h_participle_'+index" :value="obj.parti">
                </div>
                <div v-else>
                  {{ obj.parti }}
                </div>
              </td>
              <td>
                {{ obj.translate }}
              </td>
          </tr>
      </tbody>
  </table>
  <div class="center">
    <button class="btn-large waves-effect waves-light" v-on:click="verificarRespostas">RESPONDER</button>
  </div>
</div>
</template>

<style lang="css">
.v-card-content{
    padding: 10px;
}
i {
  padding-left: 10px;
  padding-right: 10px;
}
.player-name {
  font-size: 12px;
}
.switch {
  font-size: 10px;
}
.card-main {
  height: 400px;
}
.vue-typer {
  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
  font-size: 2.0em;
}
.vue-typer .right {
    float: none !important;
}
.vue-typer .custom.caret {
  display: none;
}
</style>
