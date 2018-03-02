<template>
	<section>
		<div class='col s12'>
      <v-card>
        <div class="v-card-content">
          <div class="row">
            <div class="col s6">
            	<div class="text-typed">
	              <vue-typer
	                :text='["Oi Seja muito Bem-vindo","Qual seu nome?"]'
	                :repeat='0'
	                :shuffle='false'
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
            <div class="col s4">
              <div class="input-field">
                <v-text-input class="name" id="valor" v-model="valor"></v-text-input>
                <label for="name">Seu nome</label>                
              </div>
            </div>
            <div class="col s2">
            	<button class="btn-large waves-effect waves-light" v-on:click="mudarDados">OK</button>
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
    ...mapActions(['changeName']),
    mudarDados () {
      const payload = {
        name: this.valor
      }
      console.log(payload)
      this.changeName(payload)
      // this.$store.commit('CHANGE_USER', payload)
    }
  },
  computed: {
    name () {
      return this.$store.state.Games.user.name
      // return this.$store.state.game.name
    },
    ...mapState({
      hasUser: state => state.Games.user.name !== ''
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
