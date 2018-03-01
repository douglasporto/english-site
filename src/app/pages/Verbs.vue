<script>
import { orderBy } from 'lodash'
export default {
  data () {
    return {
      verbs: [],
      filtro: '',
      language: true,
      type: '',
      title: ''
    }
  },
  computed: {
    filterWord: function () {
      this.title = 'Irregular Verbs'
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
              <div class="col s12">
                  <v-card>
                      <div class="v-card-content">
                        <div class="input-field">
                            <v-icon prefix>search</v-icon>
                            <v-text-input class="filtro" id="filtro" v-model="filtro"></v-text-input>
                            <label for="filtro">Search Word In</label>
                        </div>
                          <br>
                          <font class="switch"><i>Search Word In:</i></font><br>
                            <input class="with-gap" name="group1" type="radio" value="base" v-model="type" id="base" />
                            <label for="base">Base</label>
                            <input class="with-gap" name="group1" type="radio" value="past" v-model="type" id="past" />
                            <label for="past">Past</label>
                            <input class="with-gap" name="group1" type="radio" value="parti" v-model="type" id="parti"  />
                            <label for="parti">Past Participle</label>
                            <input class="with-gap"name="group1" type="radio" value="translate" v-model="type" id="translate"/>
                            <label for="translate">Translate</label>
                          <!--<v-switch checked
                            on="Portuguese"
                            off="English"
                            v-model='language'
                          ></v-switch>-->
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
                                  <tr v-for="(obj, index) in filterWord">
                                      <td>
                                        {{ obj.base }}
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
</style>
