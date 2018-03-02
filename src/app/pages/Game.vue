<script>
import { mapState } from 'vuex'
import DpName from './games/components/Name'
import DpChooseGame from './games/components/ChooseGame'
import DpPasteGame from './games/components/PasteGame'

export default {
  components: {
    DpName,
    DpChooseGame,
    DpPasteGame
  },
  data () {
    return {
      game: [],
      checkGame: [],
      title: 'Games',
      valor: ''
    }
  },
  computed: {
    ...mapState({
      hasUser: state => state.Games.user.name !== '',
      hasGame: state => state.Games.game.type !== ''
    })
  },
  methods: {
    sortWords: function () {
      let aux = this.$store.state.verbs.irregular[0].verbs
      let item = []
      let a
      let r
      for (var i = 0; i < 12; i++) {
        a = aux.find((_, i, ar) => Math.random() < 1 / (ar.length - i))
        item.push(a)
        r = aux.indexOf(a)
        if (r !== -1) {
          aux.splice(r, 1)
        }
      }
      this.game = item
      console.log(this.game)
    },
    sortGame: function () {
      let ret
      let mod = this.checkGame
      ret = mod.find((_, i, ar) => Math.random() < 1 / (ar.length - i))
      return ret
    },
    pushName: function () {
      if (this.valor === '') {
        alert('Por favor, Qual seu nome?')
        return false
      }
      // this.$store.state.name = this.name
      // console.log(this.$store.state.name)
    }
  }
}
</script>
<template>
    <section>
      <div class="row">
          <div class="col s12">
              <v-card>
                  <div class="v-card-content indigo darken-4 white-text">
                      <header class="center">
                          <h5><i class="material-icons">star_border</i>{{ title }}<i class="material-icons">star_border</i></h5>
                      </header>
                  </div>
              </v-card>
          </div>
          <div v-if="!hasUser"> 
              <dp-name></dp-name> 
          </div>          
          <div v-else-if="!hasGame">
            <dp-choose-Game></dp-choose-Game> 
          </div>
          <div v-else>
            <dp-paste-game></dp-paste-game> 
          </div>












              <div class="col s12 center" v-if="!hasUser">
                  <button class="btn-large waves-effect waves-light red" v-on:click="sortWords">SORT</button>
              </div>
              <div class="col s12 center">
                  <input type="checkbox" id="base" value="base" v-model="checkGame"/>
                  <label for="base">base</label>
                  
                  <input type="checkbox" id="past" value="past"  v-model="checkGame"/>
                  <label for="past">Past Tense</label>
                  
                  <input type="checkbox" id="participle" value="participle"  v-model="checkGame"/>
                  <label for="participle">Past Participle</label>
              </div>
              <div class="col s12">
                  {{ this.checkGame }}
                  {{ this.game }}
                  <v-card>
                      <div class="v-card-content">
                          <table class="centered striped text-vocabulary responsive-table">
                              <thead>
                                  <tr>
                                    <th>Base Form</th>
                                    <th>Past Tense</th>
                                    <th>Past Participle</th>
                                    <th>Translate</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr v-for="(obj, index) in this.game">
                                      {{ sortGame() }}
                                      {{ index }}
                                      <td>
                                        {{ obj.base }}
                                        <div class="input-field col s6">
                                          <input id="base" type="text" class="validate">
                                          <label for="base">Base</label>
                                          <input type="hidden" name="base" :value="obj.base"/>
                                        </div>
                                      </td>
                                      <td>
                                        {{ obj.past }}
                                      </td>
                                      <td>
                                        {{ obj.parti }}
                                      </td>
                                      <td>
                                        {{ obj.translate }}
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </v-card>
              </div>
          </div>    
   </section>
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
@keyframes rocking {
  0%,100% {transform: rotateZ(-10deg);},
  50%     {transform: rotateZ(10deg);}
}

.vue-typer {
  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
  font-size: 2.0em;
}
.vue-typer .right {
    float: none !important;
}
.vue-typer .custom.char.typed {
  color: #009688;
}
.vue-typer .custom.char.selected {
  color: #E91E63;
}

.vue-typer .custom.caret {
  animation: rocking 1s ease-in-out 0s infinite;
}
.vue-typer .custom.caret.typing {
  background-color: #009688;
}
.vue-typer .custom.caret.selecting {
  display: inline-block;
  background-color: #E91E63;
}
</style>
