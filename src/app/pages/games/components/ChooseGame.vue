<template>
	<section>
		<div class='col s12'>
      <v-card class="card-main">
        <div class="v-card-content">
          <div class="row">
            <div class="col s6 offset-s3">
              <div class="text-typed">              
                <vue-typer
                  :text='["Ah, entendi!","Tudo bem " + name + " ?", "Escolha um jogo"]'
                  :repeat='0'
                  :shuffle='false'
                  initial-action='typing'
                  :pre-type-delay='70'
                  :type-delay='60'
                  :pre-erase-delay='2000'
                  :erase-delay='50'
                  erase-style='backspace'
                  :erase-on-complete='false'
                  caret-animation='solid'
                ></vue-typer>
              </div>
            </div>            
          </div>
          <div class="row">
            <div class="col s6 center offset-s3">
              <button class="btn-large waves-effect waves-light" v-on:click="chooseGame('paste')" v-show="pronto">Verbos Irregulares</button>
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
      valor: '',
      pronto: false
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
    name () {
      return this.$store.state.Games.user.name
      // return this.$store.state.game.name
    },
    ...mapState({
      hasGame: state => state.Games.game !== ''
    })
  },
  mounted () {
    setTimeout(() => {
      this.pronto = true
    }, 6000)
  }
}
</script>
<style>
  .text-typed {
     padding-top: 2em;
     padding-left: 2em;
  }
</style>
