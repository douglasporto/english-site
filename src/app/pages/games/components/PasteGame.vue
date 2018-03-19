<template>
	<section>    
    <v-card class="card-main">
      <div class="v-card-content">
        <v-container fluid>
          <div class="row">
            <div class="col s3">
              <h5>Quantidade de Palavras?</h5>
              <div class="input-field">
                <v-text-field
                  type='number'
                  name="valor"
                  id="valor"
                  v-model="qtd_word"
                ></v-text-field>
              </div>
            </div>
            <div class="col s5 offset-s2">
              <h5>Qual tempo verbal irá treinar?</h5>
              <v-checkbox
                label="BASE"
                v-model="checkGame"
                color="indigo"
                value="BASE"
                hide-details
              ></v-checkbox>
              <v-checkbox
                label="PAST"
                v-model="checkGame"
                color="indigo"
                value="past"
                hide-details
              ></v-checkbox>
              <v-checkbox
                label="PARTICIPLE"
                v-model="checkGame"
                color="indigo"
                value="participle"
                hide-details
              ></v-checkbox>
            </div>
          </div>
          <div class="row">
            <div class="col s12 center">
              <!-- <v-btn color="success">Success</v-btn> -->
              <!-- <v-btn outline color="indigo">Começar</v-btn> -->
              <button class="btn-large waves-effect waves-light" v-on:click="mudarDados">COMEÇAR</button>
            </div>
          </div>
        </v-container>
      </div>
    </v-card>
	</section>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      qtd_word: 0,
      checkGame: []
    }
  },
  methods: {
    ...mapActions(['changeGame']),
    sortWords: function () {
      let aux = this.$store.state.verbs.irregular[0].verbs
      let item = []
      let a
      let r
      let qtd = this.qtd_word
      for (var i = 0; i < qtd; i++) {
        a = aux.find((_, i, ar) => Math.random() < 1 / (ar.length - i))
        item.push(a)
        r = aux.indexOf(a)
        if (r !== -1) {
          aux.splice(r, 1)
        }
      }
      return item
    },
    mudarDados () {
      if (this.qtd_word > 136 || this.qtd_word < 0 || this.qtd_word === '') {
        alert('Por favor, escolha um número de 0 à 136.')
        return false
      }
      if (this.checkGame.length === 0) {
        alert('Por favor, selecione um tempo verbal.')
        return false
      }
      let words = this.sortWords()
      const payload = {
        name: 'paste_verbs',
        ask: this.qtd_word,
        forms: this.checkGame,
        words: words
      }
      this.changeGame(payload)
      // this.$store.commit('CHANGE_USER', payload)
    },
    chooseGame (game) {
      const payload = {
        type: game
      }
      console.log(payload)
      this.changeGame(payload)
      // this.$store.commit('CHANGE_USER', payload)
    }
  },
  computed: {
    game () {
      return this.$store.state.Games.game
      // return this.$store.state.game.name
    },
    name () {
      return this.$store.state.Games.user.name
      // return this.$store.state.game.name
    },
    ...mapState({
      hasGame: state => state.Games.game !== ''
    })
  }
}
</script>
<style>
  .text-typed {
     padding-top: 2em;
     padding-left: 2em;
  } 
</style>
