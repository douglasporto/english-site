<script>
import { orderBy } from 'lodash'
export default {
  data () {
    return {
      vocabulary: [],
      classies: [],
      icon: [],
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
        this.title = 'Lesson ' + this.$store.state.classies[this.$route.query.class].lesson
        for (voc in this.$store.state.classies[this.$route.query.class].vocabulary) {
          this.vocabulary.unshift(this.$store.state.classies[this.$route.query.class].vocabulary[voc])
        }
      } else {
        this.title = 'Review'
        this.classies = this.$store.state.classies
        for (var lesson in this.classies) {
          for (voc in this.$store.state.classies[lesson].vocabulary) {
            this.vocabulary.unshift(this.$store.state.classies[lesson].vocabulary[voc])
          }
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
    if (this.$route.query.class) {
      this.homework = this.$store.state.classies[this.$route.query.class].homework
    } else {
      this.homework = this.$store.state.review
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
                              <h5><i class="material-icons">list</i>{{ title }}<i class="material-icons">list</i></h5>
                          </header>
                      </div>
                  </v-card>
              </div>
              <!-- <div class="col s12">
                <v-card>
                  <div class="v-card-content">
                    <v-tabs>
                      <v-tab target="#Vocabulary">Vocabulary</v-tab>
                      <v-tab target="#homework" v-if="title === 'Review'">Lesson Review</v-tab>
                      <v-tab target="#homework" v-else>Homework</v-tab>
                    </v-tabs>
                  </div>
                </v-card>
              </div> -->
              <div class="col s12" id="homework">
                <v-card>
                  <div class="v-card-content">
                    <div class="row homework" v-for="(obj, index) in homework">
                      <div class="col s12 question">
                        <b><div v-if="obj.lesson">{{ obj.lesson }})</div>{{ obj.title }}</b>
                      </div>
                      <div v-for='(aux, index) in obj.questions' class="row questions">
                        <div class="col m8">{{ index + 1}} ) {{ aux.q }}</div>
                        <div class="col m4">
                          <button class="btn waves-effect waves-light indigo darken-4 white-text" v-on:click="aux.visible = !aux.visible">
                            <div v-if="!aux.visible">Mostrar resposta</div>
                            <div v-if="aux.visible">Esconder resposta</div>
                          </button>                          
                        </div>
                        <div v-show="aux.visible" class="col s12 answer" v-html="aux.r"></div>
                      </div>
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
  padding: 20px;
}
.answer {
  color: #c62828;
  padding-left: 50px !important;
}
.question {
  padding-bottom: 20px !important;
  color: blue;
}
.questions {
  border-bottom: solid 1px #bbdefb;
  padding: 20px !important;
}
</style>
