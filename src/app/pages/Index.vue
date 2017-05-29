<template>
    <section>
      <section>
          <div class="row">
              <div class="col s12">
                  <v-card>
                      <div class="v-card-content indigo darken-4 white-text">
                          <header class="center">
                              <h5><i class="material-icons">star_border</i>Vocabulary<i class="material-icons">star_border</i></h5>
                          </header>
                      </div>
                  </v-card>
              </div>
              <div class="col s12">
                  <v-card>
                      <div class="v-card-content">
                          <input type="search" class="filtro" id="filtro" v-on:input="filtro = $event.target.value" placeholder="Search Word">
                          <table class="striped responsive-table">
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

<script>
import { orderBy } from 'lodash'
export default {
  data () {
    return {
      vocabulary: [],
      classies: [],
      filtro: ''
    }
  },
  computed: {
    filterWord: function () {
      var voc
      if (this.$route.query.class) {
        console.log(this.$store.state.classies[this.$route.query.class].vocabulary)
        console.log(this.$route.query.class)
        for (voc in this.$store.state.classies[this.$route.query.class].vocabulary) {
          this.vocabulary.unshift(this.$store.state.classies[this.$route.query.class].vocabulary[voc])
        }
      } else {
        this.classies = this.$store.state.classies
        for (var lesson in this.classies) {
          for (voc in this.$store.state.classies[lesson].vocabulary) {
            this.vocabulary.unshift(this.$store.state.classies[lesson].vocabulary[voc])
          }
        }
        this.vocabulary = orderBy(this.vocabulary, ['english'], ['asc'])
      }
      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), 'i')
        return this.vocabulary.filter(vocabulary => exp.test(vocabulary.translate))
      } else {
        return this.vocabulary
      }
    }
  }
}
</script>

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
</style>
