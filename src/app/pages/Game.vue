<script>
import { mapState } from 'vuex'
import DpName from './games/components/Name'
import DpChooseGame from './games/components/ChooseGame'
import DpPasteGame from './games/components/PasteGame'
import DpPasteGameQuestions from './games/components/PasteGameQuestions'
import DpPasteGameResponse from './games/components/PasteGameResponse'

export default {
  components: {
    DpName,
    DpChooseGame,
    DpPasteGame,
    DpPasteGameQuestions,
    DpPasteGameResponse
  },
  data () {
    return {
      game: [],
      checkGame: [],
      title: 'Games'
    }
  },
  computed: {
    ...mapState({
      hasUser: state => state.Games.user.name !== '',
      hasGame: state => state.Games.name !== '',
      hasQuestions: state => state.Games.questions.length,
      hasForms: state => state.Games.forms
    })
  }
}
</script>
<template>
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
    <!-- <div class="card-main" v-if="!hasUser"> 
        <dp-name></dp-name> 
    </div>          
    <div class="card-main" v-else-if="!hasGame">
      <dp-choose-Game></dp-choose-Game> 
    </div> -->
    <div class="col s12">
      <v-card>
        <div v-if="!hasGame">
          <dp-paste-game></dp-paste-game> 
        </div>
        <div class="v-card-content" v-if="hasGame && !hasQuestions">
          <dp-paste-game-questions></dp-paste-game-questions>
        </div>
      </v-card>
    </div>
    <div class="col s12">
      <v-card>
        <div class="v-card-content" v-if="hasQuestions">
          <dp-paste-game-response></dp-paste-game-response>
        </div>
      </v-card>
    </div>
    <!-- <table class="centered striped text-vocabulary responsive-table">
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
  <button class="btn-large waves-effect waves-light" v-on:click="verificarRespostas">RESPONDER</button> -->
</div>
</template>











              <!-- <div class="col s12 center" v-if="!hasUser">
                  <button class="btn-large waves-effect waves-light red" v-on:click="sortWords">SORT</button>
              </div> -->
              <!-- <div class="col s12 center">
                  <input type="checkbox" id="base" value="base" v-model="checkGame"/>
                  <label for="base">base</label>
                  
                  <input type="checkbox" id="past" value="past"  v-model="checkGame"/>
                  <label for="past">Past Tense</label>
                  
                  <input type="checkbox" id="participle" value="participle"  v-model="checkGame"/>
                  <label for="participle">Past Participle</label>
              </div> -->
              <!-- <div class="col s12">
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
              </div> -->
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
