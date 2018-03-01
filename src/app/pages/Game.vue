<script>
import { orderBy } from 'lodash'

export default {
  data () {
    return {
      verbs: [],
      filtro: '',
      game: [],
      language: true,
      type: '',
      checkGame: [],
      title: 'Games',
      name: ''
    }
  },
  methods: {
    sortWords: function () {
      this.game = 'aaaaa'
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
      if (this.name === '') {
        alert('Por favor, Qual seu nome?')
        return false
      }
      this.$store.state.name = this.name
      console.log(this.$store.state.name)
    }
  },
  computed: {
    filterWord: function () {
      this.title = 'Games'
      this.verbs = this.$store.state.verbs.irregular[0].verbs
      this.verbs = orderBy(this.verbs, ['base'], ['asc'])
      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), 'i')
        switch (this.type) {
          case 'base':
            return this.verbs.filter(verbs => exp.test(verbs.base))
          case 'past':
            return this.verbs.filter(verbs => exp.test(verbs.past))
          case 'parti':
            return this.verbs.filter(verbs => exp.test(verbs.parti))
          case 'translate':
            return this.verbs.filter(verbs => exp.test(verbs.translate))
          default:
            return this.verbs.filter(verbs => exp.test(verbs.base))
        }
      } else {
        return this.verbs
      }
    }
  }
}
</script>
<template>
    <section>
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
              <div class='col s12'>
                <v-card>
                  <div class="v-card-content">
                    <div class="row">
                      <div class="col s6">
                        <vue-typer
                          :text='["Oi Seja muito Bem-vindo","Qual seu nome?"]'
                          :repeat='0'
                          :shuffle='false'
                          initial-action='erasing'
                          :pre-type-delay='70'
                          :type-delay='70'
                          :pre-erase-delay='2000'
                          :erase-delay='250'
                          erase-style='backspace'
                          :erase-on-complete='false'
                          caret-animation='phase'
                        ></vue-typer>
                      </div>
                      <div class="col s4">
                        <div class="input-field">
                          <v-text-input class="name" id="name" v-model="name"></v-text-input>
                          <label for="name">Seu nome</label>
                          <button class="btn-large waves-effect waves-light" v-on:click="pushName">OK</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </v-card>
              </div>
              <div class="col s12 center">
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
