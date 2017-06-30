<script>
import { orderBy } from 'lodash'
export default {
  data () {
    return {
      vocabulary: [],
      classies: [],
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
        this.title = 'Vocabulary - Lessons ' + this.$store.state.classies[this.$route.query.class].lesson
        for (voc in this.$store.state.classies[this.$route.query.class].vocabulary) {
          this.vocabulary.unshift(this.$store.state.classies[this.$route.query.class].vocabulary[voc])
        }
      } else {
        this.title = 'All lessons'
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
              <div class="col s12">
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
</style>
