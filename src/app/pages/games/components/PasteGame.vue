<template>
	<section>
		<div class='col s12'>
      <v-card class="card-main">
        <div class="v-card-content">
          <div class="container">
            <div class="row">
              <div class="col s12">
                <div class="text-typed">              
                  <vue-typer
                    :text='["Ualll... Ótima escolha " + name, "Eu adoro este jogo", "Bom, vamos lá...", " Preste muito atenção \n Neste jogo você deverá acertar a gramatica dos verbo \n Qualquer letra digitada erradamente, você perderá ponto\n Configure o jogo"]'
                    :repeat='0'
                    :shuffle='false'
                    initial-action='typing'
                    :pre-type-delay='70'
                    :type-delay='40'
                    :pre-erase-delay='1000'
                    :erase-delay='50'
                    erase-style='backspace'
                    :erase-on-complete='false'
                    caret-animation='solid'
                  ></vue-typer>
                </div>
              </div>            
            </div>
          </div>
        </div>
      </v-card>
      <v-card class="card-main">
        <div class="v-card-title">
          aaaaaaaaaaa
        </div>
        <div class="row">
              <div class="col s5">
                <div class="input-field">
                  <v-text-input class="name" id="valor" v-model="valor"></v-text-input>
                  <label for="name">Quantos verbos gostaria de treinar?</label>                
                </div>
              </div>
              <div class="col s6">
                <div>
                  O que você gostaria de treinar?
                </div>
                
                <input type="checkbox" id="base" value="base" v-model="checkGame"/>
                <label for="base">base</label>
                
                <input type="checkbox" id="past" value="past"  v-model="checkGame"/>
                <label for="past">Past Tense</label>
                
                <input type="checkbox" id="participle" value="participle"  v-model="checkGame"/>
                <label for="participle">Past participle</label>
              </div>
            </div>
      </v-card>
    </div>
	</section>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      valor: '',
      checkGame: []
    }
  },
  methods: {
    ...mapActions(['changeGame']),
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
