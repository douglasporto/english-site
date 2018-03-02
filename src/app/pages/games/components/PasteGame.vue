<template>
	<section>
		<div class='col s12'>
      <v-card>
        <div class="v-card-content">
          <div class="row">
            <div class="col s6">
              <div class="text-typed">              
                <vue-typer
                  :text='["Ualll","Ótima escolha " + name + " ?", "Eu adoro esse jogo", "Bom, vamos lá", "Configure o jogo"]'
                  :repeat='0':shuffle='false'
                  initial-action='erasing'
                  :pre-type-delay='70'
                  :type-delay='30'
                  :pre-erase-delay='2000'
                  :erase-delay='50'
                  erase-style='select-back'
                  :erase-on-complete='false'
                  caret-animation='blink'
                ></vue-typer>
              </div>
            </div>            
          </div>
          <div class="row">
            <div class="col s6 center">
              
            </div>
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
      valor: ''
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
