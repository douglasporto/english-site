<script>
import { orderBy } from 'lodash'
export default {
  data () {
    return {
      vocabulary: [],
      classies: [],
      homework: '',
      filtro: '',
      language: true,
      title: ''
    }
  },
  computed: {
    filterWord: function () {
      var voc
      this.vocabulary = []
      if (this.$route.query.class) {
        this.title = 'Lessons ' + this.$store.state.classies[this.$route.query.class].lesson
        for (voc in this.$store.state.classies[this.$route.query.class].vocabulary) {
          this.vocabulary.unshift(this.$store.state.classies[this.$route.query.class].vocabulary[voc])
        }
      }
      this.vocabulary = orderBy(this.vocabulary, ['english'], ['asc'])
      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), 'i')
        if (this.language === true) {
          return this.vocabulary.filter(vocabulary => exp.test(vocabulary.translate))
        } else {
          return this.vocabulary.filter(vocabulary => exp.test(vocabulary.english))
        }
      } else {
        return this.vocabulary
      }
    }
  },
  created: function created () {
    this.homework = this.$store.state.classies[this.$route.query.class].homework
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
                              <h5><i class="material-icons">list</i>{{ title }}<i class="material-icons">list</i></h5>
                          </header>
                      </div>
                  </v-card>
              </div>
              <div class="col s12">
                <v-card>
                  <div class="v-card-content">
                    <v-tabs>
                      <v-tab target="#Vocabulary">Vocabulary</v-tab>
                      <v-tab target="#homework">Homework</v-tab>
                    </v-tabs>
                  </div>
                </v-card>
              </div>
              <div class="col s12" id="homework">
                <v-card>
                  <div class="v-card-content">
                    <div class="row homework" v-for="(obj, index) in homework">
                      <div class="col s8 question">{{ index + 1}} ) {{ obj.translate }}</div>
                      <div class="col s4">
                        <v-switch
                          on="Show answer"
                          off="Hide"
                          v-model='obj.visible'
                        ></v-switch>
                      </div>
                      <div v-show="obj.visible" class="col s12 answer">{{ obj.english }}</div>
                    </div>
                  </div>
                </v-card>
              </div>
              <div class="col s12" id="Vocabulary">
                  <v-card>
                      <div class="v-card-content">
                        <div class="input-field">
                            <v-icon prefix>search</v-icon>
                            <v-text-input class="filtro" id="filtro" v-model="filtro"></v-text-input>
                            <label for="filtro">Search Word In</label>
                        </div>
                          <br>
                          <font class="switch"><i>Search Word In:</i></font>
                          <v-switch checked
                            on="Portuguese"
                            off="English"
                            v-model='language'
                          ></v-switch>
                          <table class="striped text-vocabulary">
                              <thead>
                                  <tr>
                                      <th>Word</th>
                                      <th>Translate</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr v-for="(obj, index) in filterWord">
                                      <td class="left">
                                        {{ obj.english }}
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
@media only screen and (max-width: 1200px) {
  .text-vocabulary {
    font-size: 28px;
  }
  html {
    font-size: 18px;
  }
}
.tabs .tab a {
    color: #5c6bc0;
}
.tabs .tab a:hover {
    color: #5c6bc0;
}
.tabs .indicator {
    background-color: #c5cae9;
}
.homework {
  font-size: 28px;
  padding: 20px;
  border-bottom: solid 1px #bbdefb;
}
.answer {
  color: #c62828;
  padding-left: 50px !important;
}
</style>
